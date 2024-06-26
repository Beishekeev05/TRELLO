import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Box, MenuItem, Select, Typography, styled } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import TocIcon from "@mui/icons-material/Toc";
import CodeIcon from "@mui/icons-material/Code";
import ErrorIcon from "@mui/icons-material/Error";
import TabIcon from "@mui/icons-material/Tab";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import AddIcon from "@mui/icons-material/Add";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CloseIcon from "@mui/icons-material/Close";
import SafetyDividerIcon from "@mui/icons-material/SafetyDivider";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { RowsTypes } from "../../redux/tableSlice/tableSlice";
const Description: FC = () => {
	const { register } = useFormContext<RowsTypes>();

	return (
		<Box>
			<Typography sx={{ fontSize: 12, color: "grey", mt: 3 }}>
				Описание
			</Typography>
			<BoxMui>
				<div className="blockFonts">
					<Select
						defaultValue={"one"}
						sx={{
							height: 35,
							width: 180,
							borderRadius: 0.5,
							transition: "all 0.3ms",
							"&:hover": {
								backgroundColor: "#f0ecec",
							},
						}}>
						<MenuItem value="one">Обычный текс</MenuItem>
						<MenuItem value="two">h1</MenuItem>
						<MenuItem value="three">h2</MenuItem>
						<MenuItem value="fore">h3</MenuItem>
						<MenuItem value="five">h4</MenuItem>
						<MenuItem value="six">h5</MenuItem>
						<MenuItem value="seven">h6</MenuItem>
					</Select>
					<div
						style={{
							minWidth: "200px",
							display: "flex",
							justifyContent: "center",
							gap: 20,
							alignItems: "center",
							borderRight: "1px solid grey",
							borderLeft: "1px solid grey",
							padding: "0 5px 0 5px",
						}}>
						<Typography sx={{ fontWeight: "bold" }}>B</Typography>
						<FormatItalicIcon />
						<FormatUnderlinedIcon />
						<LinkIcon />
						<InsertPhotoIcon />
						<AlternateEmailIcon />
						<EmojiEmotionsIcon />
						<TocIcon />
						<CodeIcon />
						<ErrorIcon />
						<ScheduleIcon />
						<TabIcon />
					</div>
					<Select
						sx={{
							height: "30px",
							width: "180px",
							display: "flex",
							justifyContent: "center",
						}}
						defaultValue={"Add"}>
						<MenuItem value="Add">
							<AddIcon sx={{ mt: "5px" }} />
						</MenuItem>
						<MenuItem
							value="Дата"
							sx={{ display: "flex", justifyContent: "space-between" }}>
							Дата <ScheduleIcon />
						</MenuItem>
						<MenuItem
							value="Разворачивание"
							sx={{ display: "flex", justifyContent: "space-between" }}>
							Разворачивание <CloseIcon />{" "}
						</MenuItem>
						<MenuItem
							value="Разделить"
							sx={{ display: "flex", justifyContent: "space-between" }}>
							Разделить <SafetyDividerIcon />{" "}
						</MenuItem>
						<MenuItem
							value="Статус"
							sx={{ display: "flex", justifyContent: "space-between" }}>
							Статус <StackedLineChartIcon />{" "}
						</MenuItem>
						<MenuItem
							sx={{ display: "flex", justifyContent: "space-between" }}
							value="Цитата">
							Цитата <FormatQuoteIcon />
						</MenuItem>
					</Select>
				</div>
				<textarea
					{...register("textarea")}
					style={{
						resize: "none",
						minHeight: "80px",
						width: "100%",
						outline: "none",
						padding: 10,
						border: "none",
					}}
					placeholder="Слов не достаточна , чтобы выразить мысль ? Ведите  <<:>>, что бы добавить емодзи"></textarea>
			</BoxMui>
		</Box>
	);
};

export default Description;
const BoxMui = styled(Box)({
	width: "100%",
	minHeight: 120,
	border: "1px solid #d1d0d0",
	borderRadius: "2px",
	padding: 10,
	display: "flex",
	flexDirection: "column",
	gap: 5,
	"& .blockFonts": {
		width: "100%",
		height: "40px",
		display: "flex",
		alignItems: "center",
		gap: "7px",
	},
});
