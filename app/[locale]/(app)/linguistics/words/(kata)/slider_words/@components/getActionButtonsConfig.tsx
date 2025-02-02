import {ExitToAppTwoTone, FindInPage, SettingsApplicationsTwoTone} from "@mui/icons-material";
import {ActionButton} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/ActionButtons";


/**
 * Returns an array for creating a dashboard.
 * @param editingFrom
 * @param isSettingsActive
 * @param setTopic
 * @param toggleSettings
 * @param setIsModalSearchOpen
 * @param isModalSearchOpen
 */
export const getActionButtonsConfig = (
    editingFrom: boolean,
    isSettingsActive: boolean,
    setTopic: (topic: string[]) => void,
    toggleSettings: () => void,
    setIsModalSearchOpen: (state: boolean) => void,
    isModalSearchOpen: boolean
): ActionButton[] => {
    /**
        For the edit form
     */
    if (editingFrom) {
        return [
            {
                icon: <SettingsApplicationsTwoTone className="text-3xl" />,
                onClick: toggleSettings,
                tooltip: "Открыть настройки",
            },
            {
                icon: <ExitToAppTwoTone className="text-3xl" />,
                onClick: () => setTopic([]),
                color: "error",
                tooltip: "Выйти",
            },
            {
                icon: <FindInPage className="text-3xl" />,
                onClick: () => setIsModalSearchOpen(!isModalSearchOpen),
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
                icon: <ExitToAppTwoTone className="text-3xl" />,
                onClick: toggleSettings,
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
            icon: <SettingsApplicationsTwoTone className="text-3xl" />,
            onClick: toggleSettings,
            tooltip: "Открыть настройки",
        },
        {
            icon: <ExitToAppTwoTone className="text-3xl" />,
            onClick: () => setTopic([]),
            color: "error",
            tooltip: "Выйти",
        },
        {
            icon: <FindInPage className="text-3xl" />,
            onClick: () => setIsModalSearchOpen(!isModalSearchOpen),
            color: "secondary",
            tooltip: "Поиск",
        },
    ];
};