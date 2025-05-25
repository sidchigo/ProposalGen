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
};

export default function Form({ type, name }) {
	const [payload, payloadSet] = useState(INITIAL_FORM_DATA);
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
		console.log({ proposalRef });
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
		await saveProposal();

		// show toast to user and reset form
		showToast("Proposal is created!");
		addProposal(payload);

		// generate proposal PDF and send to user
		// const response = await fetch("/api/export", { method: "POST" });
		// const data = await response.json();
		// console.log({ data });
	};

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
			<button
				className="input border-orange-400 bg-orange-400 hover:bg-orange-500 text-white disabled:bg-orange-400 disabled:text-white"
				onClick={() => createProposal()}
			>
				Submit Proposal
			</button>
			{/* <PDFDownloadLink
				document={<ProposalPDF {...payload} />}
				fileName="Proposal.pdf"
				style={{
					padding: "8px 16px",
					backgroundColor: "#3b82f6",
					color: "#ffffff",
					borderRadius: "4px",
					textDecoration: "none",
					textAlign: "center",
				}}
			>
				{({ loading }) => (loading ? "Preparing..." : "Export as PDF")}
			</PDFDownloadLink> */}
			<button
				className="input border-orange-400 bg-white hover:bg-orange-300 hover:text-white text-orange-500 disabled:bg-orange-400 disabled:text-white"
				onClick={() => payloadSet(INITIAL_FORM_DATA)}
			>
				Reset
			</button>
		</section>
	);
}
