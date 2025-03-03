import {StoryObj, Meta} from "@storybook/react";
import {Language} from "@/app/[locale]/(app)/assets/lang/Layout.ru";
import {Header} from "@/app/@ui/layouts/header/Header";

/**
 * Mok for the language object
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

const meta: Meta<typeof Header> = {
    title: "Layout/Header",
    component: Header,
    tags: ["autodocs"],
    args: {
        language
    },
    argTypes: {
        language: {
            description: "A language model object that includes the language for example 'en' " +
                "and content that contains the text to be displayed on the language switch."
        }
    }
}



export default meta;


type Story = StoryObj<typeof Header>


export const Default: Story = {}