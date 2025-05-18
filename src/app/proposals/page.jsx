"use client";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
import dayjs from "dayjs";
import { usePaginatedData } from "@/hooks/usePaginatedData";

export default function Proposals({ type, name }) {
	const proposalsRef = query(collection(db, "proposals"));
	const {
		data: proposals,
		loading,
		error,
		meta,
		canGoBack,
		canGoNext,
		onPageChanged,
	} = usePaginatedData("proposals");
	console.log({ proposals, loading, error });

	return (
		<section className="grid row-auto gap-5">
			<h1 className="text-2xl font-bold">Proposal list</h1>
			{proposals?.length > 0 ? (
				<div>
					<div>
						{proposals.map((proposal) => (
							<div
								key={proposal.timestamp.seconds}
								className="border p-4 mb-4"
							>
								<h2 className="text-lg font-bold">
									{proposal.projectTitle}
								</h2>
								<p>{proposal.projectDescription}</p>
								<p>Client: {proposal.clientName}</p>
								<p>Price: {proposal.pricing}</p>
								<p>
									Date:{" "}
									{dayjs
										.unix(proposal.timestamp.seconds)
										.format("DD/MM/YYYY hh:mm A")}
								</p>
							</div>
						))}
					</div>
					<div>
						<button
							disabled={!canGoBack}
							onClick={() => onPageChanged(meta.current_page - 1)}
						>
							Go back
						</button>
						<p>
							{meta.current_page} of {meta.total_pages}
						</p>
						<button
							disabled={!canGoNext}
							onClick={() => onPageChanged(meta.current_page + 1)}
						>
							Go next
						</button>
					</div>
				</div>
			) : null}
		</section>
	);
}
