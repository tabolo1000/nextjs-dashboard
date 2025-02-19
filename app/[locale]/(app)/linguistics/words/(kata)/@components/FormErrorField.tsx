import {FieldMetaProps} from "formik";
import React from "react";

type FormErrorFieldProps = {
    meta: FieldMetaProps<string>;
}
/**
 * Form field error handling
 * @param meta - Meta field data
 * @constructor
 */
const FormErrorField = ({meta}: FormErrorFieldProps) => {
    return (
        meta.touched && !!meta.error && (
            <div className="absolute right-1 -bottom-14 text-error indent-4 p-2">
                {meta.error}
            </div>
        )
    )

}

export default FormErrorField;