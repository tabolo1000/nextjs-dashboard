import Link_list from "@/app/ui/math/components/Link_list";


export default function Vitamin_k() {
    const link_of_list = [
        {
            baseUrl: "./vitamin_k",
            paths: "/introduction_vitamin_k",
            name: "Урок первый: Введение.",
        },
        {
            baseUrl: "./lesson_first",
            paths: "/decimal_system",
            name: "Урок второй: Десятичная система",
        },
        {
            baseUrl: "./lesson_first",
            paths: "/natural_numbers_sequence",
            name: "Урок третий: Последовательность натуральных чисел",
        },
        {
            baseUrl: "./lesson_first",
            paths: "/zero",
            name: "Урок четвертый: Число 0",
        },
        {
            baseUrl: "./lesson_first",
            paths: "/place_values",
            name: "Урок пятый: Разряды",
        },
        {
            baseUrl: "./lesson_first",
            paths: "/single_and_Two_and_Multi_digit_numbers",
            name: "Урок шестой: Однозначные, двузначные и многозначные числа",
        },
        {
            baseUrl: "./lesson_first",
            paths: "/conclusion_natural_numbers",
            name: "Урок седьмой: Заключение по натуральным числам",
        },
    ]
    return (
        <div className="   ">
            <h1 className={"header_h1"}>Витамин K</h1>
            <Link_list list_of_link={link_of_list} />
            {/*
                <li className="text-center">
                    <Link href="./lesson_first/decimal_system"
                          className="link-base link-green">
                        Урок второй: Десятичная система
                    </Link>
                </li>
                <li className="text-center">
                    <Link href="./lesson_first/natural_numbers_sequence"
                          className="link-base link-teal">
                        Урок третий: Последовательность натуральных чисел
                    </Link>
                </li>
                <li className="text-center">
                    <Link href="./lesson_first/zero"
                          className="link-base link-yellow">
                        Урок четвертый: Число 0
                    </Link>
                </li>
                <li className="text-center">
                    <Link href="./lesson_first/place_values"
                          className="link-base link-red">
                        Урок пятый: Разряды
                    </Link>
                </li>
                <li className="text-center">
                    <Link href="./lesson_first/single_and_Two_and_Multi_digit_numbers"
                          className="link-base link-purple">
                        Урок шестой: Однозначные, двузначные и многозначные числа
                    </Link>
                </li>

                <li className="text-center">
                    <Link href="./lesson_first/conclusion_natural_numbers"
                          className="link-base link-pink">
                        Урок седьмой: Заключение по натуральным числам
                    </Link>
                </li>
*/}

        </div>
    );
}