import { FC } from "react";
import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";

const BaseLayout: FC = () => {
	return (
		<>
			<header>
				<Headers />
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default BaseLayout;
