import { createAsyncThunk } from '@reduxjs/toolkit';

interface AsyncThunkConfig {
    rejectValue: string; // Тип значения, которое будет возвращено в случае ошибки
}

/**
 * Общая функция для создания асинхронных санок
 * @param typePrefix Префикс для действия (например, 'linguistics/loadWords')
 * @param asyncFunc Асинхронная функция, которая выполняет запрос или операцию
 */

export const createApiThunk = <ReturnedType, ArgsType = void>(
    typePrefix: string,
    asyncFunc: (args: ArgsType) => Promise<ReturnedType>
) =>
    createAsyncThunk<ReturnedType, ArgsType, AsyncThunkConfig>(
        typePrefix,
        async (args, { rejectWithValue }) => {
            try {
                return await asyncFunc(args); // Выполняем асинхронную функцию
            } catch (error: any) {
                console.error(`Ошибка в thunk ${typePrefix}:`, error);
                return rejectWithValue(error.message || 'Произошла ошибка');
            }
        }
    );