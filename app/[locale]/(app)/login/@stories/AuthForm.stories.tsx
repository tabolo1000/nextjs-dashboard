import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterContext } from "next-router-mock";
import { localizedAuthFormText } from "@/app/[locale]/(app)/login/@assets/language";
import {store} from "@/app/store";
import AuthForm from "@/app/[locale]/(app)/login/page";

// 🎯 Конфигурация Storybook
const meta: Meta<typeof AuthForm> = {
  title: "Components/AuthForm",
  component: AuthForm,
  decorators: [
    (Story) => {
      const router = createMemoryRouter({
        pathname: "/login",
      });

      return (
          <Provider store={store}>
            <RouterContext.Provider value={router}>
              <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
                <Story />
              </div>
            </RouterContext.Provider>
          </Provider>
      );
    },
  ],
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1a1a1a" },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

// 🌟 Обычное состояние (Вход)
export const Login: Story = {
  render: () => <AuthForm />,
};

// 🌟 Состояние регистрации
export const Register: Story = {
  render: () => {
    const lang = "ru"; // Можно менять язык
    const authFormText = localizedAuthFormText(lang);
    return (
        <Provider store={store}>
          <RouterContext.Provider value={createMemoryRouter({ pathname: "/register" })}>
            <AuthForm />
          </RouterContext.Provider>
        </Provider>
    );
  },
};
