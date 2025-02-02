import * as Yup from "yup";

export const validationSchema = Yup.object({
    title: Yup.string().required("Обязательное поле"),
    morpheme: Yup.object({
        prefix: Yup.array().of(Yup.string().optional()),
        root: Yup.array()
            .of(Yup.string().required("Введите корень"))
            .min(1, "Укажите хотя бы один корень"),
        suffix: Yup.array().of(Yup.string().optional()),
        end: Yup.array().of(Yup.string().optional()),
    }),
    description: Yup.string().required("Введите описание"),
    icon: Yup.string().required("Введите иконку"),
    quote: Yup.string().required("Введите цитату"),
    annotation: Yup.string().required("Введите аннотацию"),
    joke: Yup.string().required("Введите шутку"),
    derivatives: Yup.array()
        .of(Yup.string().required("Введите производное"))
        .min(1, "Укажите хотя бы одно производное"),
    collections: Yup.array()
        .of(Yup.string().required("Введите коллекцию"))
        .required("Введите хотя бы одну коллекцию")
});

