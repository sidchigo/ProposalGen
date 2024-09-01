"use client";
import { useState } from "react";
import dayjs from "dayjs";
import {
	collection,
	orderBy,
	query,
	doc,
	writeBatch,
} from "firebase/firestore";
import { db } from "@/lib/firebase/clientApp";

export default function Users({ type, name }) {
	const [payload, payloadSet] = useState({
		name: "",
		phone: "",
	});

	const handlePhone = (e) => {
		const numberRegex = /^\d+$/;
		if (
			e.currentTarget.value === "" ||
			numberRegex.test(e.currentTarget.value)
		) {
			payloadSet({ ...payload, phone: e.currentTarget.value });
		}
	};

	const addUser = async () => {
		const batch = writeBatch(db);
		const userRef = doc(db, "users", payload.phone);

		try {
			batch.set(userRef, { role: "admin", name: payload.name });
			await batch.commit();
		} catch (err) {
			console.log({ err });
		}
	};

	return (
		<section className="grid row-auto gap-5">
			<h1 className="text-2xl font-bold">Add Admins</h1>
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
				/>
			</div>
			<button
				className="input border-orange-400 bg-orange-400 hover:bg-orange-500 text-white disabled:bg-orange-400 disabled:text-white"
				onClick={() => addUser()}
			>
				Add
			</button>
		</section>
	);
}
