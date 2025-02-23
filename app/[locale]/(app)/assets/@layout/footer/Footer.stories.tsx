import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

// Метаданные для Storybook
const meta: Meta<typeof Footer> = {
    title: 'Layout/Footer', // Название группы историй
    component: Footer, // Компонент, который тестируем
    tags: ['autodocs'], // Автоматическая генерация документации
    argTypes: { // Описание как должен отображаться компонент на панели инструментов
        title: {
            control: 'color', // тип поля контроля text, boolean, number, select, radio, color
            description: 'Текст или React-элемент для отображения в футере', // поле Name
            name: 'title', // поле Name
        },
    },
};

export default meta;

type Story = StoryObj<typeof Footer>;

// Footer with default text
export const Default: Story = {
    args: {
        title: "© 2024 Your Company. All rights reserved.", // Текст по умолчанию
    },
};

// Footer with custom text
export const WithCustomText: Story = {
    args: {
        title: "© 2024 My Awesome Company. All rights reserved.", // Кастомный текст
    },
};

// Footer with React element as a title
export const WithReactNode: Story = {
    args: {
        title: (
            <div>
                <span className="font-bold">© 2024 My Awesome Company.</span>{' '}
                <div>
                    <span className="italic">All rights reserved.</span>
                </div>
            </div>
        ),
    },
};

// Footer with long text
export const WithLongText: Story = {
    args: {
        title: "© 2024 My Awesome Company. All rights reserved. This is a very long text to test how the footer handles it.",
    },
};