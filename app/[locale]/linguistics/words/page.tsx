// app/[locale]/linguistics/words/page.tsx
import fs from 'fs';
import path from 'path';
import Link from "next/link";

export default async function WordsPage() {
    const wordsDir = path.join(process.cwd(), 'app', '[locale]', 'linguistics', 'words');

    // Получаем список директорий (слов)
    const directories = fs.readdirSync(wordsDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
    return <div>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Explore the World of Words
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directories.map((dir) => (
                <Link
                    href={`/linguistics/words/${dir}`}
                    key={dir}
                    className="group relative bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600">
                        {dir.replace(/_/g, ' ')}
                    </h3>

                    <p className="text-gray-600">
                        Dive into the meaning and etymology of "{dir.replace(/_/g, ' ')}".
                    </p>

                    <div
                        className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium transition-colors"
                    >
                        Learn More →
                    </div>
                </Link>
            ))}
        </div>
    </div>
}