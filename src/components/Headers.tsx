import { FC } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import { styled } from "@mui/material";
import jira from "../assets/jira.png";
import SearchIcon from "@mui/icons-material/Search";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Headers: FC = () => {
	return (
		<header>
			<NavBarMui>
				<BrotherBlock>
					<AppsIcon sx={{ width: 25, height: 25, marginLeft: 0.5 }} />
					<JiraSvg>
						<img src={jira} alt="jira" className="img" />
					</JiraSvg>
					<UlDashboard>
						<li className="lishka">Ваша работа</li>
						<li className="lishka">Проекты</li>
						<li className="lishka">Фильтры</li>
						<li className="lishka">Дашбоарды</li>
						<li className="lishka">Команды</li>
						<li className="lishka">Еще</li>
					</UlDashboard>
				</BrotherBlock>
				<ProfileUser>
					<Update>
						<AutoAwesomeIcon />
						Обновить
					</Update>
					<Search>
						<SearchIcon
							sx={{
								marginTop: "3px",
								position: "absolute",
								top: 13,
								zIndex: 100,
							}}
						/>
						<TextFeildMui type="text" placeholder="Поиск" />
					</Search>
					<ProfileCard>
						<NotificationsIcon
							sx={{
								width: 30,
								height: 30,
								color: "#555353",
								transform: "rotate(20deg)",
							}}
						/>
						<HelpIcon sx={{ width: 30, height: 30 }} />
						<SettingsIcon sx={{ width: 30, height: 30 }} />
						<AccountBoxIcon sx={{ width: 35, height: 35 }} />
					</ProfileCard>
				</ProfileUser>
			</NavBarMui>
		</header>
	);
};

export default Headers;

const NavBarMui = styled("nav")({
	width: "1440px",
	height: "56px",
	border: "1px solid grey",
	display: "flex",
	alignItems: "center",
	margin: "0 auto",
	justifyContent: "space-between",
});

const JiraSvg = styled("div")({
	width: 65,
	height: 23,
	marginLeft: 5,
	"& .img": {
		width: "100%",
		height: "23px",
	},
});
const BrotherBlock = styled("div")({
	display: "flex",
	alignItems: "center",
	padding: 5,
});
const UlDashboard = styled("ul")({
	width: 650,
	display: "flex",
	gap: "3px",
	justifyContent: "space-around",
	alignItems: "center",
	fontFamily: "Montserrat,san-serif",
	marginLeft: "5px",
	"& .lishka": {
		listStyle: "none",
		transition: "all 0.1s",
		padding: "4px",
		fontSize: "14px",
		borderRadius: "2px",
		"&:hover": {
			backgroundColor: "#c6e4e4",
			color: "white",
		},
		"&:active": {
			backgroundColor: "#a8c9c9",
		},
	},
	"& .buttonLi": {
		backgroundColor: "none",
	},
});
// const ButtonMui = styled(Button)({
// 	width: 80,
// 	height: 30,
// 	fontSize: 12,
// });
const ProfileUser = styled("div")(() => {
	return {
		minWidth: "550px",
		padding: 5,
		display: "flex",
		alignItems: "center",
		marginRight: "6px",
	};
});

const Update = styled("div")({
	width: "120px",
	border: "1px solid purple",
	height: 35,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontFamily: "Montserrat,san-serif",
	fontSize: "14px",
	borderRadius: "4px",
	color: "darkblue",
	"&:hover": {
		color: "white",
		border: "none",
		backgroundColor: "darkblue",
		"& > AutoAwesomeIcon": {
			color: "white",
		},
	},
	marginRight: "10px",
	marginLeft: "10px",
});
const Search = styled("div")({
	display: "flex",
	alignItems: "center",
});
const TextFeildMui = styled("input")({
	height: "35px",
	width: "250px",
	padding: "0 5px 0 30px",
	position: "relative",
	outline: "none",
	border: "1px solid grey",
	borderRadius: "3px",
});

const ProfileCard = styled("div")({
	width: "200px",
	padding: 5,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "10px",
});
