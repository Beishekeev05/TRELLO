import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../utils/helpers/hooks";
import { Box, MenuItem, styled } from "@mui/material";
import Profile from "./DesctopUI/Profile";
import PlanBlock from "./DesctopUI/PlanBlock";
import SettingsIcon from "@mui/icons-material/Settings";
import LabelIcon from "@mui/icons-material/Label";
import Other from "./DesctopUI/Other";
// import DraggableList from "./DesctopUI/DraganDrop";
import CreateTodo from "./DesctopUI/CreateTodo";
import DraganDrop from "./DesctopUI/DraganDrop";

const Desctop: FC = () => {
	const { table } = useAppSelector((state) => state.table);
	const { id } = useParams<{ id: string }>();
	const row = table.find((row) => row.id === Number(id));
	const { pathname } = useLocation();
	console.log(pathname, "desctop");

	return (
		<DesctopContainer>
			<BoxMuiNavBar>
				{row ? <Profile project={row.project} /> : <div></div>}
				<PlanBlock />
				<Box>
					<MenuItem sx={{ m: 1 }}>
						<LabelIcon sx={{ mr: 1.5 }} />
						Добавить ярлык
					</MenuItem>
					<MenuItem sx={{ m: 1 }}>
						<SettingsIcon sx={{ mr: 1.5 }} />
						Настройка проекта
					</MenuItem>
				</Box>
			</BoxMuiNavBar>
			<MainApp>
				{row ? <Other project={row.project} /> : <div></div>}
				<AddTodo>
					<CreateTodo />
					<DraganDrop />
				</AddTodo>
			</MainApp>
		</DesctopContainer>
	);
};

export default Desctop;

const DesctopContainer = styled(Box)({
	width: "100vw",
	height: "92.7vh",
	display: "flex",
});
const AddTodo = styled(Box)({
	width: "100%",
	height: "76.5%",
	backgroundColor: "white",
	// display: "flex",
});
const BoxMuiNavBar = styled(Box)({
	width: "320px",
	height: "92.7vh",
	backgroundColor: "white",
	padding: 10,
	borderRight: "2.5px solid #c1bfbf",
});
const MainApp = styled(Box)({
	width: "100%",
	height: "100%",
	backgroundColor: "#fff",
	padding: "5px",
});
