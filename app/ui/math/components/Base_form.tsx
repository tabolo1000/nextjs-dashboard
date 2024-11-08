"use client"


import {TextField} from "@mui/material";
import {Form, Formik} from "formik";
import {Base_button} from "@/app/ui/math/components/Base_button";
import Split_line from "@/app/ui/math/components/audio_player/Split_line";
import * as Yup from "yup";


export const Base_form = ({validate, nextExercise}: {validate: object, nextExercise?: ()=>void}) => {


    const validationSchema = Yup.object({
        ...validate
    });

    /* const handleSubmit = useCallback((e: React.FormEvent) => {
         e.preventDefault();
         const number = parseInt(inputValue, 10);
         if (!isNaN(number)) {
             setMessage(`Отлично! Вы нашли ${number} предметов.`);
         } else {
             setMessage('Пожалуйста, введите число.');
         }
     },[inputValue])*/

    /* -------------------- */
   /* const validate = (values: {firstName: string, lastName: string, email: string}) => {
        const errors: {firstName: string, lastName: string, email: string} = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };*/

    /*const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },

    });*/


    return (
            <div className={"w-full"}>
                <Split_line />
                <Formik
                    initialValues={{ itemCount: "" }}
                    validationSchema = { validationSchema }
                    onSubmit={(values, { resetForm }) => {
                        //  handleSubmit(values);
                        alert("Ok!");
                        if(nextExercise) nextExercise();
                        resetForm(); // Очистка формы после отправки
                    }}
                >
                    {({ errors, touched, handleChange, handleBlur, values }) => (
                        <Form className="flex justify-center place-items-end mt-4 w-full">
                            <TextField
                                multiline
                                maxRows={5}
                                className="w-1/2"
                                id="itemCount"
                                label={(touched.itemCount && Boolean(errors.itemCount)? errors.itemCount : "Введите количество предметов")}
                                name="itemCount"
                                variant="outlined"
                                size="medium"
                                value={values.itemCount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.itemCount && Boolean(errors.itemCount)}
                                ///helperText={touched.itemCount && errors.itemCount}
                            />
                            <Base_button
                                type="submit"
                                name="Проверить!"
                                classStyle="w-1/3 h-14 ml-4 button_to inline-block  bg-blue-500 hover:bg-blue-700 md-5"
                            />
                        </Form>
                    )}

                    {/*{(!message && +message > 0)
                ? <p className="mt-4 text-3xl text-green-600">{message}</p>
                : <p className="mt-4 text-3xl text-green-500">{message}</p>}*/}
                    {/*<Audio_button path={"/math/class_fifth/lesson_first/natural_numbers/hunter_1.1.1"}/>*/}

                </Formik>
            </div>
    );
}

