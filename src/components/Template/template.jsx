"use client";
import dynamic from "next/dynamic";
import ProposalPDF from "../proposalPDF";
import Image from "next/image";
import { basicTemplateStyles } from "@/components/Template/basicTemplate.styles";
import { modernTemplateStyles } from "./modernTemplate.styles";
import { useState } from "react";
import { elegantTemplateStyles } from "./elegantTemplate.styles";

const BlobProvider = dynamic(
	() => import("@react-pdf/renderer").then((mod) => mod.BlobProvider),
	{
		ssr: false,
		loading: () => <p>Loading preview...</p>,
	}
);

// Main Template Component
export default function Template({ isSubmitted, ...props }) {
	const [styles, setStyles] = useState(basicTemplateStyles);
	if (!isSubmitted) {
		return (
			<div className="w-full h-full p-4 flex justify-center items-center bg-beige dark:bg-beige dark:text-brown border border-gray-200 rounded-lg shadow-sm">
				Please submit proposal to view PDF preview
			</div>
		);
	}
	return (
		<div className="w-full h-full p-4 flex bg-beige dark:bg-beige dark:text-brown border border-gray-200 rounded-lg shadow-sm">
			<BlobProvider document={<ProposalPDF styles={styles} {...props} />}>
				{({ url, loading, error }) => {
					console.log({ url, loading, error, props });
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
				<button onClick={() => setStyles(basicTemplateStyles)}>
					<Image
						src={"/template1.png"}
						width={"300"}
						height={"450"}
					/>
				</button>
				<button onClick={() => setStyles(modernTemplateStyles)}>
					<Image
						src={"/template2.png"}
						width={"300"}
						height={"450"}
					/>
				</button>
				<button onClick={() => setStyles(elegantTemplateStyles)}>
					<Image
						src={"/template3.png"}
						width={"300"}
						height={"450"}
					/>
				</button>
			</div>
		</div>
	);
}
