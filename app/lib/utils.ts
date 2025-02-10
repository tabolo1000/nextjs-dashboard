import {createAsyncThunk, GetThunkAPI, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "@/app/store";
import {deleteCookie} from "cookies-next";

/**
 * Saves the value to localStorage
 * @param key - storage key
 * @param value - value key
 */
export function saveToLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

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
 * @param actionCreator action
 *
 * If value is not passed, read from localStorage.
 * If passed, save to localStorage and dispatch it
 */
export function createStorageThunk<T>(
    key: string,
    actionCreator: (payload: T) => PayloadAction<T>
) {
    return (value?: T | null) => (dispatch: AppDispatch) => {
        try {
            if (value !== undefined) {
                saveToLocalStorage(key, value);
            } else {
                value = getFromLocalStorage<T>(key);
            }

            if (value !== null) {
                dispatch(actionCreator(value));
            }
        } catch (error) {
            console.error(`Error when working with localStorage (${key}):`, error);
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
function handleThunkError(error: unknown, typePrefix: string, thunkAPI: GetThunkAPI<AsyncThunkConfig> ) {
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
 * @param storageKey - storage key
 */
export const createApiThunkWithStorage = <ReturnedType, ArgsType = void>(
    typePrefix: string,
    asyncFunc: (args: ArgsType) => Promise<ReturnedType>,
    storageKey?: string
) =>
    createAsyncThunk<ReturnedType, ArgsType, AsyncThunkConfig>(
        typePrefix,
        async (args, thunkAPI) => {
            try {
                const data = await asyncFunc(args);
                if (storageKey) saveToLocalStorage(storageKey, data);
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
 * @param actionCreator - the action creater to be performed
 */
export function removeCookiesThunk(
    cookiesKey: string,
    localStorageKey: string,
    actionCreator: () => PayloadAction
) {
    return () => async (dispatch: AppDispatch) => {
        try {
            deleteCookie(cookiesKey);
            localStorage.removeItem(localStorageKey);

            dispatch(actionCreator());
        } catch (error) {
            console.error("Ошибка при удалении cookies или localStorage:", error);
        }
    };
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

