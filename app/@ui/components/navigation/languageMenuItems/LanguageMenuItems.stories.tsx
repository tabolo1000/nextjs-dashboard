import {Meta, StoryObj} from "@storybook/react";
import {Language} from "@/i18n/languages";
import {fn} from "@storybook/test";
import LanguageMenuItems from "@/app/@ui/components/navigation/languageMenuItems/LanguageMenuItems";


const locales = [
    {
        locale: "en",
        content: "English",
    },
    {
        locale: "ru",
        content: "Русский",
    },
];


const onClose = fn()


const meta: Meta<typeof LanguageMenuItems> = {
    component: LanguageMenuItems,
    title: 'Components/LanguageMenuItems',
    tags: ["autodocs"],
    args: {
        onClose,
        locales,
        currentPath: "/",
        currentLanguage: Language.Ru,
    },
    argTypes: {
        locales: {
            description: "Array of available languages with their locale codes and display names",
            table: {
                defaultValue: {
                    summary: "Array of language objects",
                    detail: JSON.stringify(locales, null, 2)
                },
            },
            control: {
                type: "object"
            }
        },
        onClose: {
            description: "Function called when a language is selected",
            action: "closed"
        },
        currentLanguage: {
            description: "Currently selected language code that will be highlighted in the menu",
            table: {
                defaultValue: {
                    summary: Language.Ru
                },
                type: {
                    summary: "string"
                },
            },
            control: {
                type: "select"
            },
            options: [Language.Ru, Language.En]
        },
        currentPath: {
            description: "Current application path that will be preserved when changing language",
            table: {
                defaultValue: {
                    summary: "/"
                }
            },
            control: {
                type: "text"
            }
        }
    }
}


export default meta;

type Story = StoryObj<typeof LanguageMenuItems>;

export const Default: Story = {}