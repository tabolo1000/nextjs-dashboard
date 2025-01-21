import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: MainState = {
    panel: {
        isOpenHeaderPanel: true,
        isOpenAsidePanel: true,
    },
    animation: {
        isAnimating: true,
    },
};

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        headerPanel(
            state,
            action: PayloadAction<{ isOpenHeaderPanel: boolean }>
        ) {
            state.panel.isOpenHeaderPanel = action.payload.isOpenHeaderPanel;
        },
        asidePanel(state, action: PayloadAction<{ isOpenAsidePanel: boolean }>) {
            state.panel.isOpenAsidePanel = action.payload.isOpenAsidePanel;
        },
        animation(state, action: PayloadAction<{ isAnimating: boolean }>) {
            state.animation.isAnimating = action.payload.isAnimating;
        },
    },
});

// State interfaces
interface PanelState {
    isOpenHeaderPanel: boolean;
    isOpenAsidePanel: boolean;
}

interface AnimationState {
    isAnimating: boolean | null;
}

interface MainState {
    panel: PanelState;
    animation: AnimationState;
}



// Thunks



// Exports
export const { headerPanel, asidePanel, animation } = mainSlice.actions;
export default mainSlice.reducer;















/*
import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/app/store";


const initialState: MainState = {
    panel: {
        isOpenHeaderPanel: true,
        isOpenAsidePanel: true,
    },
    animation: {
        isAnimating: true,
    },
};

interface MainState {
    panel: {
        isOpenHeaderPanel: boolean,
        isOpenAsidePanel: boolean,
    },
    animation: {
        isAnimating: boolean | null,
    }
}


const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        headerPanel(
            state: MainState,
            action: PayloadAction<{ isOpenHeaderPanel: boolean}>,
        ){
            state.panel.isOpenHeaderPanel =  action.payload.isOpenHeaderPanel;
        },
        asidePanel(
            state: MainState,
            action: PayloadAction<{ isOpenAsidePanel: boolean}>,
        ){
            state.panel.isOpenAsidePanel =  action.payload.isOpenAsidePanel;
        },
        animation(
            state: MainState,
            action: PayloadAction<{ isAnimating: boolean}>,
        ){
            state.animation.isAnimating = action.payload.isAnimating;
        }
    },
})


export function toggleHeaderPanel(isOpenHeaderPanel: boolean){
    return function (dispatch: Dispatch) {
        localStorage.setItem("header_panel", JSON.stringify(isOpenHeaderPanel));
        dispatch(headerPanel({isOpenHeaderPanel}))
    }
}
export function toggleAsidePanel(isOpenAsidePanel: boolean){
    return function (dispatch: Dispatch) {
        localStorage.setItem("aside_panel", JSON.stringify(isOpenAsidePanel));
        dispatch(asidePanel({isOpenAsidePanel}))
    }
}
export function toggleAnimation(isAnimating: boolean){
    return function (dispatch: Dispatch) {
        localStorage.setItem("animation", JSON.stringify(isAnimating));
        dispatch(animation({isAnimating}))
    }
}

export function MainConfiguration(){
    return function (dispatch: Dispatch) {
        if(localStorage.getItem("header_panel")){
            dispatch(headerPanel({isOpenHeaderPanel: JSON.parse(localStorage.getItem("header_panel"))}))
        }
        if(localStorage.getItem("aside_panel")){
            dispatch(asidePanel({isOpenAsidePanel: JSON.parse(localStorage.getItem("aside_panel"))}))
        }
        if(localStorage.getItem("animation")){
            dispatch(animation({isAnimating: JSON.parse(localStorage.getItem("animation"))}))
        }
    }
}

export const {
    headerPanel,
    asidePanel,
    animation
} = mainSlice.actions;
export default mainSlice.reducer;


*/
