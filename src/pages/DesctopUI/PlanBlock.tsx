import { Box, MenuItem, Typography, styled } from "@mui/material";
import { FC, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import ListIcon from "@mui/icons-material/List";
import TaskIcon from "@mui/icons-material/Task";
import AddIcon from "@mui/icons-material/Add";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import ExtensionIcon from "@mui/icons-material/Extension";

const PlanBlock: FC = () => {
	const [open, setOpen] = useState(false);
	const [openTwo, setOpenTwo] = useState(false);
	const [activeItem, setActiveItem] = useState<string | null>(null);

	const handleOpen = () => setOpen((prev) => !prev);
	const handleOpenTwo = () => setOpenTwo((prev) => !prev);
	const handleItemClick = (item: string) => setActiveItem(item);

	return (
		<Box sx={{ borderBottom: "2.5px solid #c1bfbf", margin: "20px 0 20px 0" }}>
			<Typography
				sx={{ position: "relative", cursor: "pointer" }}
				onClick={handleOpen}>
				{open ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}
				<span style={{ position: "absolute", top: 0, left: 30 }}>
					Планирование
				</span>
			</Typography>
			{open && (
				<Box>
					<MenuItemMui
						active={activeItem === "Доска"}
						onClick={() => handleItemClick("Доска")}>
						<BackupTableIcon sx={{ marginRight: 1 }} />
						Доска
					</MenuItemMui>
					<MenuItemMui
						active={activeItem === "Список"}
						onClick={() => handleItemClick("Список")}>
						<ListIcon sx={{ marginRight: 1 }} />
						Список
					</MenuItemMui>
					<MenuItemMui
						active={activeItem === "Задачи"}
						onClick={() => handleItemClick("Задачи")}>
						<TaskIcon sx={{ marginRight: 1 }} />
						Задачи
					</MenuItemMui>
				</Box>
			)}

			<MenuItem>
				<AddIcon sx={{ marginRight: 1 }} />
				Добавить предстовление
			</MenuItem>
			<Typography
				sx={{ position: "relative", cursor: "pointer" }}
				onClick={handleOpenTwo}>
				{openTwo ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}
				<span style={{ position: "absolute", top: 0, left: 30 }}>
					Разработка
				</span>
			</Typography>
			{openTwo && (
				<Box>
					<MenuItemMui
						active={activeItem === "Code"}
						onClick={() => handleItemClick("Code")}>
						<CodeOffIcon sx={{ marginRight: 1.5, mb: 0.5 }} />
						Код
					</MenuItemMui>
					<MenuItemMui
						active={activeItem === "задачи"}
						onClick={() => handleItemClick("задачи")}>
						<ExtensionIcon sx={{ marginRight: 1.5, mb: 0.5 }} />
						Тип задачи
					</MenuItemMui>
				</Box>
			)}
		</Box>
	);
};

export default PlanBlock;

const MenuItemMui = styled(MenuItem)<{ active: boolean }>(({ active }) => ({
	display: "flex",
	alignItems: "center",
	margin: "5px",
	backgroundColor: active ? "aqua" : "transparent",
	"&:hover": {
		backgroundColor: "#e3f9f8",
	},
}));
