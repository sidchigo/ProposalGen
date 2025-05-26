export const createProposalSlice = (set) => ({
	proposal: {
		clientName: "",
		projectTitle: "",
		projectDescription: "",
		pricing: "",
		termsConditions: "",
		timeline: "",
		scope: "",
		isSubmitted: false,
		commanyName: "",
		companyEmail: "",
		website: "",
	},
	addProposal: (payload) => {
		set(() => ({
			proposal: {
				clientName: payload.clientName,
				projectTitle: payload.projectTitle,
				projectDescription: payload.projectDescription,
				pricing: payload.pricing,
				termsConditions: payload.termsConditions,
				timeline: payload.timeline,
				scope: payload.scope,
				isSubmitted: true,
				companyName: payload.companyName,
				companyEmail: payload.companyEmail,
				website: payload.website,
			},
		}));
	},
	updateProposal: (payload) =>
		set((state) => ({
			proposal: {
				...state.proposal,
				...payload,
			},
		})),
	resetProposal: () => set(() => ({ proposal: {} })),
});
