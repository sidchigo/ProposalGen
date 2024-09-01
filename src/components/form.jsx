"use client";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
	collection,
	orderBy,
	query,
	doc,
	writeBatch,
	runTransaction,
} from "firebase/firestore";
import toast, { useToasterStore } from "react-hot-toast";
import { QRCodeSVG } from "qrcode.react";

import { auth, db } from "@/lib/firebase/clientApp";
import showToast from "./toast";

const TOAST_LIMIT = 3;
const PAYMENT_MODES = ["Cash", "UPI"];
const INITIAL_FORM_DATA = {
	phone: "",
	name: "Siddhesh",
	date: dayjs().format("YYYY-MM-DD"),
	event: 0,
	amount: 100,
	paymentMode: PAYMENT_MODES[0],
};
const UPI_ID = "8169981337@apl";

export default function Form({ type, name }) {
	const [payload, payloadSet] = useState(INITIAL_FORM_DATA);
	const [user] = useAuthState(auth);
	const eventsRef = query(collection(db, "events"));
	const [events, loading, error] = useCollectionData(
		query(eventsRef, orderBy("name", "asc"))
	);
	const { toasts } = useToasterStore();

	// limit max number of toasts
	useEffect(() => {
		toasts
			.filter((t) => t.visible) // Only consider visible toasts
			.filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
			.forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
	}, [toasts]);

	const handlePhone = (e) => {
		const numberRegex = /^\d+$/;
		if (
			e.currentTarget.value === "" ||
			numberRegex.test(e.currentTarget.value)
		) {
			payloadSet({ ...payload, phone: e.currentTarget.value });
		}
	};

	const saveReceipt = async () => {
		const batch = writeBatch(db);
		const receiptRef = doc(collection(db, "receipts"));
		const userRef = doc(db, "users", payload.phone);

		try {
			batch.set(receiptRef, payload);
			await runTransaction(db, async (transaction) => {
				const user = await transaction.get(userRef);
				console.log({ user });
				if (!user.exists()) {
					transaction.set(userRef, {
						name: payload.name,
						role: "donor",
					});
				}
			});
		} catch (err) {
			console.log({ err });
		}

		await batch.commit();
	};

	const createReceipt = async () => {
		// save receipt to DB
		// await saveReceipt();

		// show toast to user and reset form
		showToast("Receipt is created!");
		payloadSet(INITIAL_FORM_DATA);

		// generate receipt PDF and send to user
		const response = await fetch("/api/export", { method: "POST" });
		// const data = await response.json();
		// console.log({ data });
	};

	const isNumberAdded = payload.phone.length !== 10;

	return (
		<section className="grid row-auto gap-5">
			<h1 className="text-2xl font-bold">
				{type} {name}
			</h1>
			<div>
				<label className="text-sm">Phone Number</label>
				<input
					type="tel"
					placeholder="Enter phone"
					name="donor"
					className="input"
					value={payload.phone}
					minLength={10}
					maxLength={10}
					onChange={(e) => handlePhone(e)}
				/>
			</div>
			<div>
				<label className="text-sm">Name</label>
				<input
					type="text"
					placeholder="Enter name"
					name="donor"
					className="input"
					value={payload.name}
					onChange={(e) =>
						payloadSet({ ...payload, name: e.currentTarget.value })
					}
					disabled={isNumberAdded}
				/>
			</div>
			<div>
				<label className="text-sm">Event Name</label>
				{events?.length ? (
					<select
						className="input"
						value={payload.event}
						onChange={(e) =>
							payloadSet({
								...payload,
								event: e.currentTarget.value,
							})
						}
						disabled={isNumberAdded}
					>
						{events.map((event, index) => (
							<option key={index} value={event.name}>
								{event.name}
							</option>
						))}
					</select>
				) : null}
			</div>
			<div>
				<label className="text-sm">Event Date</label>
				<input
					type="date"
					name="date"
					placeholder="Enter date"
					className="input"
					value={payload.date}
					onChange={(e) =>
						payloadSet({ ...payload, date: e.currentTarget.value })
					}
					disabled={isNumberAdded}
				/>
			</div>
			<div>
				<label className="text-sm">Donation Amount</label>
				<input
					type="number"
					name="amount"
					placeholder="Enter amount"
					min={0}
					className="input"
					value={payload.amount}
					onChange={(e) =>
						payloadSet({
							...payload,
							amount: e.currentTarget.value,
						})
					}
					disabled={isNumberAdded}
				/>
			</div>
			<div>
				<label className="text-sm">Payment mode</label>
				<select
					className="input"
					value={PAYMENT_MODES[payload.paymentMode]}
					onChange={(e) =>
						payloadSet({
							...payload,
							paymentMode: PAYMENT_MODES[e.currentTarget.value],
						})
					}
					disabled={isNumberAdded}
				>
					<option value="0">Cash</option>
					<option value="1">UPI</option>
				</select>
			</div>
			{payload.paymentMode === "UPI" ? (
				<div className="mx-auto">
					<QRCodeSVG
						value={`upi://pay?pa=${UPI_ID}&pn=Siddhesh&am=${payload.amount}&cu=INR`}
						fgColor="#211D38"
						bgColor="#FEAF6F"
					/>
				</div>
			) : null}
			<button
				className="input border-orange-400 bg-orange-400 hover:bg-orange-500 text-white disabled:bg-orange-400 disabled:text-white"
				disabled={isNumberAdded}
				onClick={() => createReceipt()}
			>
				Create
			</button>
		</section>
	);
}
