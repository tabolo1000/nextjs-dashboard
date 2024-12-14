"use client "

import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const TableComponent = (
    {
        rowData,
        columnDefs
    }:TableComponentProps
) => {
    return <main className="min-h-screen bg-gray-900 text-gray-200 p-6">
    <h1 className="text-3xl font-bold text-green-500 mb-6">
      Таблица с React Table
    </h1>
    <DataGrid rows={rows} columns={columns} />
  </main>
}


interface TableComponentProps {
    rowData: { parameter: string, value: "string" }[],
    columnDefs: { headerName: string, field: string, sortable: boolean, filter: boolean },
}