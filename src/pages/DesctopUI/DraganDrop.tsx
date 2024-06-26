import { FC, useState } from "react";
import {
	Box,
	Button,
	MenuItem,
	TextField,
	Typography,
	styled,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../utils/helpers/hooks";
import {
	InValue,
	addInDrop,
	editInDrop,
	deleteInDrop,
	deleteDrop,
	reorderDrops,
	reorderIndrops,
} from "../../redux/dragSlice/dragSlice";

const DraganDrop: FC = () => {
	const { drop } = useAppSelector((state) => state.drag);
	const [openInInput, setOpenInInput] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [currentDropIdForModal, setCurrentDropIdForModal] = useState<
		number | null
	>(null);
	const [openInId, setOpenInId] = useState<number | null>(null);
	const [currentDropId, setCurrentDropId] = useState<number | null>(null);
	const [currentIndropId, setCurrentIndropId] = useState<number | null>(null);
	const [editIndropId, setEditIndropId] = useState<number | null>(null);
	const { register, handleSubmit, reset } = useForm<InValue>();
	const dispatch = useAppDispatch();

	const onCloseModal = () => setOpenModal(false);
	const deleteElem = () => {
		if (currentDropId !== null && currentIndropId !== null) {
			dispatch(
				deleteInDrop({ dropId: currentDropId, indropId: currentIndropId })
			);
			setOpenModal(false);
		}
	};

	const deleteDropHandler = (dropId: number) => {
		dispatch(deleteDrop({ dropId }));
		setCurrentDropIdForModal(null);
	};

	const onClose = () => {
		setOpenInInput(false);
		setOpenInId(null);
		setCurrentDropId(null);
	};

	const onSubmit: SubmitHandler<InValue> = (data) => {
		const id = Math.floor(Math.random() * 50000);
		if (currentDropId !== null) {
			dispatch(addInDrop({ dropId: currentDropId, indrop: { ...data, id } }));
			reset();
			setOpenInInput(false);
			setCurrentDropId(null);
		}
	};

	const onSubmitEdit: SubmitHandler<InValue> = (data) => {
		if (currentDropId !== null && editIndropId !== null) {
			dispatch(
				editInDrop({
					dropId: currentDropId,
					indropId: editIndropId,
					newTitle: data.title,
				})
			);
			setEditIndropId(null);
		}
	};

	const toggleInput = (id: number | undefined) => {
		if (openInId === id) {
			setOpenInInput(false);
			setOpenInId(null);
			setCurrentDropId(null);
		} else {
			setOpenInInput(true);
			setOpenInId(id ?? null);
			setCurrentDropId(id ?? null);
		}
	};

	const openDeleteModal = (dropId: number, indropId: number) => {
		setCurrentDropId(dropId);
		setCurrentIndropId(indropId);
		setOpenModal(true);
	};

	const toggleEdit = (indropId: number | null, dropId: number | null) => {
		setEditIndropId(indropId);
		setCurrentDropId(dropId);
	};

	const [draggingItem, setDraggingItem] = useState<any>(null);
	const [draggingOverItem, setDraggingOverItem] = useState<any>(null);

	const handleDragStart = (e: React.DragEvent, item: any, indrop?: boolean) => {
		setDraggingItem({ ...item, indrop });
		e.dataTransfer.effectAllowed = "move";
	};

	const handleDragOver = (e: React.DragEvent, item: any, indrop?: boolean) => {
		e.preventDefault();
		setDraggingOverItem({ ...item, indrop });
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		if (draggingItem.indrop && draggingOverItem.indrop) {
			dispatch(
				reorderIndrops({
					sourceDropId: draggingItem.dropId,
					destinationDropId: draggingOverItem.dropId,
					sourceIndex: draggingItem.index,
					destinationIndex: draggingOverItem.index,
				})
			);
		} else if (!draggingItem.indrop && !draggingOverItem.indrop) {
			dispatch(
				reorderDrops({
					sourceIndex: draggingItem.index,
					destinationIndex: draggingOverItem.index,
				})
			);
		} else if (!draggingItem.indrop && draggingOverItem.indrop) {
			dispatch(
				reorderIndrops({
					sourceDropId: draggingItem.index,
					destinationDropId: draggingOverItem.dropId,
					sourceIndex: -1,
					destinationIndex: draggingOverItem.index,
				})
			);
		}
		setDraggingItem(null);
		setDraggingOverItem(null);
	};

	return (
		<div
			style={{
				display: "flex",
				alignItems: "start",
				gap: 2,
				flexWrap: "wrap",
			}}>
			{drop?.map((item) => (
				<BoxMuiTask
					key={item.id}
					// draggable
					// onDragStart={(e) => handleDragStart(e, { id: item.id, index }, false)}
					// onDragOver={(e) => handleDragOver(e, { id: item.id, index }, false)}
					// onDrop={handleDrop}
				>
					<div
						style={{
							display: "flex",
							width: "100%",
							justifyContent: "space-between",
						}}>
						<Typography sx={{ fontWeight: 700, color: "grey" }}>
							{item.title}
						</Typography>
						<div style={{ position: "relative" }}>
							<Button
								onClick={() => setCurrentDropIdForModal(item.id)}
								type="button"
								color="inherit">
								<MoreHorizIcon />
							</Button>
							{currentDropIdForModal === item.id && (
								<Box
									sx={{
										position: "absolute",
										top: 0,
										right: 5,
										backgroundColor: "white",
										zIndex: 99999,
									}}>
									<Button color="error">
										<MenuItem onClick={() => deleteDropHandler(item.id)}>
											Удалить
										</MenuItem>
									</Button>
									<Button>
										<MenuItem onClick={() => setCurrentDropIdForModal(null)}>
											Отмена
										</MenuItem>
									</Button>
								</Box>
							)}
						</div>
					</div>
					<Box>
						{item.indrop?.map((indropItem, indropIndex) => (
							<div
								key={indropItem.id}
								draggable
								onDragStart={(e) =>
									handleDragStart(
										e,
										{ ...indropItem, dropId: item.id, index: indropIndex },
										true
									)
								}
								onDragOver={(e) =>
									handleDragOver(
										e,
										{ ...indropItem, dropId: item.id, index: indropIndex },
										true
									)
								}
								onDrop={handleDrop}>
								{editIndropId !== indropItem.id ? (
									<div
										onClick={() => toggleEdit(indropItem.id, item.id)}
										style={{
											display: "flex",
											justifyContent: "space-between",
										}}>
										<TypographyStyle>{indropItem.title}</TypographyStyle>
										<Button
											onClick={() => openDeleteModal(item.id, indropItem.id)}>
											<MoreHorizIcon />
										</Button>
									</div>
								) : (
									<form onSubmit={handleSubmit(onSubmitEdit)}>
										<TextField
											{...register("title", { required: true })}
											defaultValue={indropItem.title}
										/>
										<Button type="submit" color="info" sx={{ mt: 0.5 }}>
											<AddIcon sx={{ m: 0.5 }} />
										</Button>
										<Button
											onClick={() => toggleEdit(null, null)}
											color="error"
											sx={{ mt: 0.5 }}>
											<CloseIcon sx={{ m: 0.5 }} />
										</Button>
									</form>
								)}
							</div>
						))}
					</Box>
					{openInInput && openInId === item.id && (
						<Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
							<TextField
								size="small"
								{...register("title", { required: true })}
							/>
							<Button type="submit" color="info" sx={{ mt: 0.5 }}>
								<AddIcon sx={{ m: 0.5 }} />
							</Button>
							<Button onClick={onClose} color="error" sx={{ mt: 0.5 }}>
								<CloseIcon sx={{ m: 0.5 }} />
							</Button>
						</Box>
					)}
					<div style={{ position: "sticky", bottom: 0 }}>
						<MenuItem onClick={() => toggleInput(item.id)}>
							<AddIcon sx={{ mr: 1 }} />
							Добавить задачу
						</MenuItem>
					</div>
				</BoxMuiTask>
			))}
			{openModal && (
				<Box
					sx={{
						width: "100vw",
						height: "100vh",
						position: "absolute",
						zIndex: 9999,
						backgroundColor: "rgba(0,0,0,0.65)",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						top: 0,
						left: 0,
					}}>
					<Box
						sx={{
							backgroundColor: "white",
							width: 400,
							height: "200px",
							p: 2,
							borderRadius: 2,
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}>
						<Typography variant="h6" sx={{ mt: 5 }}>
							Вы точно хотите удалить элемент?
						</Typography>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								flexDirection: "column",
								gap: 1,
							}}>
							<Button onClick={deleteElem} variant="contained" color="error">
								Удалить
							</Button>
							<Button onClick={onCloseModal} variant="outlined">
								Отмена
							</Button>
						</Box>
					</Box>
				</Box>
			)}
		</div>
	);
};

export default DraganDrop;

const BoxMuiTask = styled(Box)({
	width: 220,
	minHeight: "200px",
	padding: 10,
	backgroundColor: "#f1f1f1",
	borderRadius: 4,
	display: "flex",
	flexDirection: "column",
	position: "relative",
});

const TypographyStyle = styled(Typography)({
	backgroundColor: "#f1f1f1",
	padding: 5,
	width: "100%",
	borderRadius: 4,
	cursor: "pointer",
	"&:hover": {
		backgroundColor: "#ede8e8",
	},
});
