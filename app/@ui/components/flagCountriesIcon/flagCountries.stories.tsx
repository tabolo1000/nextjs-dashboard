import {Meta, StoryFn, StoryObj} from "@storybook/react";
import FlagCountriesIcon from "@/app/@ui/components/flagCountriesIcon/FlagCountriesIcon";
import {Language} from "@/i18n/languages";



const meta: Meta<typeof FlagCountriesIcon> = {
    title: "Components/FlagCountriesIcon",
    component: FlagCountriesIcon,
    tags: ["autodocs"],
    args: {
        locale: Language.Ru,
    },

    argTypes: {
        locale: {
            table: {
                defaultValue: {
                    summary: Language.Ru,
                    detail: "Русский язык"
                },
                category: "Main Settings",
            },
            name: "Locale",
            description: "Set the locale to see the required flag",
            type: "string",
            control: {
                type: "radio"
            },
            options: [Language.En, Language.Ru, "es"],
        }
    },
    parameters: {
        docs: {
            description: {
                component: "Set the locale to see the required flag",
            },

        }
    },
};
export default meta;

type Story = StoryObj<typeof FlagCountriesIcon>;

export const DefaultRussian: Story = {
    args: {
        locale: Language.Ru,
    },
    argTypes: {
        locale: {
            description: "dasfas"
        }
    }
};

export const EnglishFlag: Story = {
    args: {
        locale: Language.En,
    },
    argTypes: {
        locale: {
            table: {
                disable: true,
            }
        }
    }
};
export const SpanishFlag: Story = {
    ...EnglishFlag,
    args: {
        locale: "es",
    }
};
