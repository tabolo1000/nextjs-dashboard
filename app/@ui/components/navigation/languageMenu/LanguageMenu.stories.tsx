import {Meta, StoryObj} from "@storybook/react";
import {Language} from "@/i18n/languages";
import {fn} from "@storybook/test";
import React from "react";
import {Button} from "@mui/material";
import {LanguageMenu} from "@/app/@ui/components/navigation/languageMenu/LanguageMenu";

// Моки для локалей
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

// Мок для функции закрытия меню
const handleClose = fn();

const meta: Meta<typeof LanguageMenu> = {
    title: "Components/LanguageMenu",
    component: LanguageMenu,
    tags: ["autodocs"],
    argTypes: {
        locales: {
            control: "object",
            description: "List of available locales",
        },
        anchorEl: {
            control: "boolean",
            description: "Element to which the menu is bound",
        },
        open: {
            control: "boolean",
            description: "Menu status (open/closed)",
        },
        currentLanguage: {
            control: "radio",
            options: [Language.En, Language.Ru],
            description: "Current locale",
        },
        currentPath: {
            control: "text",
            description: "Current path (URL)",
        },
        onClose: {
            action: "onClose",
            description: "Function called when the menu is closed",
        },
    },
};

export default meta;
type Story = StoryObj<typeof LanguageMenu>;

// История по умолчанию
export const Default: Story = {
    render: (args) => {
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const [open, setOpen] = React.useState<boolean>(args.open || false);

        const buttonRefCallback = (element: HTMLButtonElement | null) => {
            if (element && open) {
                setAnchorEl(element);
                setOpen(true);
            }
        };

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
            setOpen(true);
        };

        const handleClose = () => {
            setAnchorEl(null);
            setOpen(false);
        };


        return (
            <div>
                {/* Кнопка для открытия меню */}
                <Button
                    variant={"contained"}
                    ref={buttonRefCallback}
                    onClick={handleClick}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                >
                    Your button
                </Button>

                {/* Меню */}
                <LanguageMenu
                    {...args}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                />
            </div>
        );
    },
    args: {
        locales: locales,
        currentPath: "/",
        currentLanguage: Language.Ru,
        open: false,
    },
};
