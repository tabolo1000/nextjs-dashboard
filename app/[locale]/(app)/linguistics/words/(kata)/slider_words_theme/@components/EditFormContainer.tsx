"use client";

import React from "react";
import {motion, Variants} from "framer-motion";
import {CreateWordForm} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/сreateWordForm/CreateWordForm";
import {ErrorBoundary} from "react-error-boundary";
import {ErrorScreen} from "@/app/[locale]/(app)/@components/ErrorScreen";


/**
 * Edits by double-tapping the word
 * @param animationVariants
 * @constructor
 */
const EditFormContainer: React.FC<EditFormContainerProps> = React.memo(function EditFormContainer({
                                                                            animationVariants,
                                                                        }) {
    return (
        <motion.div
            key="edit-form"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-6 rounded-lg shadow-lg"
        >
            <ErrorBoundary fallback={<ErrorScreen message={{en: "Error", ru: "Ошибка"}} onRetry={() => {
            }}/>}>
                <CreateWordForm />
            </ErrorBoundary>
        </motion.div>
    );
})

export default EditFormContainer;


//-------------------------------Types-----------------------------------------

// Типы для пропсов
interface EditFormContainerProps {
    animationVariants: Variants
}