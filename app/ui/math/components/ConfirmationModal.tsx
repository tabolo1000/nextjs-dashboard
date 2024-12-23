import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

interface ConfirmationModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
                                                                 open,
                                                                 onClose,
                                                                 title,
                                                                 description,
                                                                 onConfirm,
                                                                 onCancel,
                                                             }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"

        >
            <Box
                className=" dark:bg-gray-800 bg-white text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-lg w-96 mx-auto"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}

            >
                {/* Заголовок */}
                <Typography id="modal-title" variant="h6" className="mb-4 text-center">
                    {title}
                </Typography>

                {/* Описание */}
                <Typography
                    id="modal-description"
                    className="mb-6 text-center text-sm"
                >
                    {description}
                </Typography>

                {/* Кнопки */}
                <div className="flex justify-between">
                    <Button
                        variant="contained"
                        color="success"
                        onClick={onConfirm}
                        className="w-1/2 mr-2"
                    >
                        Удалить
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={onCancel}
                        className="w-1/2"
                    >
                        Отменить
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default ConfirmationModal;