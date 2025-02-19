import {Box} from "@mui/material";
import React from "react";
import {
    DerivativesText
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/derivatives/assets/derivativesText";
import {usePathname} from "next/navigation";
import {
    DynamicArrayField
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/dynamicArrayFields/DynamicArrayField";

/**
 * Adds derived words to the array and populates via json automatically.
 * @param values - All values in a form with a type withoutWordID
 * @constructor
 */
const Derivatives = () => {
    const lan = usePathname().split("/")[1]
    const text = DerivativesText(lan);
    return (
        <Box mb={3}>
            <DynamicArrayField
                key={"derivatives"}
                name={"derivatives"}
                label={text.title}
                placeholder={text.placeholder}
                minItems={1}
                allowMultiline={true}
            />
        </Box>
    );
};


export default Derivatives;



