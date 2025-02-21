import {ExitToAppTwoTone, FindInPage, SettingsApplicationsTwoTone} from "@mui/icons-material";

import {ActionButton} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/ActionButtons";
import {StoreSlider} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/sliderStore";



/**
 * Returns an array for creating a dashboard.
 */
export const getActionButtonsConfig = (
    {isSettingsActive, isEditingActive, setCurrentWindow, setTopic}: Pick<StoreSlider, "isSettingsActive" | "isEditingActive" | "setCurrentWindow" | "setTopic">
    ): ActionButton[] => {


/**
 For the edit form
 */
if (isEditingActive) {
    return [
        {
            icon: <SettingsApplicationsTwoTone className="text-3xl"/>,
            onClick: () => setCurrentWindow("setting"),
            tooltip: "Открыть настройки",
        },
        {
            icon: <ExitToAppTwoTone className="text-3xl"/>,
            onClick: () => setTopic([]),
            color: "error",
            tooltip: "Выйти",
        },
        {
            icon: <FindInPage className="text-3xl"/>,
            onClick: () => setCurrentWindow("search_word"),
            color: "secondary",
            tooltip: "Поиск",
        },
    ];
}
/**
 * For settings
 */
if (isSettingsActive) {
    return [
        {
            icon: <ExitToAppTwoTone className="text-3xl"/>,
            onClick: () => setCurrentWindow("setting"),
            color: "error",
            tooltip: "Выйти",
        },
    ];
}
/**
 * For a regular slider.
 */
return [
    {
        icon: <SettingsApplicationsTwoTone className="text-3xl"/>,
        onClick: () => setCurrentWindow("setting"),
        tooltip: "Открыть настройки",
    },
    {
        icon: <ExitToAppTwoTone className="text-3xl"/>,
        onClick: () => setTopic([]),
        color: "error",
        tooltip: "Выйти",
    },
    {
        icon: <FindInPage className="text-3xl"/>,
        onClick: () => setCurrentWindow("search_word"),
        color: "secondary",
        tooltip: "Поиск",
    },
];
}
;