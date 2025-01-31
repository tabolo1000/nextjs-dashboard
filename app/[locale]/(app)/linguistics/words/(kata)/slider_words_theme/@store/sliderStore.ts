import {create} from "zustand";


export type SliderStore = {
    topics: string[];
    setTopic: (topics: string[]) => void;
};

export const useSliderStore  = create<SliderStore>()((set) => ({
    topics: [],
    setTopic: (topics: string[]) => set(() => ({ topics: topics})),
}))