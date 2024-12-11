'use client'

import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-full flex items-center justify-center  from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md transform transition duration-1000 hover:scale-105">
        <h2 className="text-3xl font-extrabold mb-6 text-center">
          {isLogin ? "Добро пожаловать!" : "Создайте аккаунт"}
        </h2>
        <form>
          <div className="mb-6">
            <label
              className="block text-sm font-semibold mb-2 tracking-wide"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Введите ваш email"
              className="w-full p-3 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-semibold mb-2 tracking-wide"
              htmlFor="password"
            >
              Пароль
            </label>
            <input
              type="password"
              id="password"
              placeholder="Введите ваш пароль"
              className="w-full p-3 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold text-lg tracking-wide shadow-md transition hover:shadow-lg"
          >
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-400">
          {isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
          <button
            onClick={toggleMode}
            className="text-blue-400 hover:text-blue-500 underline transition"
          >
            {isLogin ? "Регистрация" : "Вход"}
          </button>
        </p>
        <div className="mt-8 flex items-center justify-center">
          <span className="text-gray-500">или</span>
        </div>
        <div className="mt-4 flex gap-4 justify-center">
          <button
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 p-3 rounded-full shadow-md transition"
            title="Войти через Google"
          >
            <svg
              className="w-5 h-5 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 11.5v2.8h7.9c-.3 2-2.4 5.9-7.9 5.9-4.8 0-8.7-3.9-8.7-8.7S7.2 3.8 12 3.8c2.6 0 4.4 1.1 5.4 2.1l2.6-2.6C17.8 1.4 15.2.5 12 .5 5.7.5.8 5.4.8 11.7S5.7 22.9 12 22.9c6.5 0 10.3-4.6 10.3-10.8 0-.7-.1-1.5-.3-2.1H12z" />
            </svg>
          </button>
          <button
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 p-3 rounded-full shadow-md transition"
            title="Войти через GitHub"
          >
            <svg
              className="w-5 h-5 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.3 9.2 8 10.7.6.1.8-.3.8-.6V19c-3.3.7-4-1.5-4-1.5-.6-1.5-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1 .1 1.6-.7 1.8-1.1.2-.8.5-1.3.9-1.6-2.7-.3-5.6-1.4-5.6-6.2 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.7.1-3.5 0 0 1-.3 3.4 1.3 1-.3 2-.4 3-.4s2 0 3 .4c2.4-1.6 3.4-1.3 3.4-1.3.7 1.8.2 3.2.1 3.5.8.9 1.3 2.1 1.3 3.5 0 4.8-2.9 5.9-5.6 6.2.5.4.9 1.2.9 2.4v3.6c0 .3.2.7.8.6 4.8-1.5 8-5.7 8-10.7C23.2 5.4 18.3.5 12 .5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;