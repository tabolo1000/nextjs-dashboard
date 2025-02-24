import {Meta, StoryObj} from "@storybook/react";
import LanguageSwitcher from "@/app/@ui/components/languageSwitcher/LanguageSwitcher";
import {Language} from "@/app/[locale]/(app)/assets/lang/Layout.ru";


const locales: Array<Language> = [
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
        locales
    }
}

export default meta;

type Story = StoryObj<typeof LanguageSwitcher>



export const Default = {}


export const OpenedLanguageSwitcher = {
    args: {
        locales,
    }
}
