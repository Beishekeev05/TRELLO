import { createSlice } from "@reduxjs/toolkit";
import { AuthItem } from "../../types/type";

const initialState: AuthItem = {
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	token: "",
	isLoading: false,
	error: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: () => {},
});
