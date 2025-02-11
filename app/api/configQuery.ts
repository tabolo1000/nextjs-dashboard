import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getCookie} from "cookies-next";

/**
 * Basic RTK Query configuration
 */
export const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL?.trim() || "http://localhost:3001",
    prepareHeaders: (headers) => {
        const token = getCookie("access_token");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        headers.set("Content-Type", "application/json");
        return headers;
    },
    timeout: 20000
});