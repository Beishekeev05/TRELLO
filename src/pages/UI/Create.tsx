import { Box, Button, Typography, styled } from "@mui/material";
import { FC, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
// import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import CreateProject from "./ StatusFeilds";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Description from "./Description";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useAppDispatch } from "../../utils/helpers/hooks";
import { RowsTypes, addProject } from "../../redux/tableSlice/tableSlice";
type Props = {
	onClose: () => void;
};

const Create: FC<Props> = ({ onClose }) => {
	const methode = useForm<RowsTypes>({ mode: "all" });

	const [opens, setOpens] = useState(false);

	const dispatch = useAppDispatch();

	const modalNotification = () => {
		setOpens((prev) => !prev);
	};
	const logoutFnCreate = () => {
		methode.reset();
		onClose();
	};
	const submit: SubmitHandler<RowsTypes> = (data) => {
		const id = Math.floor(Math.random() * 10000);
		const updatedData = { ...data, id };
		dispatch(addProject(updatedData));
		methode.reset();
		onClose();
	};

	return (
		<BoxMuiBox>
			<BoxMuiContainer>
				<FormProvider {...methode}>
					<form onSubmit={methode.handleSubmit(submit)}>
						<BoxMuiDivControlRight>
							<Typography variant="h5">Создание зодачи</Typography>
							<DivBoxMui>
								<UndoSharpIcon className="UndoSharpIcon" sx={{ m: 1.5 }} />
								<OpenInFullIcon
									className="CloseFullscreenIcon"
									sx={{ m: 1.5 }}
								/>
								<CloseIcon
									className="CloseIcon"
									onClick={onClose}
									sx={{ m: 1.5 }}
								/>
							</DivBoxMui>
						</BoxMuiDivControlRight>
						<SecondBlock>
							<Typography>
								Обязательные поля отмечены звездочкой
								<span style={{ color: "red" }}> *</span>
							</Typography>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
									marginRight: "13px",
								}}>
								<VisibilitySharpIcon
									color="info"
									sx={{
										width: 37,
										height: 37,
										borderRadius: 1,
										transition: "all 0.3ms",
										padding: "0 5px 0 5px",

										"&:hover": {
											backgroundColor: "#e1dddd",
										},
									}}
								/>
								<Button variant="outlined">Импорт задач</Button>
								<MoreHorizSharpIcon
									sx={{
										backgroundColor: "#fff",
										borderRadius: 1,
										width: 37,
										height: 37,
										transition: "all 0.3ms",
										"&:hover": {
											backgroundColor: "#e1dddd",
										},
									}}
								/>
							</div>
						</SecondBlock>
						<CreateProject />
						<Description />
						<BoxMuiFooter>
							<Box
								sx={{
									display: "flex",
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}>
								<Button
									onClick={modalNotification}
									sx={{ margin: 1 }}
									variant="outlined"
									type="button">
									Cansel
								</Button>
								<Button sx={{ margin: 1 }} variant="contained" type="submit">
									Create
								</Button>
							</Box>
						</BoxMuiFooter>
					</form>
				</FormProvider>
			</BoxMuiContainer>
			{opens && (
				<BoxModalNotificatio>
					<Box
						sx={{
							width: "500px",
							height: "300px",
							backgroundColor: "white",
							borderRadius: "10px",
							display: "flex",
							flexDirection: "column",
							// alignItems: "center",
							justifyContent: "space-between",
							padding: 5,
						}}>
						<div>
							<Typography sx={{ mb: 1, fontSize: 30 }} variant="h4">
								Изменения не будут сохранены
							</Typography>
							<Typography sx={{ fontSize: 13 }}>
								Если вы покинете эту страницу, ваши данные будут утеряны.
							</Typography>
						</div>
						<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
							<Button onClick={modalNotification}>Вернутся назад</Button>
							<Button onClick={logoutFnCreate} variant="contained">
								Отклонить задачу
							</Button>
						</div>
					</Box>
				</BoxModalNotificatio>
			)}
		</BoxMuiBox>
	);
};

export default Create;
const BoxMuiBox = styled(Box)({
	width: "100vw",
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "absolute",
	top: "0",
	left: "0",
	backgroundColor: "rgba(0,0,0,0.25)",
});
const BoxMuiFooter = styled(Box)({
	width: "100%",
	borderTop: "2px solid #b9b4b4",
	height: "70px",
	position: "sticky",
	bottom: -20,
	marginTop: 10,
	backgroundColor: "white",
	display: "flex",
	alignItems: "end",
	justifyContent: "end",
});
const BoxModalNotificatio = styled(Box)({
	width: "100vw",
	height: "100vh",
	backgroundColor: "rgba(0,0,0,0.85)",
	position: "absolute",
	top: 0,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	zIndex: 100000,
});

const BoxMuiContainer = styled(Box)({
	width: "950px",
	height: "600px",
	backgroundColor: "white",
	position: "absolute",
	top: "10%",
	left: "17%",
	zIndex: "100",
	borderRadius: "2px",
	padding: "0 20px 20px 20px",
	overflow: "hidden",
	overflowY: "scroll",
});

const BoxMuiDivControlRight = styled("div")({
	width: "100%",
	height: "60px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	margin: "0 0 20px 0",
	borderBottom: "2px solid #c8c6c6",
	position: "sticky",
	top: "0",
	backgroundColor: "white",
	zIndex: "20",
});

const DivBoxMui = styled("div")({
	"& .UndoSharpIcon": {
		backgroundColor: "white",
		transition: "all 0.3ms",
		width: "40px",
		height: "30px",
		"&:hover": {
			backgroundColor: "#efe8e8",
			color: "red",
		},
	},
	"& .CloseFullscreenIcon": {
		backgroundColor: "white",
		transition: "all 0.3ms",
		width: "40px",
		height: "30px",
		"&:hover": {
			backgroundColor: "#efe8e8",
			color: "red",
		},
	},
	"& .CloseIcon": {
		backgroundColor: "white",
		transition: "all 0.3ms",
		width: "40px",
		height: "30px",
		"&:hover": {
			backgroundColor: "#efe8e8",
			color: "red",
		},
	},
});

const SecondBlock = styled(Box)({
	display: "flex",
	width: "100%",
	justifyContent: "space-between",
});
