"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc, writeBatch, Timestamp } from "firebase/firestore";
import toast, { useToasterStore } from "react-hot-toast";

import { auth, db } from "@/lib/firebase/clientApp";
import showToast from "./toast";
import { useProposalStore } from "@/store/useProposalStore";
import ProposalPDF from "./proposalPDF";

const PDFDownloadLink = dynamic(
	() => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
	{
		ssr: false,
		loading: () => <p>Loading download link...</p>,
	}
);

const TOAST_LIMIT = 3;
const INITIAL_FORM_DATA = {
	clientName: "",
	projectTitle: "",
	projectDescription: "",
	pricing: "",
	termsConditions: "",
	timeline: "",
	scope: "",
	companyName: "",
	companyEmail: "",
	website: "",
};

export default function Form({ type, name }) {
	const [payload, payloadSet] = useState(INITIAL_FORM_DATA);
	const [accordian, setAccordian] = useState(false);
	const [user] = useAuthState(auth);
	const { toasts } = useToasterStore();
	const addProposal = useProposalStore((state) => state.addProposal);

	// limit max number of toasts
	useEffect(() => {
		toasts
			.filter((t) => t.visible) // Only consider visible toasts
			.filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
			.forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
	}, [toasts]);

	const saveProposal = async () => {
		const batch = writeBatch(db);
		const proposalRef = doc(collection(db, "proposals"));

		try {
			batch.set(proposalRef, { ...payload, timestamp: Timestamp.now() });
		} catch (err) {
			console.log({ err });
			showToast("Something went wrong!", "error");
		}

		await batch.commit();
	};

	const createProposal = async () => {
		// save proposal to DB
		// await saveProposal();

		// show toast to user and reset form
		showToast("Proposal is created!");
		addProposal(payload);
	};

	console.log({ accordian });

	return (
		<section className="grid row-auto gap-5">
			<h1 className="text-2xl font-bold">
				{type} {name}
			</h1>
			<div>
				<label className="text-sm">Client Name</label>
				<input
					type="text"
					placeholder="Enter client's name"
					name="clientName"
					className="input"
					value={payload.clientName}
					onChange={(e) =>
						payloadSet({
							...payload,
							clientName: e.currentTarget.value,
						})
					}
				/>
			</div>
			<div>
				<label className="text-sm">Project Title</label>
				<input
					type="text"
					placeholder="Enter project title"
					name="projectTitle"
					className="input"
					value={payload.projectTitle}
					onChange={(e) =>
						payloadSet({
							...payload,
							projectTitle: e.currentTarget.value,
						})
					}
				/>
			</div>
			<div>
				<label className="text-sm">Project Scope</label>
				<input
					type="text"
					placeholder="Enter project scope"
					name="scope"
					className="input"
					value={payload.scope}
					onChange={(e) =>
						payloadSet({
							...payload,
							scope: e.currentTarget.value,
						})
					}
				/>
			</div>
			<div>
				<label className="text-sm">Project Timeline</label>
				<textarea
					placeholder="Enter project timeline"
					name="timeline"
					value={payload.timeline}
					className="input"
					onChange={(e) =>
						payloadSet({
							...payload,
							timeline: e.currentTarget.value,
						})
					}
				/>
			</div>
			<div>
				<label className="text-sm">Project Description</label>
				<textarea
					placeholder="Enter project description"
					name="projectDescription"
					value={payload.projectDescription}
					className="input"
					onChange={(e) =>
						payloadSet({
							...payload,
							projectDescription: e.currentTarget.value,
						})
					}
				/>
			</div>
			<div>
				<label className="text-sm">Pricing details</label>
				<input
					type="text"
					name="pricing"
					placeholder="Enter pricing details"
					min={0}
					className="input"
					value={payload.pricing}
					onChange={(e) =>
						payloadSet({
							...payload,
							pricing: e.currentTarget.value,
						})
					}
				/>
			</div>
			<div>
				<label className="text-sm">Terms & Conditions</label>
				<textarea
					placeholder="Enter terms & conditions"
					name="termsConditions"
					value={payload.termsConditions}
					className="input"
					onChange={(e) =>
						payloadSet({
							...payload,
							termsConditions: e.currentTarget.value,
						})
					}
				/>
			</div>
			<div>
				<button
					onClick={() => setAccordian(!accordian)}
					className="w-full flex justify-between items-center cursor-pointer"
				>
					<span>Your Branding</span>
					<span
						id="icon-1"
						className="transition-transform duration-300"
					>
						{accordian ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4"
							>
								<path
									fillRule="evenodd"
									d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
									clipRule="evenodd"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4"
							>
								<path
									fillRule="evenodd"
									d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
									clipRule="evenodd"
								/>
							</svg>
						)}
					</span>
				</button>
				<div
					className={`${
						accordian ? "max-h-fit" : "max-h-0"
					} grid row-auto gap-5 overflow-hidden transition-all duration-300 ease-in-out`}
				>
					<div className="pt-5">
						<label className="text-sm">Your/Company Name</label>
						<input
							type="text"
							placeholder="Enter company name"
							name="companyName"
							className="input"
							value={payload.companyName}
							onChange={(e) =>
								payloadSet({
									...payload,
									companyName: e.currentTarget.value,
								})
							}
						/>
					</div>
					<div>
						<label className="text-sm">Email</label>
						<input
							type="text"
							placeholder="Enter email"
							name="companyEmail"
							className="input"
							value={payload.companyEmail}
							onChange={(e) =>
								payloadSet({
									...payload,
									companyEmail: e.currentTarget.value,
								})
							}
						/>
					</div>
					<div>
						<label className="text-sm">Website</label>
						<input
							type="text"
							placeholder="Enter website"
							name="website"
							className="input"
							value={payload.website}
							onChange={(e) =>
								payloadSet({
									...payload,
									website: e.currentTarget.value,
								})
							}
						/>
					</div>
				</div>
			</div>

			<button
				className="input border-orange-400 bg-orange-400 hover:bg-orange-500 text-white disabled:bg-orange-400 disabled:text-white"
				onClick={() => createProposal()}
			>
				Submit Proposal
			</button>
			<button
				className="input border-orange-400 bg-white hover:bg-orange-300 hover:text-white text-orange-500 disabled:bg-orange-400 disabled:text-white"
				onClick={() => payloadSet(INITIAL_FORM_DATA)}
			>
				Reset
			</button>
		</section>
	);
}
