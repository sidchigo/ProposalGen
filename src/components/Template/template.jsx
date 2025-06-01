import { useState } from "react";
import Image from "next/image";
import { BlobProvider } from "@react-pdf/renderer";

import ProposalPDF from "../proposalPDF";

// Main Template Component
export default function Template({ isSubmitted, ...props }) {
	const [styles, setStyles] = useState("elegant");
	if (!isSubmitted) {
		return (
			<div className="w-full h-full p-4 flex justify-center items-center bg-teal-950 rounded-lg shadow-sm">
				Please submit proposal to view PDF preview
			</div>
		);
	}
	console.log({ styles });
	return (
		<div className="w-full h-full p-4 flex flex-col gap-5 xl:flex-row bg-teal-950 rounded-lg shadow-sm">
			<BlobProvider
				document={<ProposalPDF template={styles} {...props} />}
			>
				{({ url, loading, error }) => {
					if (loading) return <p>Loading PDF...</p>;
					if (error) return <p>Error generating preview</p>;
					return (
						<iframe
							src={url}
							className="w-full h-full border-0 hidden md:block"
							title="PDF Preview"
						/>
					);
				}}
			</BlobProvider>
			<div className="xl:hidden text-center">Choose Templates</div>
			<div className="flex flex-row justify-between xl:gap-5 xl:ml-4 xl:flex-col">
				<button
					onClick={() => {
						setStyles("elegant");
					}}
					className="cursor-pointer"
				>
					<div className="input border-teal-600 bg-teal-600 hover:bg-teal-700 text-white disabled:bg-teal-600 disabled:text-white xl:hidden">
						Elegant
					</div>
					<Image
						src={"/elegant.png"}
						alt="elegant"
						width={"300"}
						height={"450"}
						className="hidden xl:block w-auto h-auto"
					/>
				</button>
				<button
					onClick={() => {
						setStyles("modern");
					}}
					className="cursor-pointer"
				>
					<div className="input border-teal-600 bg-teal-600 hover:bg-teal-700 text-white disabled:bg-teal-600 disabled:text-white xl:hidden">
						Modern
					</div>
					<Image
						src={"/modern.png"}
						alt="modern"
						width={"300"}
						height={"450"}
						className="hidden xl:block w-auto h-auto"
					/>
				</button>
				<button
					onClick={() => {
						setStyles("abstract");
					}}
					className="cursor-pointer"
				>
					<div className="input border-teal-600 bg-teal-600 hover:bg-teal-700 text-white disabled:bg-teal-600 disabled:text-white xl:hidden">
						Abstract
					</div>
					<Image
						src={"/abstract.png"}
						alt="abstract"
						width={"300"}
						height={"450"}
						className="hidden xl:block w-auto h-auto"
					/>
				</button>
			</div>
		</div>
	);
}
