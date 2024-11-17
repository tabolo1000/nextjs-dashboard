import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import browserImage from "@/app/[locale]/(app)/linguistics/words/browser/assets/img/browser.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Browser() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Browser: Etymology, Meaning, and Examples</h1>

            {/* Etymology */}
            <Section title="Etymology of the Word 'Browser'">
                <p className="paragraph">
                    The word <Highlight>"browser"</Highlight> comes from the English term <Highlight>*browser*</Highlight>, which is derived from the verb <Highlight>*to browse*</Highlight>, meaning "to view," "to flip through," or "to search." Initially, this term was used in the context of browsing books and magazines, but it later came to denote programs designed for viewing web pages.
                </p>
                <p className="paragraph">
                    <Highlight>1. English Root:</Highlight> The verb <Highlight>*to browse*</Highlight> describes the process of searching for information, symbolizing the main function of a browser — viewing web pages.
                </p>
                <p className="paragraph">
                    <Highlight>2. Borrowing into Russian:</Highlight> The word <Highlight>"browser"</Highlight> was borrowed into Russian in the late 1990s, when the internet became widely available in Russia.
                </p>
            </Section>

            {/* Browser Interface */}
            <Interactive_Image src={browserImage} alt={"Browser interface"} width={500} height={500} />

            {/* Meaning */}
            <Section title="Meaning of the Word 'Browser'">
                <p className="paragraph">
                    A <Highlight>browser</Highlight> is a program used to access and display web pages. Browsers interpret the code of web pages (HTML, CSS, JavaScript) and present them in a visually comprehensible format for users.
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Viewing Web Pages:</Highlight>
                        A browser displays website content by converting code into a user-friendly interface.
                        <br />
                        <i>"With a browser, you can visit websites, read the news, and interact with web applications."</i>
                    </li>
                    <li>
                        <Highlight>2. Information Search:</Highlight>
                        Browsers allow users to search for information via search engines.
                        <br />
                        <i>"Enter a query in the browser's search bar to find the information you need."</i>
                    </li>
                    <li>
                        <Highlight>3. Interactivity:</Highlight>
                        Browsers support interactive functions such as multimedia viewing and form submission.
                        <br />
                        <i>"Modern browsers support the latest web applications and technologies."</i>
                    </li>
                </ul>
            </Section>

            {/* Popular Browser Examples */}
            <Section title="Examples of Popular Browsers">
                <ul className="space-y-6">
                    <Base_card
                        title="Google Chrome"
                        description="One of the most popular browsers, known for its speed and support for numerous extensions."
                        icon="🌐"
                    />
                    <Base_card
                        title="Mozilla Firefox"
                        description="An open-source browser that emphasizes privacy and customization options."
                        icon="🦊"
                    />
                    <Base_card
                        title="Microsoft Edge"
                        description="Microsoft's browser, using the Chromium engine for improved performance."
                        icon="🖥️"
                    />
                    <Base_card
                        title="Safari"
                        description="Apple's browser, optimized for macOS and iOS devices."
                        icon="🍎"
                    />
                    <Base_card
                        title="Opera"
                        description="A browser with unique features like a built-in VPN and ad blocker."
                        icon="🚀"
                    />
                </ul>
            </Section>

            {/* Browser Quotes */}
            <Section title="Quotes About Browsers and Their Importance">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="A browser is your gateway to the world of the internet."
                        annotation="Meaning: A browser opens access to a vast amount of information available online."
                    />
                    <Quote_with_annotation
                        quote="Browser security is the security of your data."
                        annotation="Meaning: Browsers play a crucial role in protecting users' personal information."
                    />
                    <Quote_with_annotation
                        quote="Choosing a browser is choosing a style of work and convenience of internet usage."
                        annotation="Meaning: Different browsers offer various features and approaches to how we interact with the web."
                    />
                </div>
            </Section>

            {/* Browser Components */}
            <Section title="Main Components of a Browser">
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Address Bar:</Highlight>
                        The field where users input the URL of a web page or a search query.
                    </li>
                    <li>
                        <Highlight>2. Tabs:</Highlight>
                        The ability to open multiple web pages in a single browser window.
                    </li>
                    <li>
                        <Highlight>3. Browsing History:</Highlight>
                        A record of visited web pages, which can be reviewed or cleared.
                    </li>
                    <li>
                        <Highlight>4. Cookies:</Highlight>
                        Small files that store information about user preferences and actions on a website.
                    </li>
                    <li>
                        <Highlight>5. Extensions:</Highlight>
                        Additional modules that add new functionality to the browser, such as ad blockers.
                    </li>
                </ul>
            </Section>

            {/* Important Aspects of Browser Functionality */}
            <Section title="Important Aspects of Browser Functionality">
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Security:</Highlight>
                        Modern browsers protect users from malicious websites and phishing attacks.
                    </li>
                    <li>
                        <Highlight>2. Privacy:</Highlight>
                        Browsers offer incognito modes and tools to block trackers.
                    </li>
                    <li>
                        <Highlight>3. Performance:</Highlight>
                        A browser's speed depends on its engine and the number of open tabs and extensions.
                    </li>
                    <li>
                        <Highlight>4. Cross-platform Compatibility:</Highlight>
                        The ability to synchronize bookmarks and browsing history across devices.
                    </li>
                </ul>
            </Section>
        </div>
    );
}