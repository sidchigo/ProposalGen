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
