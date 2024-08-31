"use client";
import { useState } from "react";
import dayjs from "dayjs";

export default function Form({ type, name }) {
	const [payload, payloadSet] = useState({
		phone: "",
		name: "",
		date: dayjs().format("YYYY-MM-DD"),
		event: 0,
		amount: null,
		paymentMode: 0,
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

	const isNumberAdded = payload.phone.length !== 10;

	return (
		<section className="grid row-auto gap-5">
			<h1 className="text-2xl font-bold">
				{type} {name}
			</h1>
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
				<option value={0}>Shaniwar</option>
				<option value={1}>Pournima</option>
			</select>
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
			<input
				type="number"
				name="amount"
				placeholder="Enter amount"
				min={0}
				className="input"
				value={payload.amount}
				onChange={(e) =>
					payloadSet({ ...payload, amount: e.currentTarget.value })
				}
				disabled={isNumberAdded}
			/>
			<select
				className="input"
				value={payload.paymentMode}
				onChange={(e) =>
					payloadSet({
						...payload,
						paymentMode: e.currentTarget.value,
					})
				}
				disabled={isNumberAdded}
			>
				<option value={0}>Cash</option>
				<option value={1}>UPI</option>
			</select>
			<button
				className="input border-orange-400 bg-orange-400 hover:bg-orange-500 text-white disabled:bg-orange-400 disabled:text-white"
				disabled={isNumberAdded}
			>
				Create
			</button>
		</section>
	);
}
