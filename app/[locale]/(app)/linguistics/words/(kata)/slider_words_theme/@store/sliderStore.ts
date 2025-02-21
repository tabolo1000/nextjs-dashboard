import {create} from "zustand";

export type CurrentWindowSlider = "setting" | "add_word" | "search_word" | "reset";
type StateSliderHandlers = {
    setCurrentWindow: (currentWindow: CurrentWindowSlider) => void;
    setTopic: (topics: string[]) => void;
}
type StateSlider = {
    isSettingsActive: boolean;
    isEditingActive: boolean;
    isSearchActive: boolean;
    topics: string[]
}

export type StoreSlider = StateSlider & StateSliderHandlers

export const useSliderWindowManagementStore = create<StoreSlider>((set) => ({
    isSettingsActive: false,
    isEditingActive: false,
    isSearchActive: false,
    topics: [],

    setCurrentWindow: (currentWindow: CurrentWindowSlider) => set((state) => {
        switch (currentWindow) {
            case "setting":
                return {isSettingsActive: !state.isSettingsActive};
            case "add_word":
                return {isEditingActive: !state.isEditingActive};
            case "search_word":
                return {isSearchActive: !state.isSearchActive};
            case "reset":
                return {
                    isSettingsActive: false,
                    isEditingActive: false,
                    isSearchActive: false,
                }
            default:
                return state;
        }
    }),

    setTopic: (topics: string[]) => set((state) => {
        debugger
        if (JSON.stringify(state.topics) === JSON.stringify(topics)) {
            return state;
        }
        return {topics: [...topics]};
    }),
}));


export const useSettings = () => useSliderWindowManagementStore((state) => state.isSettingsActive);
export const useEditing = () => useSliderWindowManagementStore((state) => state.isEditingActive);
export const useSearch = () => useSliderWindowManagementStore((state) => state.isSearchActive);
export const useTopics = () => useSliderWindowManagementStore((state) => state.topics);


export const useSliderHandlers = () => {
    const setCurrentWindow = useSliderWindowManagementStore(state => state.setCurrentWindow);
    const setTopic = useSliderWindowManagementStore(state => state.setTopic);

    return { setCurrentWindow, setTopic };
};
