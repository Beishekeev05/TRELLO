import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice/authSlice";
import { tableSlice } from "./tableSlice/tableSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import { dragSlice } from "./dragSlice/dragSlice";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[tableSlice.name]: tableSlice.reducer,
	[dragSlice.name]: dragSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
