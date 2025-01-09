import {Dispatch, PayloadAction, ThunkDispatch} from "@reduxjs/toolkit";
import {getFromLocalStorage, saveToLocalStorage} from "@/app/lib/utils";
import {animation, asidePanel, headerPanel} from "@/app/store/slices/mainSlice/mainSlice";

function createToggleThunk<T>(
    key: string,
    actionCreator: (payload: T) => PayloadAction<T>
) {
    return (value: T) => (dispatch: Dispatch) => {
        saveToLocalStorage(key, value);
        dispatch(actionCreator(value));
    };
}

function createInitThunk<T>(
    key: string,
    actionCreator: (payload: T) => PayloadAction<T>
) {
    return () => (dispatch: Dispatch) => {
        const value = getFromLocalStorage<T>(key);
        if (value !== null) {
            dispatch(actionCreator(value));
        }
    };
}

export const toggleHeaderPanel = createToggleThunk(
    "header_panel",
    headerPanel
);

export const toggleAsidePanel = createToggleThunk(
    "aside_panel",
    asidePanel
);

export const toggleAnimation = createToggleThunk(
    "animation",
    animation
);

export const initializeHeaderPanel = createInitThunk(
    "header_panel",
    headerPanel
);

export const initializeAsidePanel = createInitThunk(
    "aside_panel",
    asidePanel
);

export const initializeAnimation = createInitThunk(
    "animation",
    animation
);

export const MainConfiguration = () => (dispatch: ThunkDispatch<any, any, any>) => {
    dispatch(initializeHeaderPanel());
    dispatch(initializeAsidePanel());
    dispatch(initializeAnimation());
};