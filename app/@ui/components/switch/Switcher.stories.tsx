import {Meta, StoryObj} from "@storybook/react";
import Switcher from "@/app/@ui/components/switch/Switcher";
import {fn} from "@storybook/test";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import React from "react";



const onChange = fn()

const meta: Meta<typeof Switcher> = {
    title: "Components/Switcher",
    component: Switcher,
    tags: ["autodocs"],
    args: {
        defaultChecked: false,
        onChange,
        ariaLabel: "Toggle theme",
        checkedIcon: "🌑",
        uncheckedIcon: "☀️",
        id: "theme-switcher",
        disabled: false
    },
    argTypes: {
        defaultChecked: {
            name: "defaultChecked",
            type: "boolean",
            description: "Boolean value that shows in what state the switcher is in ",
            control: "radio",
            options: ["Light theme", "Dark theme"],
            table: {
                defaultValue: {
                    summary: "Light theme",
                    detail: "If a light theme is true dark false",
                }
            }
        },
        onChange: {
            table: {
                defaultValue: {
                    summary: "(value: boolean) => void"
                },
            },
            type: "function",
            description: "Change handler that accepts true/false",
        },
        ariaLabel: {
            name: "ariaLabel",
            type: "string",
            description: "Accessibility label for screen readers",
            table: {
                defaultValue: {
                    summary: "Toggle theme"
                }
            }
        },
        checkedIcon: {
            name: "checkedIcon",
            description: "Icon or component to show when the switch is checked (dark theme)",
            control: "text",
            table: {
                defaultValue: {
                    summary: "🌑"
                }
            }
        },
        uncheckedIcon: {
            name: "uncheckedIcon",
            description: "Icon or component to show when the switch is unchecked (light theme)",
            control: "text",
            table: {
                defaultValue: {
                    summary: "☀️"
                }
            }
        },
        id: {
            name: "id",
            type: "string",
            description: "Unique ID for the switch input",
            table: {
                defaultValue: {
                    summary: "theme-switcher"
                }
            }
        },
        disabled: {
            name: "disabled",
            type: "boolean",
            description: "Whether the switch is disabled",
            control: "boolean",
            table: {
                defaultValue: {
                    summary: "false"
                }
            }
        }
    },

}

export default meta;
type Story = StoryObj<typeof Switcher>;

export const Default: Story = {}

export const DarkThemeActive: Story = {
    args: {
        defaultChecked: true
    }
}

export const CustomIcons: Story = {
    args: {
        checkedIcon: <NightsStayIcon className="text-yellow-500"/>,
        uncheckedIcon: <NightsStayIcon className="text-yellow-500"/>
    }
}

export const Disabled: Story = {
    args: {
        disabled: true
    }
}

export const DisabledChecked: Story = {
    args: {
        disabled: true,
        defaultChecked: true
    }
}

export const WithCustomLabel: Story = {
    args: {
        ariaLabel: "Switch between dark and light mode"
    }
}

export const Interactive: Story = {
    args: {
        onChange: (isChecked) => {
            console.log(`Switch toggled to: ${isChecked ? 'Dark' : 'Light'} theme`);
            alert(`Theme switched to: ${isChecked ? 'Dark' : 'Light'}`);
        }
    }
}
