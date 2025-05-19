"use client";

import dayjs from "dayjs";

export default function Template({
	clientName,
	projectTitle,
	projectDescription,
	timeline,
	scope,
	pricing,
	termsConditions,
}) {
	return (
		<main className="container mx-auto px-4 py-8 h-[80svh] border border-red-300 overflow-y-scroll">
			<div className="h-[calc(3508px/2)] w-[calc(2480px/2)] border border-blue-400 p-10">
				<div className="flex justify-between items-center text-2xl">
					<div>{dayjs().format("DD-MM-YYYY")}</div>
					<div>Logo</div>
				</div>
				<div className="mt-4 font-extrabold text-6xl">
					Proposal to {clientName} for {projectTitle}
				</div>

				<div className="mt-4 flex justify-between">
					<div className="text-wrap">
						<p>Completed by</p>
						<p>John Doe</p>
					</div>
					<div className="text-wrap">
						<p>Contact</p>
						<a href="mailto:abc@abc.com">abc@abc.com</a>
					</div>
				</div>

				<div className="mt-4">
					<div>Project overview</div>
					<p>{projectDescription}</p>

					<div>Estimated time of delivery</div>
					<p>{timeline}</p>

					<div>Scope</div>
					<p>{scope}</p>
				</div>

				<div className="mt-4">
					<div>Project price</div>
					<p>{pricing}</p>
				</div>

				<div className="mt-4">
					<div>Terms and conditions</div>
					<p>{termsConditions}</p>
				</div>
			</div>
		</main>
	);
}
