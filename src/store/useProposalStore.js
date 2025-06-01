import { create } from "zustand";
import { createProposalSlice } from "./proposalSlice";

export const useProposalStore = create((...a) => ({
	...createProposalSlice(...a),
}));
