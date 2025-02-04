import { Revenue } from './definitions';
import {createAsyncThunk} from "@reduxjs/toolkit";

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in the 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};



//------------------------My_utils----------------------------------------------

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

export function saveToLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}


interface AsyncThunkConfig {
  rejectValue: string; // Тип значения, которое будет возвращено в случае ошибки
}


export function getLocalizedText(
    lang: string,
    translations: Record<string, string>
): string {
  return translations[lang] || translations["en"]; // Возвращаем английский по умолчанию
}

