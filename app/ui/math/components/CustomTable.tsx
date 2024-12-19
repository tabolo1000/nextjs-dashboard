import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

// Типизация для столбцов
type Column = {
    textAlign: "inherit" | "left" | "center" | "right" | "justify";
    label: string;
};

// Типизация для пропсов
interface CustomTableProps {
    columns: Column[];
    rows: string[][];
    headerClassName?: string;
    rowClassName?: string;
    cellClassName?: string;
}

// Основной компонент
export const CustomTable = ({
                                columns,
                                rows,
                                headerClassName = "table_header",
                                rowClassName = "table_row",
                                cellClassName = "table_data_cell",
                            }: CustomTableProps) => {
    // Проверка на пустые данные
    if (!columns || columns.length === 0) {
        return <p>Нет данных для отображения заголовков</p>;
    }

    if (!rows || rows.length === 0) {
        return <p>Нет данных для отображения строк таблицы</p>;
    }

    return (
        <TableContainer component={Paper} sx={{ marginY: 1, borderRadius: 2, boxShadow: 3 }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                {/* Заголовок таблицы */}
                <TableHead>
                    <TableRow className={headerClassName}>
                        {columns.map((column, index) => (
                            <TableCell
                                key={index}
                                align={column.textAlign}
                                className={cellClassName}
                                sx={{
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                {/* Тело таблицы */}
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <TableRow
                            key={rowIndex}
                            className={rowClassName}

                        >
                            {row.map((cell, cellIndex) => (
                                <TableCell
                                    key={cellIndex}
                                    className={cellClassName}
                                >
                                    {cell}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};