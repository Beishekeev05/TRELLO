import { Box, Typography, styled } from "@mui/material";
import { FC } from "react";
import profile from "../../assets/profile.png";

export interface ProfileProps {
	project: string;
}

const Profile: FC<ProfileProps> = ({ project }) => {
	return (
		<Container>
			<ProfileImg>
				<img style={{ width: "100%" }} src={profile} alt="profile" />
			</ProfileImg>
			<Box>
				<Typography>{project}</Typography>
				<Typography sx={{ color: "grey", fontSize: 13 }}>
					Проект по разработке ПО
				</Typography>
			</Box>
		</Container>
	);
};

export default Profile;
const ProfileImg = styled("div")({
	width: "50px",
	height: "50px",
});

const Container = styled(Box)({
	width: "100%",
	height: "60px",
	display: "flex",
	alignItems: "center",
	justifyContent: "start",
	gap: "10px",
	margin: "10px 0 q0px 0",
});
