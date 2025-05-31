"use client";
import Form from "@/components/form";
import Template from "@/components/Template/template";
import { useProposalStore } from "@/store/useProposalStore";
import Image from "next/image";

const props = {
	clientName: "Client Name",
	projectTitle: "Project Title",
	projectDescription:
		"Project Description, Project Description, Project Description, Project Description, Project Description",
	pricing: "Pricing",
	termsConditions: "Terms and Conditions",
	timeline: "6 months",
	scope: "Scope of the project",
};

export default function Home() {
	const proposal = useProposalStore((state) => state.proposal);
	const {
		clientName,
		projectTitle,
		projectDescription,
		timeline,
		scope,
		pricing,
		termsConditions,
		companyName,
		companyEmail,
		website,
		isSubmitted,
	} = proposal;

	return (
		<div className="flex flex-col w-full">
			<div className="self-center py-2">
				<Image
					src={"/logo.png"}
					alt="ProposalGen"
					width={"50"}
					height={"50"}
					style={{ width: "auto", height: "auto" }}
				/>
			</div>

			<div className="flex flex-col gap-5 sm:grid sm:grid-cols-5 md:mb-2 lg:grid-cols-6">
				<div className="lg:col-span-1 sm:col-span-2 px-4">
					<Form type="Create" name="Proposal" />
				</div>

				<div className="lg:col-span-5 sm:col-span-3 px-4">
					<Template
						clientName={clientName}
						projectTitle={projectTitle}
						projectDescription={projectDescription}
						timeline={timeline}
						scope={scope}
						pricing={pricing}
						termsConditions={termsConditions}
						companyName={companyName}
						companyEmail={companyEmail}
						website={website}
						isSubmitted={isSubmitted}
					/>
				</div>
			</div>
		</div>
	);
}
