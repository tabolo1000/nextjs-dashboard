import NavigateButton from "@/app/ui/math/components/Navigate_button";

export const metadata = {
    title: "Учебное пособие по натуральным числам и десятичной системе",
    description: "Узнайте о натуральных числах, десятичной системе счисления, разрядах, классах и многозначных числах.",
    keywords: ["натуральные числа", "десятичная система", "разряды", "классы", "математика", "учебное пособие"],
    authors: [{ name: "Nik", url: "https://tabolo1000.github.io/portfolio/" }],
    openGraph: {
        title: "Учебное пособие по натуральным числам и десятичной системе",
        description: "Подробное пособие по основам математики: натуральные числа, десятичная система, разряды и классы.",
        url: "https://example.com/educational-content",
        siteName: "Учебное пособие",
        images: [
            {
                url: "https://example.com/images/educational-thumbnail.png",
                width: 800,
                height: 600,
                alt: "Изображение учебного пособия",
            },
        ],
        locale: "ru_RU",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Учебное пособие по натуральным числам и десятичной системе",
        description: "Узнайте о натуральных числах, десятичной системе счисления, разрядах, классах и многозначных числах.",
        images: ["https://example.com/images/educational-thumbnail.png"],
    },
};


export const Natural_numbers = () => {
    return (
        <div className="p-6 font-sans bg-gray-50 text-gray-800">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-700 absolute opacity-0">
                Учебное пособие по натуральным числам, десятичной системе, разрядам, классам и числам
            </h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600 text-center">Натуральные числа</h2>
                <p className="mb-2">
                    <strong>Натуральные числа</strong> — это числа, которые мы используем для счёта предметов и
                    обозначения порядковых номеров. Они начинаются с <strong>единицы</strong> и продолжаются бесконечно.
                    Натуральные числа можно записать так:
                </p>
                <p className="italic mb-4">1, 2, 3, 4, 5, …</p>
                <p className="mb-4">Каждое натуральное число больше предыдущего на единицу.</p>
                <h3 className="text-xl font-semibold mb-2">Основные свойства натуральных чисел:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Натуральные числа образуют <strong>натуральный ряд</strong>, который начинается с единицы и
                        продолжается бесконечно.
                    </li>
                    <li>Натуральные числа можно использовать для <strong>счёта объектов</strong> (сколько яблок, книг,
                        людей и т.д.).
                    </li>
                    <li>Множество натуральных чисел обозначается символом <strong>ℕ</strong>.</li>
                </ul>
                <p className="font-semibold">Пример:</p>
                <p className="mb-4">Число <strong>7</strong> — это натуральное число, которое можно использовать для
                    подсчёта объектов: «У меня 7 книг».</p>
            </section>
            <NavigateButton to = {""} />
        </div>
    );
}


interface Props {
    setTopic: (topic: string) => void;
}