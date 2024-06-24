import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import ErrorOutlineTwoToneIcon from "@mui/icons-material/ErrorOutlineTwoTone";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { RowsTypes } from "../../redux/tableSlice/tableSlice";

const CreateProject: FC = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<RowsTypes>();

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
			<Box>
				<Typography sx={{ fontSize: 12 }}>
					Проект <span style={{ color: "red" }}>*</span>
				</Typography>
				<Select
					{...register("project", { required: true })}
					sx={{ width: "300px" }}
					defaultValue="Проект один">
					<p
						style={{
							marginLeft: "1em",
							fontFamily: "Montserrat,san-serif",
							fontSize: 11,
						}}>
						Недавные проекты
					</p>
					<MenuItem value={"Проект один"}>Проект один</MenuItem>
					<p
						style={{
							marginLeft: "1em",
							fontFamily: "Montserrat,san-serif",
							fontSize: 11,
						}}>
						Все проекты
					</p>
					<MenuItem value={"Проект два"}>Проект два</MenuItem>
				</Select>
				<Typography sx={{ fontSize: 12 }}>
					Тип задачи <span style={{ color: "red" }}>*</span>
				</Typography>
				<Select
					{...register("typeProject", { required: true })}
					sx={{ width: "300px" }}
					defaultValue={"Задача"}>
					<MenuItem value={"Задача"}>Задача </MenuItem>
					<MenuItem value={"Екстра"}>Екстра</MenuItem>
				</Select>
				<a
					style={{
						display: "block",
						margin: "8px 0 8px 0",
						textDecoration: "none",
						fontFamily: "Montserrat,san-serif",
					}}
					href="https://chatgpt.com/c/0f94c816-6741-472c-9254-a977f66425df">
					Подробнее о типах задач
				</a>
				<hr
					style={{
						border: "none",
						borderTop: "1px solid grey",
						marginTop: "10px",
					}}
				/>
				<Typography sx={{ position: "relative", mt: "20px", mb: "10px" }}>
					Статус
					<ErrorOutlineTwoToneIcon
						sx={{
							width: "10px",
							position: "absolute",
							top: "-2px",
							color: "grey",
							left: "55px",
						}}
					/>
				</Typography>
				<Select
					{...register("status", { required: true })}
					defaultValue={"IN PROGRESS"}
					sx={{ width: "160px" }}>
					<MenuItem sx={{ color: "blue", mb: "2px" }} value={"IN PROGRESS"}>
						IN PROGRESS
					</MenuItem>
					<MenuItem
						sx={{
							color: "green",
						}}
						value={"ЗАКОНЧЕНО"}>
						ЗАКОНЧЕНО
					</MenuItem>
				</Select>
				<Typography sx={{ fontSize: 11, mt: 1, color: "grey" }} variant="body2">
					Это начальный статус задачи при ее создании
				</Typography>
				<Typography sx={{ mt: 2 }}>
					Резюме<span style={{ color: "red" }}>*</span>
				</Typography>
				<TextField
					fullWidth
					{...register("resum", {
						required: "Требуется «Резюме»",
					})}
					size="small"
					error={!!errors.resum?.message}
					helperText={errors.resum ? errors.resum.message : ""}
				/>
			</Box>
		</Box>
	);
};

export default CreateProject;
