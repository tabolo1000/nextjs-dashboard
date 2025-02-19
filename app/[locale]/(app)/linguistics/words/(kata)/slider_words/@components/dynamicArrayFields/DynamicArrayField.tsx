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
                                                                        name,
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
                    let values = form.values.morpheme[name.split(".")[1]];
                    values = (values[0] || values[0]) === "" ? values : [""]
                    return (
                        <>
                            {
                                values.map((_: string, index: number) => (
                                        <Box sx={{display: "flex"}} alignItems="center" key={index} mb={2}>
                                            <Field
                                                name={`${name}[${index}]`} // morpheme.root[0] === ""
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
                                    )
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