import Link from 'next/link';


/*
    Expects to accept an array consisting of the objects of its structure:
    baseUrl: common part of url,
    paths: dynamic part of url,
    name: text on the button
    let link_of_list = [
    {
        baseUrl: "./lesson_first",
        paths: "/natural_numbers",
        name: "Натуральные числа",
    },
    ]
*/

export default function Link_list({
                                     list_of_link,
}: Link_list_Props) {
    const styleForLink = [
        {style: "link-base link-blue", numberOfLesson: "Урок первый"},
        {style: "link-base link-green", numberOfLesson: "Урок второй"},
        {style: "link-base link-teal", numberOfLesson: "Урок третий "},
        {style: "link-base link-yellow", numberOfLesson: "Урок четверный"},
        {style: "link-base link-red", numberOfLesson: "Урок пятый"},
        {style: "link-base link-purple", numberOfLesson: "Урок шестой"},
        {style: "link-base link-pink", numberOfLesson: "Урок седьмой"},
    ]
    return (
        <div className="flex justify-center items-center min-w-full min-h-">
            <ul className="space-y-6 w-full max-w-lg ">
                {list_of_link.map((el, i) => (
                    <li
                        className="text-center"
                        key={i}>
                        <Link href={`${el.baseUrl}${ el.paths}`}
                              className={styleForLink[i].style}>
                            {styleForLink[i].numberOfLesson}: { el.name }
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

interface Link_list_Props {
    list_of_link: Array<{name: string, baseUrl: string, paths: string}>;
}

