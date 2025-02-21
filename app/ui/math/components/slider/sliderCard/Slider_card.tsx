import React from "react";
import {Box, Button, CardContent, Typography} from "@mui/material";
import {Morpheme} from "@/app/ui/math/components/Morpheme";
import {AddBoxOutlined, ChangeCircleOutlined, DeleteOutline} from "@mui/icons-material";
import {EditableField} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/EditableField";
import ConfirmationModal from "@/app/ui/math/components/ConfirmationModal";
import {WordCarousel} from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";
import {UpdateField} from "@/app/[locale]/(app)/linguistics/words/(kata)/words.type";
import {WordFragment} from "@/app/@graphql/@generated/graphql";
import useSlider_card from "@/app/ui/math/components/slider/sliderCard/useSlider_card";
import {useSliderHandlers} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/sliderStore";


export function Slider_card({
                                _id,
                                handleWordChange,
                                handleWordDelete,
                                morpheme,
                                icon,
                            }: WordCarousel & {
    handleWordChange: <T extends keyof WordFragment>(value: UpdateField<T>) => void;
    handleWordDelete: (id: string) => void;
}) {
    const {setCurrentWindow} = useSliderHandlers()
    const {
        openModal,
        inputValue,
        handleChange,
        handleCancel,
        handleDelete,
        handleAddFieldChange,
        setInputValue,
        setOpenModal,
        editableFields,
    } = useSlider_card({
        _id,
        handleWordChange,
        handleWordDelete,
    })

    return (
        <>
            <Box className="dark:border-gray-600 relative p-6 border-gray-200 rounded-lg border-2 shadow-lg">
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
                            <Button className="text-green-600" onClick={() => setCurrentWindow("add_word")}>
                                <AddBoxOutlined/> Добавить
                            </Button>
                            <Button className="text-amber-600" onClick={() => "handleWordDelete(_id)"}>
                                <ChangeCircleOutlined/> Изменить
                            </Button>
                            <Button className="text-red-600" onClick={() => setOpenModal(true)}>
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
                            onSubmit={(value) => handleChange("title", value)}
                            placeholder="Введите заголовок"
                        />
                    </Typography>

                    <Morpheme {...morpheme} />

                    {/* Описание */}
                    <EditableField
                        label="Описание"
                        value={editableFields?.description || ""}
                        onSubmit={(value) => handleChange("description", value)}
                        placeholder="Введите описание"
                        multiline
                        className="paragraph indent-4"
                    />

                    {/* Цитата */}
                    <EditableField
                        label="Цитата"
                        value={editableFields?.quote || ""}
                        onSubmit={(value) => handleChange("quote", value)}
                        placeholder="Введите цитату"
                        multiline
                        className="paragraph indent-4 font-semibold italic"
                    />

                    {/* Аннотация */}
                    <EditableField
                        label="Аннотация"
                        value={editableFields?.annotation || ""}
                        onSubmit={(value) => handleChange("annotation", value)}
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
                                    onSubmit={(value) => handleChange("derivatives", value, i)}
                                    placeholder={`Производное ${i + 1}`}
                                    className="italic"
                                />
                            ))}
                    </div>

                    {/* Шутка */}
                    <EditableField
                        label="Joke"
                        value={editableFields?.joke || ""}
                        onSubmit={(value) => handleChange("joke", value)}
                        placeholder="Введите шутку"
                        multiline
                        className="annotation_card"
                    />

                    {/* Коллекции */}
                    <div className="paragraph_base">
                        <span className="font-bold text-purple-600">Коллекции:</span>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.currentTarget.value)}
                            onBlur={() => handleAddFieldChange(inputValue, "collections")}
                        />
                        {editableFields?.collections &&
                            editableFields?.collections.map((e: string, i: number) => (
                                <EditableField
                                    key={i}
                                    value={e}
                                    onSubmit={(value) => handleChange("collections", value, i)}
                                    placeholder={`Коллекция ${i + 1}`}
                                    className="italic"
                                />
                            ))}
                    </div>
                </CardContent>
            </Box>
        </>
    );
}