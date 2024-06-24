import {
	Box,
	Button,
	InputAdornment,
	MenuItem,
	Select,
	TextField,
	Typography,
	styled,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import BoltIcon from "@mui/icons-material/Bolt";
import { FC } from "react";
import CustomBreadcrumbs from "./BridCrumbs";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShareIcon from "@mui/icons-material/Share";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
interface ProfilePropsS {
	project: string;
}

const Other: FC<ProfilePropsS> = ({ project }) => {
	return (
		<BoxMuiComponent>
			<CustomBreadcrumbs project={project} />
			<BoxMuiComponentTwo>
				<Div>
					<Typography variant="h5">Доска Сыймыка</Typography>
				</Div>
				<Box
					sx={{
						width: 250,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<GrayIcon component="div">
						<BoltIcon />
					</GrayIcon>
					<GrayIcon component="div">
						<StarBorderIcon />
					</GrayIcon>
					<GrayIcon component="div">
						<ShareIcon />
					</GrayIcon>
					<GrayIcon component="div">
						<OpenInFullIcon />
					</GrayIcon>
					<GrayIcon component="div">
						<MoreHorizIcon />
					</GrayIcon>
				</Box>
			</BoxMuiComponentTwo>
			<BoxTwo>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<TextField
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
						size="small"
						sx={{ outline: "none" }}
					/>
					<AvatarGroup max={3} sx={{ marginLeft: "10px" }}>
						<Avatar
							alt="Remy Sharp"
							src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_1280.jpg"
						/>
						<Avatar
							alt="Syimyk"
							src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
						/>
						<Avatar
							alt="Cindy Baker"
							src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
						/>
						<Avatar
							alt="Agnes Walker"
							src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-avatar-of-a-brunette-man-png-image_10214154.png"
						/>
						<Avatar
							alt="Trevor Henderson"
							src="https://png.pngtree.com/png-clipart/20231020/original/pngtree-avatar-of-a-brunette-man-png-image_13379742.png"
						/>
					</AvatarGroup>
					<AvatarGroup>
						<Avatar>
							<Button variant="text" color="success">
								<PersonAddIcon />
							</Button>
						</Avatar>
					</AvatarGroup>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<div style={{ display: "flex", alignItems: "center    " }}>
						<Typography sx={{ fontSize: 12 }}>Группировать :</Typography>
					</div>
					<Select
						size="small"
						defaultValue={"Нет"}
						sx={{ minWidth: 100, ml: 1, backgroundColor: "#f2eeee" }}>
						<MenuItem value="Нет">Нет</MenuItem>
						<MenuItem value="Исполнитель">Исполнитель</MenuItem>
						<MenuItem value="Подзадача"> Подзадача</MenuItem>
					</Select>
					<Button color="inherit" variant="outlined" sx={{ height: 40, ml: 1 }}>
						<QueryStatsIcon sx={{ mr: 1 }} />
						Аналитик
					</Button>
					<Button color="inherit" variant="outlined" sx={{ height: 40, ml: 1 }}>
						<FilterListIcon sx={{ mr: 1 }} />
						Настройки просмотра
					</Button>
				</Box>
			</BoxTwo>
		</BoxMuiComponent>
	);
};

export default Other;
const BoxTwo = styled(Box)({
	width: "100%",
	height: "50px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
});

const BoxMuiComponent = styled(Box)({
	width: "100%",
	height: "180px",
});
const BoxMuiComponentTwo = styled(Box)({
	display: "flex",
	width: "100%",
	height: "50px",
	margin: "10px 0 10px 0",
	justifyContent: "space-between",
});

const Div = styled(Box)({
	width: 200,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: 2,
});

const GrayIcon = styled(Box)({
	color: "#757575",
	transition: "color 0.2s ease-in-out",
	padding: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: 40,
	aspectRatio: "1/1",
	borderRadius: "2px",
	"&:hover": {
		color: "#000",
		backgroundColor: "#f0f0f0",
	},
});
