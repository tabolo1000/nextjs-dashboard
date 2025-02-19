import React from "react";
import {Field, FieldArray, FieldProps} from "formik";
import {Box, IconButton, Input, Typography} from "@mui/material";
import {AddBoxOutlined, Delete} from "@mui/icons-material";
import {Base_button} from "@/app/ui/math/components/Base_button";
import FormErrorField from "@/app/[locale]/(app)/linguistics/words/(kata)/@components/FormErrorField";
import {usePathname} from "next/navigation";
import {
    dynamicArrayFieldText
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/dynamicArrayFields/assets/dynamicArrayFieldText";
import {getNestedValue} from "@/app/lib/utils";

interface DynamicArrayFieldProps {
    name: string;
    label: string;
    placeholder: string;
    minItems?: number;
    allowMultiline?: boolean;
}

/**
 * A field for each morpheme
 * @param name - Binding name to form to get data dynamically
 * @param label - Name of morpheme
 * @param placeholder - Placeholder
 * @param minItems - Minimum number of items of the given name
 * @param allowMultiline - How many rows of input fields need to be displayed
 * @constructor
 */
export const DynamicArrayField: React.FC<DynamicArrayFieldProps> = ({
                                                                        name, // derivatives
                                                                        label,
                                                                        placeholder,
                                                                        minItems = 1,
                                                                        allowMultiline = false,
                                                                    }) => {

    const lang = usePathname().split("/")[1]
    const langText = dynamicArrayFieldText(lang)
    return (
        <Box mb={3}>
            {/*Label Fields*/}
            <Typography variant="subtitle1" sx={{paddingLeft: "20px", paddingY: "5px"}}>{label}:</Typography>
            {/*
                Number of fields in the component
                example: morpheme.root // isArray(morpheme.root) === true
            */}
            <FieldArray name={name}>
                {({remove, push, form}) => {

                    let values = getNestedValue(form.values, name)
                    if (Array.isArray(values)) values = (values[0] || values[0] === "") ? values : [""];
                    if (typeof values === "string") values = [values];

                    return (
                        <>
                            {
                                values.map((_: string, index: number) => {
                                    const d = (!Array.isArray(form.values[name])) ? `${name}` :  `${name}[${index}]`
                                    return (
                                        <Box sx={{display: "flex", position: "relative"}} alignItems="center" key={index}
                                             mb={2}>
                                            <Field
                                                name={d} // morpheme.root[0] === "" `${name}[${index}]`
                                            >
                                                {(el: FieldProps) => (
                                                    <>
                                                        <Input
                                                            className={"paragraph_base"}
                                                            {...el.field}
                                                            fullWidth
                                                            placeholder={`${placeholder} ${index + 1}`}
                                                            multiline={allowMultiline}
                                                            rows={minItems}
                                                        />
                                                        <FormErrorField meta={el.meta}/>
                                                    </>
                                                )}
                                            </Field>

                                            <IconButton
                                                onClick={() => remove(index)}
                                                disabled={values.length <= minItems}
                                                aria-label={langText.deleteButton}
                                                color="error"
                                            >
                                                <Delete/>
                                            </IconButton>
                                        </Box>
                                    )}
                                )}
                            <Base_button
                                classStyle={"add_button"}
                                onClick={() => push("")}
                            >
                                <AddBoxOutlined className="text-3xl"/>
                                {langText.addButton} {" " + label.toLowerCase()}
                            </Base_button>

                        </>
                    );
                }}
            </FieldArray>
        </Box>
    );
};