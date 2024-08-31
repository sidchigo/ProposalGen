"use client";
import { useState } from "react";
import dayjs from "dayjs";

export default function Form({ type, name }) {
	const [payload, payloadSet] = useState({
		name: "",
		date: dayjs().format("YYYY-MM-DD"),
	});

	return (
		<section className="grid row-auto gap-5">
			<h1 className="text-2xl font-bold">
				{type} {name}
			</h1>
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
			<input
				type="date"
				name="date"
				placeholder="Enter date"
				className="input"
				value={payload.date}
				onChange={(e) =>
					payloadSet({ ...payload, date: e.currentTarget.value })
				}
			/>
			<button className="input border-orange-400 bg-orange-400 hover:bg-orange-500 text-white disabled:bg-orange-400 disabled:text-white">
				Create
			</button>
		</section>
	);
}
