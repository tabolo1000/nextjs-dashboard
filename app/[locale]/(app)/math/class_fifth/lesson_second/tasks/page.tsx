"use client"

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Тип операции
enum Operation {
    Add = '+',
    Subtract = '-',
    Multiply = '*',
    Divide = '/',
}

// Тип задачи для базовых операций
interface BasicOperationsTask {
    question: string;
    correctAnswer: number;
}

// Интерфейс для счета пользователей
interface Score {
    correct: number;
    incorrect: number;
    finished: boolean;
}

// Генерация задачи (заглушка, замените на свою функцию)
const generateTask = {
    basicOperations: (operation: Operation): BasicOperationsTask => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        let question = '';
        let correctAnswer = 0;

        switch (operation) {
            case Operation.Add:
                question = `${num1} + ${num2}`;
                correctAnswer = num1 + num2;
                break;
            case Operation.Subtract:
                question = `${num1} - ${num2}`;
                correctAnswer = num1 - num2;
                break;
            case Operation.Multiply:
                question = `${num1} * ${num2}`;
                correctAnswer = num1 * num2;
                break;
            case Operation.Divide:
                question = `${num1} / ${num2}`;
                correctAnswer = parseFloat((num1 / num2).toFixed(2)); // Округляем до 2 знаков
                break;
        }

        return { question, correctAnswer };
    },
};

const NaturalNumbersTask: React.FC<{ operation?: Operation }> = ({ operation = Operation.Add }) => {
    // Состояния для задачи, сообщения и счета
    const [task, setTask] = useState<BasicOperationsTask>(generateTask.basicOperations(operation));
    const [message, setMessage] = useState<string>('');
    const [score, setScore] = useState<Score>({ correct: 0, incorrect: 0, finished: false });

    // Завершение задачи при достижении 10 правильных ответов
    if (score.correct >= 20 && !score.finished) {
        setScore({ ...score, finished: true });
    }

    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-[75vh] bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center"
        >
            {/* Проверяем завершение задачи */}
            {score.finished ? (
                <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                    🎉 Миссия завершена! Отличная работа!
                </h2>
            ) : (
                <>
                    <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                        Реши задачу
                    </h2>
                    <p className="text-lg mb-6">
                        <strong className="dark:text-white">{`${task.question} = x`}</strong>
                    </p>
                    <Formik
                        initialValues={{ answer: '' }}
                        validate={(values) => {
                            const errors: { answer?: string } = {};
                            if (!values.answer) {
                                errors.answer = 'Введите ответ!';
                            } else if (isNaN(Number(values.answer))) {
                                errors.answer = 'Ответ должен быть числом!';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { resetForm }) => {
                            const userAnswer = parseFloat(values.answer);
                            if (userAnswer === task.correctAnswer) {
                                setScore({
                                    ...score,
                                    correct: score.correct + 1,
                                });
                                setMessage('✅ Правильно! Молодец!');
                            } else {
                                setScore({
                                    ...score,
                                    incorrect: score.incorrect + 1,
                                });
                                setMessage(`❌ Неправильно. Правильный ответ: ${task.correctAnswer}`);
                            }
                            resetForm();
                            setTask(generateTask.basicOperations(operation));
                        }}
                    >
                        {() => (
                            <Form className="w-full max-w-md mx-auto">
                                {/* Счет */}
                                <div className="absolute right-4 top-4 dark:text-red-500 text-blue-600 text-2xl font-bold">
                                    {`${score.correct} / ${score.incorrect}`}
                                </div>

                                {/* Поле ввода */}
                                <div className="mb-4">
                                    <Field
                                        type="text"
                                        name="answer"
                                        placeholder="Введите ответ"
                                        className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage
                                        name="answer"
                                        component="div"
                                        className="text-red-500 text-sm mt-2"
                                    />
                                </div>

                                {/* Кнопка отправки */}
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium rounded transition duration-200"
                                >
                                    Проверить
                                </button>
                            </Form>
                        )}
                    </Formik>

                    {/* Сообщение об успехе или ошибке */}
                    {message && (
                        <p
                            className={`mt-6 text-lg font-semibold ${
                                message.includes('Правильно') ? 'text-green-500' : 'text-red-500'
                            }`}
                        >
                            {message}
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default NaturalNumbersTask;