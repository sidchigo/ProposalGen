import { useState } from "react";
import Image from "next/image";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

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

	return (
		<div className="w-full h-full p-4 flex flex-col gap-5 xl:flex-row bg-teal-950 rounded-lg shadow-sm">
			<PDFViewer
				className="w-full h-full border-0 hidden md:block"
				height={"100%"}
			>
				<ProposalPDF template={styles} {...props} />
			</PDFViewer>
			<div className="xl:hidden text-center">Choose Templates</div>
			<div className="flex flex-col justify-between xl:gap-5 xl:ml-4 xl:flex-col">
				<button
					onClick={() => {
						setStyles("elegant");
					}}
					className="cursor-pointer"
				>
					<PDFDownloadLink
						document={<ProposalPDF template={styles} {...props} />}
					>
						<div className="input flex gap-2 justify-center items-center border-teal-600 bg-teal-600 hover:bg-teal-700 text-white disabled:bg-teal-600 disabled:text-white xl:hidden">
							<div>Elegant</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
								/>
							</svg>
						</div>
					</PDFDownloadLink>

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
					<PDFDownloadLink
						document={<ProposalPDF template={styles} {...props} />}
					>
						<div className="input flex gap-2 justify-center items-center border-teal-600 bg-teal-600 hover:bg-teal-700 text-white disabled:bg-teal-600 disabled:text-white xl:hidden">
							<div>Modern</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
								/>
							</svg>
						</div>
					</PDFDownloadLink>

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
					<PDFDownloadLink
						document={<ProposalPDF template={styles} {...props} />}
					>
						<div className="input flex gap-2 justify-center items-center border-teal-600 bg-teal-600 hover:bg-teal-700 text-white disabled:bg-teal-600 disabled:text-white xl:hidden">
							<div>Abstract</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
								/>
							</svg>
						</div>
					</PDFDownloadLink>

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
