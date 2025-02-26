import {Meta, StoryObj} from "@storybook/react";
import LanguageSwitcher from "@/app/@ui/components/languageSwitcher/LanguageSwitcher";

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


const meta: Meta<typeof LanguageSwitcher> = {
    title: "Components/LanguageSwitcher",
    component: LanguageSwitcher,
    tags: ["autodocs"],
    args: {
        locales,
    },
};


export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {
    args: {
        locales: locales
    },
};


