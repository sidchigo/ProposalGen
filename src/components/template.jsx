"use client";
import dynamic from "next/dynamic";
import ProposalPDF from "./proposalPDF";

const BlobProvider = dynamic(
	() => import("@react-pdf/renderer").then((mod) => mod.BlobProvider),
	{
		ssr: false,
		loading: () => <p>Loading preview...</p>,
	}
);

// Main Template Component
export default function Template({ isSubmitted, ...props }) {
	if (!isSubmitted) {
		return (
			<div className="w-full h-full p-4 flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow-sm">
				Please submit proposal to view PDF preview
			</div>
		);
	}
	return (
		<div className="w-full h-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
			<BlobProvider document={<ProposalPDF {...props} />}>
				{({ url, loading, error }) => {
					console.log({ url, loading, error });
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
		</div>
	);
}
