import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * The main slice is responsible for global settings that are reflected on each page
 */
const initialState: MainState = {
    panel: {
        isOpenHeaderPanel: true,
        isOpenAsidePanel: true,
    },
    animation: {
        isAnimating: true,
    },
};

const configureAppSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        /** Header panel state management */
        toggleHeaderPanel(state, action: PayloadAction<Pick<PanelState, "isOpenHeaderPanel">>) {
            state.panel.isOpenHeaderPanel = action.payload.isOpenHeaderPanel;
        },
        /** Sidebar status management */
        toggleAsidePanel(state, action: PayloadAction<Pick<PanelState, "isOpenAsidePanel">>) {
            state.panel.isOpenAsidePanel = action.payload.isOpenAsidePanel;
        },
        /** Animation control */
        setAnimationState(state, action: PayloadAction<Pick<AnimationState, "isAnimating">>) {
            state.animation.isAnimating = action.payload.isAnimating;
        },
    },
});

//------------------------------------------- Exports main -------------------------------------------------
export const {
    toggleHeaderPanel,
    toggleAsidePanel,
    setAnimationState,
} = configureAppSlice.actions;
export default configureAppSlice.reducer;

//--------------------------------------------Main_Types---------------------------------------------------
export type MainActions = typeof configureAppSlice.actions
/**
 * On the main menu is responsible for opening
 * and scrolling the header and sidebar panels.
 *
 * isOpenHeaderPanel: true, open panel
 * isOpenAsidePanel: true,  open sidebar panel
 */
type PanelKeys = "isOpenHeaderPanel" | "isOpenAsidePanel"
export type PanelState = Record<PanelKeys, boolean>
/**
 * Enable disable animation.
 * There can be only two values true or false
 *
 * isAnimating: true  is open or
 * isAnimating: false is hide
 */
export type AnimationState = Record<"isAnimating", boolean | null>

export type MainState = {
    "panel": PanelState,
    "animation": AnimationState,
}

