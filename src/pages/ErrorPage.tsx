import { FC } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage: FC = () => {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate("/");
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				textAlign: "center",
				backgroundColor: "#f0f0f0",
				padding: 2,
			}}>
			<Typography variant="h1" component="h2" sx={{ mb: 2 }}>
				Ошибка 404
			</Typography>
			<Typography variant="h6" component="p" sx={{ mb: 4 }}>
				Страница не найдена.
			</Typography>
			<Button variant="contained" color="primary" onClick={handleGoHome}>
				На главную
			</Button>
		</Box>
	);
};

export default ErrorPage;
