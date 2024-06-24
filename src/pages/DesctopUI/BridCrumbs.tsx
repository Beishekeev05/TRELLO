import { Box, Breadcrumbs, Typography, styled } from "@mui/material";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProfileProps } from "./Profile";

const CustomBreadcrumbs: FC<ProfileProps> = ({ project }) => {
	const { pathname } = useLocation();
	const pathnames = pathname.split("/").filter((x) => x);

	const pathNameMap: { [key: string]: string } = {
		"/": "Home",
		desktop: `${project}`,
	};

	return (
		<BoxMuiContainer>
			<Breadcrumbs aria-label="breadcrumb">
				<Links to="/" style={{ color: "inherit" }}>
					<Typography color="text.primary">Home</Typography>
				</Links>
				{pathnames.map((value, index) => {
					const to = `/${pathnames.slice(0, index + 1).join("/")}`;
					const isLast = index === pathnames.length - 1;

					return (
						isLast && (
							<Typography color="text.primary" key={to}>
								{pathNameMap[value] || value}
							</Typography>
						)
					);
				})}
			</Breadcrumbs>
		</BoxMuiContainer>
	);
};

export default CustomBreadcrumbs;
const BoxMuiContainer = styled(Box)({});
const Links = styled(Link)({
	color: "inherit",
	textDecoration: "none",
	"&:hover": {
		textDecoration: "underline",
	},
});
