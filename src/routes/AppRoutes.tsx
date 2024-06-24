import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BaseLayout from "../layouts/BaseLayout";
import Desctop from "../pages/Desctop";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes: FC = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <BaseLayout />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: ":id/desktop",
					element: <Desctop />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
