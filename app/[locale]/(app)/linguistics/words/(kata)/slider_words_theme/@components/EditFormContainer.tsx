"use client";

import React from "react";
import {motion, Variants} from "framer-motion";
import { CodexForm } from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/codexFrom/CodexForm";


/**
 * Edits by double-tapping the word
 * @param editingFrom
 * @param isEditingForm
 * @param animationVariants
 * @constructor
 */
const EditFormContainer: React.FC<EditFormContainerProps> = ({
                                                                 editingFrom,
                                                                 isEditingForm,
                                                                 animationVariants,
                                                             }) => {
    return (
        <motion.div
            key="edit-form"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-6 rounded-lg shadow-lg"
        >
            <CodexForm editingFrom={editingFrom} isEditingForm={isEditingForm} />
        </motion.div>
    );
};

export default EditFormContainer;


//-------------------------------Types-----------------------------------------

// Типы для пропсов
interface EditFormContainerProps {
    editingFrom: boolean;
    isEditingForm (active:  boolean): void;
    animationVariants: Variants
}