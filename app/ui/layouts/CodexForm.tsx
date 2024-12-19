import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Определяем типы данных
interface CodexFormValues {
  title: string;
  morpheme: {
    root: string[];
  };
  description: string;
  icon: string;
  quote: string;
  annotation: string;
  joke: string;
  derivatives: string[];
}

// Начальные значения формы
const initialValues: CodexFormValues = {
  title: "",
  morpheme: {
    root: [""],
  },
  description: "",
  icon: "",
  quote: "",
  annotation: "",
  joke: "",
  derivatives: [""],
};

// Валидация с использованием Yup
const validationSchema = Yup.object({
  title: Yup.string().required("Это поле обязательно"),
  morpheme: Yup.object({
    root: Yup.array().of(Yup.string().required("Введите корень")),
  }),
  description: Yup.string().required("Введите описание"),
  icon: Yup.string().required("Введите иконку"),
  quote: Yup.string().required("Введите цитату"),
  annotation: Yup.string().required("Введите аннотацию"),
  joke: Yup.string().required("Введите шутку"),
  derivatives: Yup.array().of(Yup.string().required("Введите производное")),
});

const CodexForm: React.FC = () => {
  const handleSubmit = async (values: CodexFormValues) => {
    try {
      // Отправка данных на сервер
      const response = await axios.post("/api/codex", values);
      console.log("Успешно отправлено:", response.data);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Добавить новую запись</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            {/* Заголовок */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium">
                Заголовок
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="w-full mt-1 p-2 border rounded"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Корень */}
            <div className="mb-4">
              <label htmlFor="morpheme.root" className="block text-sm font-medium">
                Корни
              </label>
              {values.morpheme.root.map((_, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <Field
                    type="text"
                    name={`morpheme.root[${index}]`}
                    className="w-full p-2 border rounded"
                  />
                  <button
                    type="button"
                    className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
                    onClick={() => {
                      const newRoots = values.morpheme.root.filter(
                        (_, i) => i !== index
                      );
                      setFieldValue("morpheme.root", newRoots);
                    }}
                  >
                    Удалить
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() =>
                  setFieldValue("morpheme.root", [...values.morpheme.root, ""])
                }
              >
                Добавить корень
              </button>
              <ErrorMessage
                name="morpheme.root"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Описание */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium">
                Описание
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                className="w-full mt-1 p-2 border rounded"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Иконка */}
            <div className="mb-4">
              <label htmlFor="icon" className="block text-sm font-medium">
                Иконка
              </label>
              <Field
                type="text"
                id="icon"
                name="icon"
                className="w-full mt-1 p-2 border rounded"
              />
              <ErrorMessage
                name="icon"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Цитата */}
            <div className="mb-4">
              <label htmlFor="quote" className="block text-sm font-medium">
                Цитата
              </label>
              <Field
                type="text"
                id="quote"
                name="quote"
                className="w-full mt-1 p-2 border rounded"
              />
              <ErrorMessage
                name="quote"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Аннотация */}
            <div className="mb-4">
              <label htmlFor="annotation" className="block text-sm font-medium">
                Аннотация
              </label>
              <Field
                as="textarea"
                id="annotation"
                name="annotation"
                className="w-full mt-1 p-2 border rounded"
              />
              <ErrorMessage
                name="annotation"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Шутка */}
            <div className="mb-4">
              <label htmlFor="joke" className="block text-sm font-medium">
                Шутка
              </label>
              <Field
                type="text"
                id="joke"
                name="joke"
                className="w-full mt-1 p-2 border rounded"
              />
              <ErrorMessage
                name="joke"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Производные */}
            <div className="mb-4">
              <label htmlFor="derivatives" className="block text-sm font-medium">
                Производные
              </label>
              {values.derivatives.map((_, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <Field
                    type="text"
                    name={`derivatives[${index}]`}
                    className="w-full p-2 border rounded"
                  />
                  <button
                    type="button"
                    className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
                    onClick={() => {
                      const newDerivatives = values.derivatives.filter(
                        (_, i) => i !== index
                      );
                      setFieldValue("derivatives", newDerivatives);
                    }}
                  >
                    Удалить
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() =>
                  setFieldValue("derivatives", [...values.derivatives, ""])
                }
              >
                Добавить производное
              </button>
              <ErrorMessage
                name="derivatives"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              className="w-full text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
            >
              Добавить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CodexForm;