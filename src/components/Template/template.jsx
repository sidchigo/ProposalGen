import { useState } from "react";
import Image from "next/image";
import { BlobProvider } from "@react-pdf/renderer";

import ProposalPDF from "../proposalPDF";
import { abstractTemplateStyles } from "./abstractTemplate.styles";
import { modernTemplateStyles } from "./modernTemplate.styles";
import { elegantTemplateStyles } from "./elegantTemplate.styles";

// Main Template Component
export default function Template({ isSubmitted, ...props }) {
	const [styles, setStyles] = useState(elegantTemplateStyles);
	if (!isSubmitted) {
		return (
			<div className="w-full h-full p-4 flex justify-center items-center bg-teal-950 rounded-lg shadow-sm">
				Please submit proposal to view PDF preview
			</div>
		);
	}
	return (
		<div className="w-full h-full p-4 flex flex-col lg:flex-row bg-teal-950 rounded-lg shadow-sm">
			<BlobProvider document={<ProposalPDF styles={styles} {...props} />}>
				{({ url, loading, error }) => {
					if (loading) return <p>Loading PDF...</p>;
					if (error) return <p>Error generating preview</p>;
					return (
						<iframe
							src={url}
							className="w-full h-full border-0"
							title="PDF Preview"
						/>
					);
				}}
			</BlobProvider>
			<div className="flex gap-5 flex-col ml-4">
				<button
					onClick={() => {
						setStyles(elegantTemplateStyles);
					}}
				>
					<Image
						src={"/elegant.png"}
						alt="elegant"
						width={"300"}
						height={"450"}
					/>
				</button>
				<button
					onClick={() => {
						setStyles(modernTemplateStyles);
					}}
				>
					<Image
						src={"/modern.png"}
						alt="modern"
						width={"300"}
						height={"450"}
					/>
				</button>
				<button
					onClick={() => {
						setStyles(abstractTemplateStyles);
					}}
				>
					<Image
						src={"/abstract.png"}
						alt="abstract"
						width={"300"}
						height={"450"}
					/>
				</button>
			</div>
		</div>
	);
}
