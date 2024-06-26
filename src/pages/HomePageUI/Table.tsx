import { FC } from "react";
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	TableContainer,
	styled,
	Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../utils/helpers/hooks";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { deletProject } from "../../redux/tableSlice/tableSlice";
import { NavLink } from "react-router-dom";

const DataTable: FC = () => {
	const { table } = useAppSelector((state) => state.table);
	console.log(table);
	const dispatch = useAppDispatch();
	const handleDelete = (id: number) => {
		console.log(id);
		dispatch(deletProject(id));
	};
	return (
		<Paper style={{ width: "100%", overflow: "hidden" }}>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableSellAll>ID</TableSellAll>
							<TableSellAll>Проект</TableSellAll>
							<TableSellAll>Статус</TableSellAll>
							<TableSellAll>Важность</TableSellAll>
							<TableSellAll>Краткое имя</TableSellAll>
							<TableSellAll>Описание</TableSellAll>
							<TableSellAll>Другие</TableSellAll>
						</TableRow>
					</TableHead>
					<TableBody>
						{table.map((row, index) => (
							<TableRowMui key={row.id}>
								<TableCell sx={{ fontWeight: 700 }}>{index + 1}</TableCell>

								<TableCell sx={{ color: "blue", fontWeight: 700 }}>
									<NavLink to={`${row.id}/desktop`}>{row.project}</NavLink>
								</TableCell>

								<TableCell
									sx={{
										color: row.status === "IN PROGRESS" ? "blue" : "green",
										fontWeight: 700,
									}}>
									{row.status}
								</TableCell>
								<TableCell
									sx={{
										color: row.typeProject === "Екстра" ? "red" : "blue",
										fontWeight: 700,
									}}>
									{row.typeProject}
								</TableCell>
								<TableCell sx={{ color: "blue", fontWeight: 700 }}>
									{row.resum}
								</TableCell>
								<TableCell sx={{ color: "blue", fontWeight: 700 }}>
									{row.textarea}
								</TableCell>
								<TableCell sx={{ color: "blue", fontWeight: 700 }}>
									<Button onClick={() => handleDelete(row.id)}>
										<BackspaceIcon />
									</Button>
								</TableCell>
							</TableRowMui>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};

export default DataTable;
const TableRowMui = styled(TableRow)({
	"&:hover": {
		backgroundColor: "rgba(0, 0, 0, 0.08)",
	},
});
const TableSellAll = styled(TableCell)({
	fontWeight: 300,
	fontSize: "22px",
});
