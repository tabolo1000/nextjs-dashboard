import ControlPanelHeader from "@/app/@ui/components/controlPanelHeader/ControlPanelHeader";
import {Meta, StoryObj} from "@storybook/react";
import {Language} from "@/app/[locale]/(app)/assets/lang/Layout.ru";


/**
 *  Мок данных
 */
const language: Array<Language> = [
    {
        locale: "en",
        content: "English",
    },
    {
        locale: "ru",
        content: "Русский",
    },
];

const meta: Meta<typeof ControlPanelHeader> = {
    title: "Components/ControlPanelHeader",
    component: ControlPanelHeader,
    tags: ["autodocs"],
    argTypes: {
        language: {
            description: "Array of language options to display in the language switcher\ " +
                "Each language contains a locale code and display content",
            control: "object",
        },
        className: {
            description: "Optional custom class name for the container",
            control: "text",
        }
    }
}

export default meta;

type Object = StoryObj<typeof ControlPanelHeader>;

export const Default: Object = {
    render: () => {
        return (
            <div className="border border-gray-200 bg-blue-400 dark:bg-blue-800 rounded-lg">
                <ControlPanelHeader
                    language = {language}
                />
            </div>
        )
    }
}