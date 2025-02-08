import {createStorageThunk} from "@/app/lib/utils";
import {
    setAnimationState,
    PanelState,
    toggleAsidePanel,
    toggleHeaderPanel,
    AnimationState
} from "@/app/store/slices/mainSlice/configureAppSlice";
import {AppDispatch} from "@/app/store";
/**
 * Based on their arguments:
 *  key: string
 *  ActionCreature: (value) => void
 * Creates a ThunkCreate that is called
 *
 * Set the data to localStorage
 */
export const toggleHeaderPanelTo = createStorageThunk<Pick<PanelState, "isOpenHeaderPanel">>(
    "header_panel",
    toggleHeaderPanel
);

export const toggleAsidePanelTo = createStorageThunk<Pick<PanelState, "isOpenAsidePanel">>(
    "aside_panel",
    toggleAsidePanel
);

export const toggleAnimationTo = createStorageThunk<Pick<AnimationState, "isAnimating">>(
    "animation",
    setAnimationState
);
/**
 * Get the data from localStorage
 * @constructor
 */
export const MainConfiguration = () => (dispatch: AppDispatch) => {
    dispatch(toggleHeaderPanelTo());
    dispatch(toggleAsidePanelTo());
    dispatch(toggleAnimationTo());
};
