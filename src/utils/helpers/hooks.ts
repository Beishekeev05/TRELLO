import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
