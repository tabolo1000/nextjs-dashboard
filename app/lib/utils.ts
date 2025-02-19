import {createAsyncThunk, GetThunkAPI, UnknownAction} from "@reduxjs/toolkit";
import {deleteCookie} from "cookies-next";
import {AppDispatch} from "@/app/store";
import {WordWithoutId} from "@/app/[locale]/(app)/linguistics/words/(kata)/words.type";

/**
 * Saves the value to localStorage
 * @param key - storage key
 * @param value - value key
 */
export const saveToLocalStorage = <T>(key: string, value: T): boolean => {
    if (typeof window === "undefined") {
        throw new Error("localStorage is not supported in this environment.");
    }
    localStorage.setItem(key, JSON.stringify(value));
    return true;
};

/**
 * Gets a value from localStorage by key or null
 * @param key - storage key
 */
export function getFromLocalStorage<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

/**
 * The action with panels is get saved in localStorage
 * @param key storage key
 * @param actionType action
 *
 * If value is not passed, read from localStorage.
 * If passed, save to localStorage and dispatch it
 */
export function createStorageThunk<T>(
    key: string,
    actionType: (payload: T) => UnknownAction,
) {
    return (value?: T) => (dispatch: AppDispatch) => {
        try {
            if (value !== undefined) {
                saveToLocalStorage(key, value);
                dispatch(actionType(value))
                return value;
            } else {
                const storedValue = getFromLocalStorage<T>(key);
                if (storedValue !== null) dispatch(actionType(storedValue));
                return storedValue;
            }
        } catch (error) {
            console.error(`Ошибка работы с localStorage (${key}):`, error);
            return null;
        }
    };
}

// Configuration for AsyncThunk
interface AsyncThunkConfig {
    rejectValue: string;
}

/**
 * Creates an asynchronous thunk to work with extra reducers
 * @param typePrefix - Action type. Prefix for the action (e.g. 'linguistics/loadWords')
 * @param asyncFunc - Asynchronous function working with REST API
 */
export const createApiThunk = <ReturnedType, ArgsType = void>(
    typePrefix: string,
    asyncFunc: (args: ArgsType) => Promise<ReturnedType>
) =>
    createAsyncThunk<ReturnedType, ArgsType, AsyncThunkConfig>(
        typePrefix,
        async (args, thunkAPI) => {
            try {
                return await asyncFunc(args);
            } catch (error) {
                return handleThunkError(error, typePrefix, thunkAPI);
            }
        }
    );

/**
 * Error handling
 * @param error - Transmitted error
 * @param typePrefix - Action type. Prefix for the action (e.g. 'linguistics/loadWords')
 * @param thunkAPI
 */
function handleThunkError(error: unknown, typePrefix: string, thunkAPI: GetThunkAPI<AsyncThunkConfig>) {
    if (error instanceof Error) {
        console.error(`Error in thunk ${typePrefix}:`, error);
        return thunkAPI.rejectWithValue(error.message);
    }
    console.error(`Unknown error in thunk ${typePrefix}:`, error);
    return thunkAPI.rejectWithValue("An unknown error occurred");
}

/**
 *
 * @param typePrefix - Action type. Prefix for the action (e.g. 'linguistics/loadWords')
 * @param asyncFunc - Asynchronous function working with REST API
 * @param storageKey - Caution!!! Storage key has two functions as
 * a key in LocalStorage and in response data[key]
 */
export const createApiThunkWithStorage = <ReturnedType, ArgsType = void>(
    typePrefix: string,
    asyncFunc: (args: ArgsType) => Promise<ReturnedType>,
    storageKey?: keyof ReturnedType
) =>
    createAsyncThunk<ReturnedType, ArgsType, AsyncThunkConfig>(
        typePrefix,
        async (args, thunkAPI) => {
            try {
                const data = await asyncFunc(args);
                if (storageKey && data[storageKey] !== undefined) {
                    saveToLocalStorage(storageKey as string, data[storageKey]);
                }
                return data;
            } catch (error) {
                return handleThunkError(error, typePrefix, thunkAPI);
            }
        }
    );

/**
 * Cleaning cookies and localstorage
 * @param cookiesKey - Key in the cookies object
 * @param localStorageKey - Key in the localStorage object
 * @param actionType - the action creater to be performed
 */
export function removeCookiesThunk(
    cookiesKey: string,
    localStorageKey: string,
    actionType: string
) {
    return createAsyncThunk<void, void>(
        actionType,
        async (_, {dispatch}) => {
            try {
                deleteCookie(cookiesKey);
                localStorage.removeItem(localStorageKey);

                dispatch({type: actionType});
            } catch (error) {
                console.error("Ошибка при удалении cookies или localStorage:", error);
            }
        }
    );
}

/**
 * Get the locale
 * @param lang - Current location
 * @param translations - Get a specific transfer
 */
export function getLocalizedText(
    lang: string,
    translations: Record<string, string>
): string {
    return translations[lang] || translations["en"];
}

/**
 * Get the formatted time h:m:s
 * @param seconds Number of seconds
 */
export function formatTime(seconds: number) {
    const time = new Date(seconds * 1000);

    const hours = time.getUTCHours().toString().padStart(2, '0');
    const minutes = time.getUTCMinutes().toString().padStart(2, '0');
    const sec = time.getUTCSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${sec}`;
}


export const getNestedValue = (obj: WordWithoutId, path: string): Record<string, any> | string => {
    return path.split(".").reduce((acc, key) => {
        return (acc as any)[key];
    }, obj as Record<string, any>);
}

