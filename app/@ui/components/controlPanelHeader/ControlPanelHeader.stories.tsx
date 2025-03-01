import React from "react";
import ControlPanelHeader from "@/app/@ui/components/controlPanelHeader/ControlPanelHeader";
import {Meta, StoryFn, StoryObj} from "@storybook/react";
import {Language} from "@/app/[locale]/(app)/assets/lang/Layout.ru";


/**
 * Sample language data for the stories
 */
const languages: Array<Language> = [
    {
        locale: "en",
        content: "English",
    },
    {
        locale: "ru",
        content: "Русский",
    },
];

/**
 * Wrapper/decorator for all components
 */
const Wrapper = (Story: StoryFn) => (
        <div className="p-4 border border-gray-200 rounded-lg bg-white dark:bg-gray-800 max-w-md">
            <Story />
        </div>
    )

const meta: Meta<typeof ControlPanelHeader> = {
    title: "Components/ControlPanelHeader",
    component: ControlPanelHeader,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A header component containing language switcher, theme toggle and user login controls.'
            }
        }
    },
    args: {
        languages: languages.slice(0, 2) // Using only English and Russian
    },
    argTypes: {
        languages: {
            description: "Array of language options to display in the language switcher. Each language contains a locale code and display content",
            control: "object",
            table: {
                type: { summary: "Array<Language>" }
            }
        },
        className: {
            description: "Optional custom class name for the container",
            control: "text",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" }
            }
        }
    },
    decorators: [Wrapper]
};

export default meta;

type ControlPanelHeaderStory = StoryObj<typeof ControlPanelHeader>;

/**
 * Default story showing the control panel header with standard settings
 */
export const Default: ControlPanelHeaderStory = {};

/**
 * Story with custom styling applied
 */
export const WithCustomStyling: ControlPanelHeaderStory = {
    args: {
        className: "flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 p-2 rounded-md"
    }
};

/**
 * Story showing the component in a responsive layout
 */
export const ResponsiveLayout: ControlPanelHeaderStory = {
    args: {
        languages: languages.slice(0, 2)
    },
    decorators: [
        (Story) => (
            <div className="flex flex-col space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg bg-white dark:bg-gray-800 w-full">
                    <p className="mb-2 text-sm text-gray-500">Desktop view:</p>
                    <Story />
                </div>
                <div className="p-4 border border-gray-200 rounded-lg bg-white dark:bg-gray-800 w-64">
                    <p className="mb-2 text-sm text-gray-500">Mobile view:</p>
                    <Story />
                </div>
            </div>
        )
    ]
};