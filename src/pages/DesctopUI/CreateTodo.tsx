import { Box, Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { SubmitHandler, useForm } from "react-hook-form";
import { DropValue, createDrop } from "../../redux/dragSlice/dragSlice";
import { useAppDispatch } from "../../utils/helpers/hooks";

const CreateTodo: FC = () => {
	const [openTextFeild, setOpenTextFeild] = useState(false);
	const { register, handleSubmit, reset } = useForm<DropValue>();
	
	const onClose = () => setOpenTextFeild((prev) => !prev);
	const dispatch = useAppDispatch();

	const submitHandler: SubmitHandler<DropValue> = (data) => {
		const id = Math.floor(Math.random() * 10000);
		const updatedData = { ...data, id };
		console.log(updatedData);
		dispatch(createDrop(updatedData));
		reset();
	};

	return (
		<Box
			sx={{
				position: "relative",
				borderTop: "2px solid #f1f1f1",
				width: "100%",
				margin: "5px 0 5px 0",
				padding: 2,
			}}>
			<Box>
				<Button variant="contained" onClick={onClose}>
					<AddIcon />
				</Button>
			</Box>
			{openTextFeild && (
				<Box
					component={"form"}
					onSubmit={handleSubmit(submitHandler)}
					sx={{
						m: 2,
						position: "absolute",
						zIndex: "120300",
						top: -10,
						left: 100,
						width: 350,
						display: "flex",
						gap: 2,
					}}>
					<TextField
						label="Проект"
						{...register("title", { required: true })}
					/>
					<Button type="submit">
						<DoneIcon />
					</Button>
					<Button onClick={onClose}>
						<CloseIcon />
					</Button>
				</Box>
			)}
		</Box>
	);
};

export default CreateTodo;
