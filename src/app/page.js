"use client";
import Form from "@/components/form";
import Template from "@/components/Template/template";
import { useProposalStore } from "@/store/useProposalStore";

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
		<div className="grid grid-cols-6 gap-5 my-8">
			<div className="col-span-1 px-4">
				<Form type="Create" name="Proposal" />
			</div>

			<div className="col-span-5 px-4">
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
	);
}
