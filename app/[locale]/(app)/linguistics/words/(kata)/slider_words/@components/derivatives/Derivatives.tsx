import {Box, IconButton, Input, Typography} from "@mui/material";
import {Field, FieldArray, FieldArrayRenderProps, FieldProps} from "formik";
import {AddBoxOutlined, Delete} from "@mui/icons-material";
import {Base_button} from "@/app/ui/math/components/Base_button";
import React from "react";
import {WordWithoutId} from "@/app/[locale]/(app)/linguistics/words/(kata)/words.type";
import {
    DerivativesText
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/derivatives/assets/derivativesText";
import {usePathname} from "next/navigation";
import FormErrorField from "@/app/[locale]/(app)/linguistics/words/(kata)/@components/FormErrorField";

type DerivativesProps = {
    values: WordWithoutId
}
/**
 * Adds derived words to the array and populates via json automatically.
 * @param values - All values in a form with a type withoutWordID
 * @constructor
 */
const Derivatives = ({values}: DerivativesProps) => {
    const lan = usePathname().split("/")[1]
    const text = DerivativesText(lan);
    return (
        <Box mb={3}>
            <Typography variant="subtitle1" sx={{paddingLeft: "20px", paddingY: "5px"}}>
                {text.title}
            </Typography>
            <FieldArray name="derivatives">
                {/*
                    Creates fields automatically by JSON or other methods.
                    Derived from values.derivatives elements.
                */}
                {({remove, push}: FieldArrayRenderProps) => (
                    <>
                        {values.derivatives.map((_, index) => (
                            <Box display="flex" alignItems="center" key={index} mb={2}>
                                {/*Creating a field with all parameters from a form*/}
                                <Field name={`derivatives[${index}]`}>
                                    {(el: FieldProps) => (
                                        <div className="relative w-full">
                                            <Input
                                                {...el.field}
                                                fullWidth
                                                placeholder={text.placeholder}
                                                className="paragraph_base"
                                                multiline
                                            />
                                            <FormErrorField meta={el.meta}/>
                                        </div>
                                    )}
                                </Field>
                                {/*Delete field button*/}
                                <IconButton
                                    onClick={() => remove(index)}
                                    disabled={values.derivatives.length === 1}
                                    color="error"
                                >
                                    <Delete/>
                                </IconButton>
                            </Box>
                        ))}
                        {/*Adding a field*/}
                        <Base_button classStyle="add_button" onClick={() => push("")}>
                            <AddBoxOutlined className="text-3xl"/>
                            {text.addButton}
                        </Base_button>
                    </>
                )}
            </FieldArray>
        </Box>
    );
};


export default Derivatives;



