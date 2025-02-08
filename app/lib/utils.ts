import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "@/app/store";

/**
 * Saves the value to localStorage
 * @param key
 */
export function saveToLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
/**
 * Gets a value from localStorage by key or null
 * @param key
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
  return (value?: T) => (dispatch: AppDispatch) => {
    if (value === undefined) {
      const storedValue = getFromLocalStorage<T>(key);
      if (storedValue !== null) {
        dispatch(actionCreator(storedValue));
      }
    } else {
      saveToLocalStorage(key, value);
      dispatch(actionCreator(value));
    }
  };
}

export function formatTime(seconds: number) {
  const time = new Date(seconds * 1000);

  const hours = time.getUTCHours().toString().padStart(2, '0');
  const minutes = time.getUTCMinutes().toString().padStart(2, '0');
  const sec = time.getUTCSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${sec}`;
}

/**
 * Общая функция для создания асинхронных санок
 * @param typePrefix Префикс для действия (например, 'linguistics/loadWords')
 * @param asyncFunc Асинхронная функция, которая выполняет запрос или операцию
 */

// Конфигурация для AsyncThunk
interface AsyncThunkConfig {
  rejectValue: string; // Тип значения, передаваемого в rejectWithValue
}

export const createApiThunk = <ReturnedType, ArgsType = void>(
    typePrefix: string,
    asyncFunc: (args: ArgsType) => Promise<ReturnedType>
) =>
    createAsyncThunk<ReturnedType, ArgsType, AsyncThunkConfig>(
        typePrefix,
        async (args, { rejectWithValue }) => {
          try {
            // Выполняем асинхронную функцию
            return await asyncFunc(args);
          } catch (error: unknown) {
            // Гарантируем, что ошибка имеет тип Error
            if (error instanceof Error) {
              console.error(`Ошибка в thunk ${typePrefix}:`, error);
              return rejectWithValue(error.message); // Передаём сообщение ошибки
            } else {
              console.error(`Неизвестная ошибка в thunk ${typePrefix}:`, error);
              return rejectWithValue('Произошла неизвестная ошибка');
            }
          }
        }
    );



interface AsyncThunkConfig {
  rejectValue: string; // Тип значения, которое будет возвращено в случае ошибки
}


export function getLocalizedText(
    lang: string,
    translations: Record<string, string>
): string {
  return translations[lang] || translations["en"]; // Возвращаем английский по умолчанию
}

