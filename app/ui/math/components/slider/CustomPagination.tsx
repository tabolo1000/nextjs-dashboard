import {Box, Pagination, Stack} from "@mui/material";
import React from "react";
import {
    TCurrentPageWordCarousel, THandlePaginationWordCarousel,
    TPageCountWordCarousel
} from "@/app/[locale]/(app)/linguistics/words/(kata)/useSlider_words";


export default function CustomPagination ({
                                              pageCount,
                                              currentPage,
                                              handleChange,
                         }: CustomPaginationProps) {
    return <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Stack spacing={2}>
            <Pagination
                shape="rounded"
                variant="outlined"
                count={pageCount} // Общее количество страниц
                color="primary"
                page={currentPage}
                onChange={handleChange}
                sx={{
                    "& .MuiPaginationItem-root": {
                        color: "gray", // Цвет текста по умолчанию
                    },
                    "& .Mui-selected": {
                        backgroundColor: "#2563eb", // Синий фон для выбранного элемента
                        color: "white", // Белый текст для выбранного элемента
                    },
                    "& .MuiPaginationItem-root:hover": {
                        backgroundColor: "#1e40af", // Тёмно-синий фон при наведении
                    },
                }}
            />
        </Stack>
    </Box>
}



interface CustomPaginationProps {
    pageCount: TPageCountWordCarousel,
    currentPage: TCurrentPageWordCarousel,
    handleChange: THandlePaginationWordCarousel,
}
