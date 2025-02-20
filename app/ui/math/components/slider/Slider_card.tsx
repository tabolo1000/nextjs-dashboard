import React, { useState} from "react";
import { Box, Button, CardContent, Typography } from "@mui/material";
import { Morpheme } from "@/app/ui/math/components/Morpheme";
import { AddBoxOutlined, ChangeCircleOutlined, DeleteOutline } from "@mui/icons-material";
import {EditableField} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/EditableField";
import ConfirmationModal from "@/app/ui/math/components/ConfirmationModal";
import {WordCarousel} from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";
import {UpdateField, Word} from "@/app/[locale]/(app)/linguistics/words/(kata)/words.type";
import {useApolloClient} from "@apollo/client";
import {WordFragment, WordFragmentDoc} from "@/app/@graphql/@generated/graphql";


export function Slider_card({
                                _id,
                                handleWordChange,
                                handleWordDelete,
                                isEditingForm,
                                morpheme,
                                icon,
                            }: WordCarousel & {
    handleWordChange: <T extends keyof Word>(value: UpdateField<T>) => void;
    handleWordDelete: (id: string) => void;
    isEditingForm: (active: boolean) => void;
}) {
    const [openModal, setOpenModal] = useState(false);
    const client = useApolloClient();
    const editableFields: WordFragment | null = client.readFragment({
        id: `Word:${_id}`,
        fragment: WordFragmentDoc,
        fragmentName: "Word"
    });



    const handleFieldChange = <T extends keyof Word>(fieldName: T, value: Word[T]) => {
        try {
            const updateData: UpdateField<T> = {
                _id,
                [fieldName]: value
            } as UpdateField<T>;

            handleWordChange<T>(updateData);
        }
        catch (error){
            if(error instanceof Error){
                console.log(error.message);
            }

        }

    };

    const handleArrayFieldChange = (index: number, value: string) => {
        const updatedArray = [...(editableFields?.derivatives || [])];
        updatedArray[index] = value;

        handleWordChange<'derivatives'>({
            _id,
            derivatives: updatedArray,
        });
    };

    const handleAddFieldChange = (value: string) => {
        if (value.length > 6) {
            const updatedArray = [...(editableFields?.collections || [])];
            updatedArray.push(value);

            handleWordChange<'collections'>({
                _id,
                collections: updatedArray,
            });
        }
    };


    const handleDelete = () => {
        console.log("Word deleted");
        handleWordDelete(_id)
        setOpenModal(false);
    };

    const handleCancel = () => {
        console.log("Deletion cancelled");
        setOpenModal(false);
    };


    const [u, s] = useState("")


    return (
        <>
            <Box
                className="dark:border-gray-600 relative p-6 border-gray-200 rounded-lg border-2 shadow-lg"
            >
                <ConfirmationModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    title="Вы действительно хотите удалить слово?"
                    description="Это действие необратимо. Пожалуйста, подтвердите удаление."
                    onConfirm={handleDelete}
                    onCancel={handleCancel}
                />
                <CardContent className="space-y-4">
                    <div className="flex flex-row justify-end items-center gap-1 w-full">
                        <div className="border border-gray-400 p-2 rounded-lg bg-blue-50 dark:bg-opacity-10">
                            <Button className="text-green-600" onClick={() => isEditingForm(true)}>
                                <AddBoxOutlined/> Добавить
                            </Button>
                            <Button className="text-amber-600" onClick={() => "handleWordDelete(_id)"}>
                                <ChangeCircleOutlined/> Изменить
                            </Button>
                            <Button className="text-red-600" onClick={() => {
                                setOpenModal(true)
                            }}>
                                <DeleteOutline/> Удалить
                            </Button>
                        </div>
                    </div>

                    {/* Заголовок */}
                    <Typography variant="h5" component="div"
                                className="indent-4 header_h3 flex justify-right align-middle">
                        {icon}
                        <EditableField
                            className="ml-2"
                            value={editableFields?.title || ""}
                            onSubmit={(value) => handleFieldChange("title", value)}
                            placeholder="Введите заголовок"
                        />
                    </Typography>

                    <Morpheme {...morpheme} />

                    {/* Описание */}
                    <EditableField
                        label="Описание"
                        value={editableFields?.description || ""}
                        onSubmit={(value) => handleFieldChange("description", value)}
                        placeholder="Введите описание"
                        multiline
                        className="paragraph indent-4"
                    />

                    {/* Цитата */}
                    <EditableField
                        label="Цитата"
                        value={editableFields?.quote || ""}
                        onSubmit={(value) => handleFieldChange("quote", value)}
                        placeholder="Введите цитату"
                        multiline
                        className="paragraph indent-4 font-semibold italic"
                    />

                    {/* Аннотация */}
                    <EditableField
                        label="Аннотация"
                        value={editableFields?.annotation || ""}
                        onSubmit={(value) => handleFieldChange("annotation", value)}
                        placeholder="Введите аннотацию"
                        multiline
                        className="annotation_card"
                    />

                    {/* Производные */}
                    <div className="paragraph_base">
                        <span className="font-bold text-purple-600">Производные слова:</span>
                        {editableFields?.derivatives &&
                            editableFields?.derivatives.map((e: string, i: number) => (
                                <EditableField
                                    key={i}
                                    value={e}
                                    onSubmit={(value) => handleArrayFieldChange(i, value)}
                                    placeholder={`Производное ${i + 1}`}
                                    className="italic"
                                />
                            ))}
                    </div>

                    {/* Шутка */}
                    <EditableField
                        label="Joke"
                        value={editableFields?.joke || ""}
                        onSubmit={(value) => handleFieldChange("joke", value)}
                        placeholder="Введите шутку"
                        multiline
                        className="annotation_card"
                    />


                    <div className="paragraph_base">
                        <span className="font-bold text-purple-600">Коллекции:</span>
                        <input
                            type="text"

                            onChange={(e)=> s(e.currentTarget.value)}
                            onBlur={()=> handleAddFieldChange(u)}
                        />
                        {editableFields?.collections &&
                            editableFields?.collections.map((e: string, i: number) => (
                                <EditableField
                                    key={i}
                                    value={e}
                                    onSubmit={(value) => handleArrayFieldChange(i, value)}
                                    placeholder={`Коллекции ${i + 1}`}
                                    className="italic"
                                />
                            ))}
                    </div>

                </CardContent>
            </Box>
        </>
    );
}