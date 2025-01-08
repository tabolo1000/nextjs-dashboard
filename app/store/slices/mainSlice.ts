import {createSlice} from "@reduxjs/toolkit";


const initialState: MainState = {
    "panel": {
        isOpenHeaderPanel: false,
        isOpenAsidePanel: false,
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
        ){
            state.panel.isOpenHeaderPanel =  !state.panel.isOpenHeaderPanel;
        },
        asidePanel(
            state: MainState,
        ){
            state.panel.isOpenAsidePanel =  !state.panel.isOpenAsidePanel;
        },
        turnOfAnimation(
            state: MainState,
        ){
            state.animation.isAnimating = !state.animation.isAnimating;
        }
    },
})

export const {
    headerPanel,
    asidePanel,
    turnOfAnimation
} = mainSlice.actions;
export default mainSlice.reducer;


