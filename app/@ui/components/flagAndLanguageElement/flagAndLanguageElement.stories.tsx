import {Meta, StoryObj} from "@storybook/react";
import FlagAndLanguageElement from "@/app/@ui/components/flagAndLanguageElement/FlagAndLanguageElement";
import {Language} from "@/i18n/languages";


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

const meta: Meta<typeof FlagAndLanguageElement> = {
    title: "Components/FlagAndLanguageElement",
    component: FlagAndLanguageElement,
    tags: ["autodocs"],
    args: {
        locale: locales[0].locale,
        currentLanguage: locales[0].locale,
        currentPath: "/",
        content: locales[0].locale
    },
    argTypes: {
        locale: {
            description: "The key to drawing a country's flag",
            table: {
                defaultValue: {
                    summary: Language.Ru,
                    detail: "Русский язык"
                },
                type: {
                    summary: Language.Ru,
                },
            },
            control: {
                type: "radio"
            },
            options: [Language.Ru, Language.En]

        },
        content: {
            description: "Value located on the button",
            table: {
                defaultValue: {
                    summary: locales[1].content,
                    detail: "Русский язык"
                },
                type: {
                    summary: Language.Ru,
                },
            },
            control: {
                type: "radio"
            },
            options: [locales[1].content, locales[0].content]

        },
        currentLanguage: {
            description: "Shows what language is currently spoken by highlighting",
            table: {
                defaultValue: {
                    summary: "Russian"
                },
                type: {
                    summary: Language.Ru,
                },
            },
            control: {
                type: "radio"
            },
            options: [Language.Ru, Language.En]
        },
        currentPath: {
            description: "The current path that determines where the user went. " +
                "Only the locale changes, but the page remains the same",
            table: {
                defaultValue: {
                    summary: "/"
                }
            }
        }
    }
}

export default meta;

type Story = StoryObj<typeof FlagAndLanguageElement>;

export const Default: Story = {};