import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InValue {
	title: string;
	id: number;
}

export interface DropValue {
	id: number;
	title: string;
	indrop?: InValue[];
}

export interface DropState {
	drop: DropValue[];
	data: {};
}

const initialState: DropState = {
	drop: [],
	data: {},
};

export const dragSlice = createSlice({
	name: "drag",
	initialState,
	reducers: {
		createDrop(state, { payload }: PayloadAction<DropValue>) {
			state.drop.push(payload);
		},
		addInDrop(
			state,
			{ payload }: PayloadAction<{ dropId: number; indrop: InValue }>
		) {
			const { dropId, indrop } = payload;
			const drop = state.drop.find((drop) => drop.id === dropId);
			if (drop) {
				if (!drop.indrop) {
					drop.indrop = [];
				}
				drop.indrop.push(indrop);
			}
		},
		editInDrop(
			state,
			{
				payload,
			}: PayloadAction<{ dropId: number; indropId: number; newTitle: string }>
		) {
			const { dropId, indropId, newTitle } = payload;
			const drop = state.drop.find((drop) => drop.id === dropId);
			if (drop && drop.indrop) {
				const indrop = drop.indrop.find((indrop) => indrop.id === indropId);
				if (indrop) {
					indrop.title = newTitle;
				}
			}
		},
		deleteInDrop(
			state,
			{ payload }: PayloadAction<{ dropId: number; indropId: number }>
		) {
			const { dropId, indropId } = payload;
			const drop = state.drop.find((drop) => drop.id === dropId);
			if (drop && drop.indrop) {
				drop.indrop = drop.indrop.filter((indrop) => indrop.id !== indropId);
			}
		},
		deleteDrop(state, { payload }: PayloadAction<{ dropId: number }>) {
			state.drop = state.drop.filter((drop) => drop.id !== payload.dropId);
		},
		reorderDrops(
			state,
			{
				payload,
			}: PayloadAction<{ sourceIndex: number; destinationIndex: number }>
		) {
			const [reorderedItem] = state.drop.splice(payload.sourceIndex, 1);
			state.drop.splice(payload.destinationIndex, 0, reorderedItem);
		},
		reorderIndrops(
			state,
			{
				payload,
			}: PayloadAction<{
				sourceDropId: number;
				destinationDropId: number;
				sourceIndex: number;
				destinationIndex: number;
			}>
		) {
			const sourceDrop = state.drop.find((d) => d.id === payload.sourceDropId);
			const destinationDrop = state.drop.find(
				(d) => d.id === payload.destinationDropId
			);
			if (sourceDrop && destinationDrop) {
				const [reorderedItem] = sourceDrop.indrop!.splice(
					payload.sourceIndex,
					1
				);
				destinationDrop.indrop!.splice(
					payload.destinationIndex,
					0,
					reorderedItem
				);
			}
		},
	},
});

export const {
	createDrop,
	addInDrop,
	editInDrop,
	deleteInDrop,
	deleteDrop,
	reorderDrops,
	reorderIndrops,
} = dragSlice.actions;
export default dragSlice.reducer;
