import { Box, Typography, Input } from "@mui/material";
import {usePathname} from "next/navigation";
import {
    LocalizedText,
    localizedText
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/JsonUploader/localizedText";

interface Morpheme {
    prefix: string[];
    root: string[];
    suffix: string[];
    end: string[];
}

interface WordCarousel {
    morpheme?: Morpheme; // Структура данных, которую вы ожидаете
}

interface JsonUploaderProps {
    onJsonParsed: (parsedData: WordCarousel) => void;
    placeholder?: string;
    lang?: string; // Добавлен язык для локализации
}
/**
 * Component after text input parses value from input to
 * json if it is object and not null. Returns object and
 * sets values via useValues.
 */
export const JsonUploader: React.FC<JsonUploaderProps> = ({
                                                              onJsonParsed,
                                                              placeholder = "",
                                                          }) => {
    const lang = usePathname().split("/")[1]
    const messages:LocalizedText = localizedText(lang, placeholder)


    // Функция обработки JSON
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const jsonString = e.target.value;

        try {
            const parsedData: unknown = JSON.parse(jsonString);

            if (isWordCarousel(parsedData)) {
                // Инициализируем опциональные поля
                parsedData.morpheme = {
                    prefix: parsedData.morpheme?.prefix || [],
                    root: parsedData.morpheme?.root || [],
                    suffix: parsedData.morpheme?.suffix || [],
                    end: parsedData.morpheme?.end || [],
                };

                onJsonParsed(parsedData); // Передаем данные в родительский компонент
            } else {
                alert(messages.invalidJson); // Уведомление об ошибке формата
            }
        } catch (error: unknown) {
            alert(
                typeof error === "object" &&
                error !== null &&
                "message" in error &&
                typeof (error as Error).message
                    ? messages.parseError + (error as Error).message
                    : messages.invalidJson
            );
        }
    };

    // Проверка структуры JSON
    const isWordCarousel = (data: unknown): data is WordCarousel => {
        return (
            typeof data === "object" &&
            data !== null &&
            // Дополнительные проверки, если нужно
            ("morpheme" in data || Object.keys(data).length > 0)
        );
    };

    return (
        <Box mb={3}>
            {/* Заголовок */}
            <Typography variant="subtitle1">{messages.title}</Typography>

            {/* Поле ввода */}
            <Input
                className="paragraph_base"
                fullWidth
                multiline
                rows={20}
                placeholder={messages.placeholder}
                onBlur={handleBlur}
            />
        </Box>
    );
};