import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { FC, useState } from "react";
import DataTable from "./UI/Table";
import { SubmitHandler, useForm } from "react-hook-form";
import Create from "./UI/Create";

type FormType = {
	search: string;
	searchProject: string;
};
const HomePage: FC = () => {
	const [open, setOpen] = useState(false);
	const onClose = () => setOpen((prev) => !prev);

	const { register, handleSubmit } = useForm<FormType>();
	const onSubmit: SubmitHandler<FormType> = (data) => {
		console.log(data);
	};

	return (
		<BoxMuiHomePage>
			<BoxMuiMainContent>
				<ButtonsBlock>
					<Typography sx={{ ml: 1 }} variant="h3">
						Проекты
					</Typography>
					<div className="buttonsBlock">
						<Button variant="contained" onClick={onClose}>
							Создать проект
						</Button>
						<Button variant="outlined">Шаблоны</Button>
					</div>
				</ButtonsBlock>
				<BoxMuiInputsBlock component={"form"} onSubmit={handleSubmit(onSubmit)}>
					<TextField
						sx={{ ml: 1 }}
						size="small"
						label="Поиск проектов"
						{...register("search")}
					/>
					<TextField
						size="small"
						label="Фильтр по проектов"
						{...register("searchProject")}
					/>
					<Button
						sx={{ width: 250, height: 40 }}
						type="submit"
						variant="outlined">
						Search
					</Button>
				</BoxMuiInputsBlock>
				<Box sx={{ padding: 1 }}>
					<DataTable />
				</Box>
			</BoxMuiMainContent>
			{open && <Create onClose={onClose} />}
		</BoxMuiHomePage>
	);
};

export default HomePage;
const BoxMuiHomePage = styled(Box)(() => ({
	width: "1440px",
	height: "92.8vh",
	margin: "0 auto",
}));
const BoxMuiMainContent = styled(Box)(() => ({
	width: "100%",
	minHeight: "400px",
}));
const ButtonsBlock = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	marginTop: "20px",
	alignItems: "center",
	"& .buttonsBlock": {
		width: "285px",
		display: "flex",
		justifyContent: "space-between",
		marginRight: "20px",
	},
}));

const BoxMuiInputsBlock = styled(Box)({
	width: "1440px",
	display: "flex",
	gap: "10px",
	marginTop: "20px",
	height: "50px",
	"& .inputName": {
		heght: 25,
		width: "250px",
		outline: "none",
		padding: "5px",
		borderRadius: "3px",
		border: "1px solid grey",
	},
});
