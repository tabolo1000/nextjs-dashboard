import React, { useState } from "react";
import AuthForm from "./page";

export default {
  title: "Components/AuthForm",
  component: AuthForm,
  argTypes: {
    isLogin: {
      control: "boolean", // Контроль переключения между "Вход" и "Регистрация"
      defaultValue: true,
    },
  },
};

const Template = (args: {isLogin: boolean, }) => {
  const [isLogin, setIsLogin] = useState(args.isLogin);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <AuthForm {...args} isLogin={isLogin} onToggleMode={() => setIsLogin(!isLogin)} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  isLogin: true, // Начальное состояние: "Вход"
};