'use client'

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'

import { produce } from 'immer';


export interface SliderSettingsType {
    loop?: boolean;
    delay?: number;
    slidesPerView?: number;
    autoplay?: boolean;
}



interface SettingSlider {
    settings: {
        loop: boolean;
        delay: number;
        slidesPerView: number;
        autoplay: boolean;
    };
    setSettings: (settings: SliderSettingsType) => void;
}

export const useSettingSlider = create<SettingsType>()(
    persist(
        devtools(
            (set) => ({
                settings: {
                    loop: true,
                    delay: 10000,
                    slidesPerView: 1,
                    autoplay: true,
                },
                setSettings: (settings: SliderSettingsType) => {
                    set(produce((state: SettingSlider) => {
                        Object.assign(state.settings, settings);    // переписать на  optics-ts или  Ramda
                    }));
                },
            }),
            { name: "settingsStore", version: 1 }
        ),
        { name: 'slider_words_setting' },
    )
);



//---------------------------------Types------------------------------------------------------

type SettingsType = SettingState & SettingAction;

type SettingState = {
    settings: Settings
};

type Settings = {
    loop: boolean;
    delay: number;
    slidesPerView: number;
    autoplay: boolean;
}

type SettingAction = {
    setSettings: (settings: SliderSettingsType) => void;
};


