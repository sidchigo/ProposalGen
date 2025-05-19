export const createProposalSlice = (set) => ({
	proposal: {
		clientName: "",
		projectTitle: "",
		projectDescription: "",
		pricing: "",
		termsConditions: "",
		timeline: "",
		scope: "",
	},
	addProposal: () =>
		set((state) => ({
			clientName: state.clientName,
			projectTitle: state.projectTitle,
			projectDescription: state.projectDescription,
			pricing: state.pricing,
			termsConditions: state.termsConditions,
			timeline: state.timeline,
			scope: state.scope,
		})),
	updateProposal: (payload) =>
		set((state) => ({
			proposal: {
				...state.proposal,
				...payload,
			},
		})),
	resetProposal: () => set(() => ({ proposal: {} })),
});
