import {useCallback, useState} from "react";
import {useApolloClient} from "@apollo/client";
import {WordFragment, WordFragmentDoc} from "@/app/@graphql/@generated/graphql";
import {UpdateField} from "@/app/[locale]/(app)/linguistics/words/(kata)/words.type";


type useSlider_cardProps = {
    _id: string
    handleWordChange: <T extends keyof WordFragment>(value: UpdateField<T>) => void;
    handleWordDelete: (id: string) => void;
}

const useSlider_card= ({
                            _id,
                            handleWordChange,
                            handleWordDelete,
                        }: useSlider_cardProps) => {
    const [openModal, setOpenModal] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const client = useApolloClient();

    const editableFields: WordFragment | null = client.readFragment({
        id: `Word:${_id}`,
        fragment: WordFragmentDoc,
        fragmentName: "Word",
    });

    const handleChange = useCallback(<T extends keyof WordFragment>(
        fieldName: T,
        value: WordFragment[T] | string,
        index?: number
    ) => {
        try {
            let updatedValue: WordFragment[T] | string;

            if (index !== undefined && Array.isArray(editableFields?.[fieldName])) {
                const updatedArray = [...(editableFields?.[fieldName])];
                updatedArray[index] = value;
                updatedValue = updatedArray as WordFragment[T];
            } else {
                updatedValue = value;
            }

            const updateData: UpdateField<T> = {
                _id,
                [fieldName]: updatedValue,
            } as UpdateField<T>;

            handleWordChange<T>(updateData);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                alert("Произошла ошибка при обновлении поля. Пожалуйста, попробуйте снова.");
            }
        }
    }, [_id, editableFields, handleWordChange]);

    const handleAddFieldChange = useCallback((value: string, fieldName: keyof WordFragment) => {
        if (value.length > 6) {
            const updatedArray: WordFragment[keyof WordFragment] = Array.isArray(editableFields?.[fieldName])
                ? [...editableFields[fieldName]]
                : [];
            updatedArray.push(value);

            handleChange(fieldName, updatedArray);
        }
    }, [editableFields, handleChange]);

    const handleDelete = () => {
        handleWordDelete(_id);
        setOpenModal(false);
    };

    const handleCancel = () => {
        setOpenModal(false);
    };
    return {
        openModal,
        inputValue,
        handleChange,
        handleCancel,
        handleDelete,
        handleAddFieldChange,
        setInputValue,
        setOpenModal,
        editableFields,
    }
}

export default useSlider_card;