import {Meta, StoryObj} from "@storybook/react";
import Switcher from "@/app/@ui/components/switch/Switcher";
import {fn} from "@storybook/test";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import {useState} from "react";



const onChange = fn()

const meta: Meta<typeof Switcher> = {
    title: "Components/Switcher",
    component: Switcher,
    tags: ["autodocs"],
    args: {
        currentChecked: false,
        onChange,
        ariaLabel: "Toggle theme",
        checkedIcon: "🌑",
        uncheckedIcon: "☀️",
        id: "theme-switcher",
        disabled: false
    },
    argTypes: {
        currentChecked: {
            name: "defaultChecked",
            type: "boolean",
            description: "Boolean value that shows in what state the switcher is in ",
            control: "radio",
            options: [true, false],
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

export const Default: Story = {
    render: (args) => {
        const [isSwitch, setSwitch] = useState(args.currentChecked);
        return (
            <Switcher
                {...args}
                currentChecked={isSwitch}
                onChange={setSwitch}
            />
        );
    },
    args: {
        currentChecked: false
    }
}

export const DarkThemeActive: Story = {
    ...Default,
    args: {
        currentChecked: true,
    }
}

export const CustomIcons: Story = {
    ...Default,
    args: {
        checkedIcon: <NightsStayIcon className="text-yellow-500"/>,
        uncheckedIcon: <NightsStayIcon className="text-yellow-500"/>
    }
}

export const Disabled: Story = {
    ...Default,
    args: {
        disabled: true
    }
}

export const DisabledChecked: Story = {
    ...Default,
    args: {
        disabled: true,
        currentChecked: true
    }
}

export const WithCustomLabel: Story = {
    ...Default,
    args: {
        ariaLabel: "Switch between dark and light mode"
    }
}

export const Interactive: Story = {
    ...Default,
    args: {
        onChange: (isChecked) => {
            console.log(`Switch toggled to: ${isChecked ? 'Dark' : 'Light'} theme`);
            alert(`Theme switched to: ${isChecked ? 'Dark' : 'Light'}`);
        }
    }
}
