import { createSlice } from "@reduxjs/toolkit";

export type RowsTypes = {
	id: number;
	resum: string;
	project: string;
	typeProject: string;
	status: string;
	textarea: string;
};
type TypeTableArray = {
	table: RowsTypes[];
};
const initialState: TypeTableArray = {
	table: [],
};

export const tableSlice = createSlice({
	name: "table",
	initialState,
	reducers: {
		addProject(state, { payload }) {
			state.table.push(payload);
		},
		deletProject(state, { payload }) {
			state.table = state.table.filter((item) => item.id !== payload);
		},
	},
});
export const { addProject, deletProject } = tableSlice.actions;
