import Link from 'next/link';

export default function Math() {
    return (
        <div className="flex justify-center items-center min-w-full min-h-">
            <ul className="space-y-6 w-full max-w-lg ">
                <li className="text-center">
                    <Link href="./lesson_first/natural_numbers"
                          className="link-base link-blue">
                        Урок первый: Натуральные числа
                    </Link>
                </li>
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

            </ul>
        </div>
    );
}