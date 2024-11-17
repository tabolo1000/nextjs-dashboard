import fs from 'fs';
import path from 'path';
import {Link_pages} from "@/app/ui/math/components/LinkPages";

// Функция для статического чтения файлов
export default async function WordsPage() {
    const wordsDir = path.join(process.cwd(), 'app', '[locale]', '(app)', 'linguistics', 'words');

    // Получаем список директорий (слов)
    const directories = fs.readdirSync(wordsDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

    return <Link_pages directories={directories} />;
}

