import axios from "axios";
import { store } from "../redux/store";
const BASE_URL = import.meta.env.VITE_ENV_URL;

export const axiosInstanse = axios.create({
	baseURL: BASE_URL,
});

axios.interceptors.request.use(
	function (config) {
		const updateConfig = { ...config };
		const { token } = store.getState().auth;
		if (token) {
			updateConfig.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);
