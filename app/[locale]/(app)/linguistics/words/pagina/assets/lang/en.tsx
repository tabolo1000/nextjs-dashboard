import React from "react";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import pagina from "@/app/[locale]/(app)/linguistics/words/pagina/assets/img/pagina.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";

export default function Page() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Page</h1>

            <Section title="Etymology of the Word 'Page'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight> The word <Highlight>page</Highlight> entered English through Old French (<Highlight>page</Highlight>), which originally came from Latin <Highlight>pagina</Highlight>, meaning *sheet*, *strip*, or *page of a book*. The Latin term <Highlight>pagina</Highlight> itself derives from the verb <Highlight>pangere</Highlight>, which means *to fasten*, *plant*, or *drive in*. In ancient Rome, <Highlight>pagina</Highlight> referred to flat strips or boards used for writing, and eventually, the word came to be used for parchment sheets and pages in books.
                </p>
                <p className="paragraph">
                    Initially, the term <Highlight>pagina</Highlight> described physical objects — strips or boards for writing. Over time, as books became more common, especially after the invention of printing, the word took its current meaning: the individual sheets in a book. Now, it is also widely used in reference to digital media, such as web pages.
                </p>
            </Section>

            <Interactive_Image src={pagina} alt={"pagina"} width={500} height={500} />

            <Section title="Morphological Elements">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Root "page"</Highlight> — comes from the Latin <Highlight>pagina</Highlight>, meaning a sheet or strip of text.
                    </li>
                    <li>
                        <Highlight>Suffix "-e"</Highlight> — a standard ending for singular nouns in English.
                    </li>
                </ul>
            </Section>

            <Section title="Historical Context">
                <p className="paragraph">
                    In ancient times, the word <Highlight>page</Highlight> referred to a physical sheet of parchment or paper in a book or scroll, on which text was written or printed. With the invention of the printing press and the mass production of books, the term became more specific, referring to the structural unit of a printed work — the individual sheet within the book.
                </p>
                <p className="paragraph">
                    Over time, the meaning of the word expanded beyond physical books. Today, a <Highlight>page</Highlight> can also refer to a digital space where information is displayed, such as a web page. In this sense, it serves as the basic structural unit of any website or digital document.
                </p>
            </Section>

            <Section title="Modern Meaning">
                <p className="paragraph">
                    In modern usage, the word <Highlight>page</Highlight> has several meanings, depending on the context:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Physical page</Highlight> — A sheet in a book, magazine, or other printed publication that contains text, images, or other information.
                    </li>
                    <li>
                        <Highlight>Web page</Highlight> — A part of a website that is displayed in a web browser, containing text, images, videos, and other elements.
                    </li>
                    <li>
                        <Highlight>Figurative meaning</Highlight> — A chapter or moment in life, history, or creative work, as in the expressions *"a page in history"* or *"a new page in my life."*
                    </li>
                </ul>
            </Section>

            <Section title="Examples of Using the Word 'Page'">
                <ul className="space-y-6">
                    <Base_card
                        title="Books and Printed Materials"
                        description="This book is so interesting that I can't put it down, turning page after page."
                        icon="📖"
                    />
                    <Base_card
                        title="Internet and Web Technologies"
                        description="The company's web page contains all the necessary information about their products and services."
                        icon="🌐"
                    />
                    <Base_card
                        title="History and Life"
                        description="This victory is written on the glorious pages of our nation's history."
                        icon="📜"
                    />
                    <Base_card
                        title="Personal Development"
                        description="This year has marked a new page in my life."
                        icon="📅"
                    />
                </ul>
            </Section>

            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Manuscripts don't burn, but history's pages can be rewritten."
                        annotation="Mikhail Bulgakov"
                    />
                    <Quote_with_annotation
                        quote="A book is a time machine. Every page is a window into another world, another era."
                        annotation="Carl Sagan"
                    />
                    <Quote_with_annotation
                        quote="Every page of my life is not only the result of my own decisions but also the decisions of those around me."
                        annotation="Oscar Wilde"
                    />
                </div>
            </Section>

            <Section title="The Significance of a Page">
                <p className="paragraph">
                    The word <Highlight>page</Highlight> is a crucial structural unit, both in the physical and digital worlds. In print, it helps organize text and information, while in the digital realm, it structures data for users. The word also takes on metaphorical significance, representing various stages in life or important historical moments.
                </p>
                <p className="paragraph">
                    In books, <Highlight>pages</Highlight> allow readers to navigate through a narrative, providing a clear sense of progression. In the digital world, a web page serves as a gateway to information, leading users to explore interconnected content. Figuratively, turning the *page* symbolizes moving forward in life, embarking on new experiences, or reflecting on past events.
                </p>
            </Section>

            <Section title="Conclusion">
                <p className="paragraph">
                    The word <Highlight>page</Highlight> has evolved significantly throughout history. From its origins in Ancient Rome to its modern-day application in print and digital formats, the concept of a page remains fundamental to how we access and interact with information. Whether physical or virtual, each page holds the potential to inform, enlighten, and inspire.
                </p>
                <p className="paragraph">
                    Furthermore, in its metaphorical sense, a *page* represents pivotal moments in both personal lives and collective history, reminding us of the importance of each chapter we write, both literally and figuratively.
                </p>
            </Section>
        </div>
    );
}