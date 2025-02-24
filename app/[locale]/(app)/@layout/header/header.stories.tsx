import {Header} from "@/app/[locale]/(app)/@layout/header/Header";
import {StoryObj, Meta} from "@storybook/react";
import {Language} from "@/app/[locale]/(app)/assets/lang/Layout.ru";


const meta: Meta<typeof Header> = {
    title: "Layout/Header",
    component: Header,
    tags: ["autodocs"]
}



export default meta;


type Story = StoryObj<typeof Header>


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

export const Default: Story = {
    args: {
        language
    }
}