import {
    DynamicArrayField
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/DynamicArrayField";
import {Box} from "@mui/material";
import React, {useMemo} from "react";


const MorphemeFields = () => {
    const morphemeFields = useMemo(
        () => [
            {name: "morpheme.prefix", label: "Префиксы", placeholder: "Введите префикс"},
            {name: "morpheme.root", label: "Корни", placeholder: "Введите корень"},
            {name: "morpheme.suffix", label: "Суффиксы", placeholder: "Введите суффикс"},
            {name: "morpheme.end", label: "Окончания", placeholder: "Введите окончание"},
        ],
        []
    );
    return (
        <Box className="border-2 border-gray-200 dark:border-gray-700 p-2 my-2">
            {morphemeFields.map((field) => (
                <DynamicArrayField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    minItems={1}
                    allowMultiline={true}
                />
            ))}
        </Box>
    )
}

export default MorphemeFields;