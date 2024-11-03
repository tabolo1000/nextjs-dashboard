import React from "react";
import Link from "next/link";


export default function Math () {
    return <ul>
        <li>
            <Link href = {"/math/class_fifth/lesson_first"}>
                Урок первый.
            </Link>
        </li>
    </ul>
}