import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";
import buttonImage from "@/app/[locale]/(app)/linguistics/words/botton/assets/img/button.jpeg";

export default function ButtonInfo() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Button</h1>

            {/* Etymology of the word "Button" */}
            <Section title="Etymology of the word 'Button'">
                <p className="paragraph">
                    The word <Highlight>button</Highlight> came into the Russian language from Polish, where the word <i>knopka</i> means "small head" or "ball." This word, in turn, originates from the Dutch <i>knop</i>, meaning "bud," "cone," or "knot." In Russian, "button" started to refer to a small object that can be pressed or switched to perform a certain function.
                </p>
            </Section>

            <Interactive_Image src={buttonImage} alt={"Button"} width={500} height={500} />


            {/* Meaning of the word "Button" */}
            <Section title="Meaning of the word 'Button'">
                <p className="paragraph">
                    A <Highlight>button</Highlight> is a small object designed to be pressed, which activates or switches a specific function. Buttons can be mechanical or virtual (for example, on a computer or smartphone screen).
                </p>

                {/* Main meanings of the word "button" */}
                <ul className="unordered_list">
                    <li>
                        <Highlight>Mechanical button:</Highlight> A physical element that can be pressed to perform a specific task, such as a power button on a TV or a key on a keyboard.
                        *"The power button on the computer is located on the front panel of the system unit."*
                    </li>
                    <li>
                        <Highlight>Virtual button:</Highlight> A graphic element on a device's screen that a user can "press" using a mouse or touch screen.
                        *"Click the 'Submit' button to complete the registration."*
                    </li>
                    <li>
                        <Highlight>Fastening button:</Highlight> A small object used to fasten clothes or other textile items.
                        *"The button on the shirt fell off and needs to be sewn back on."*
                    </li>
                </ul>
            </Section>

            {/* History of buttons */}
            <Section title="History of Buttons">
                <p className="paragraph">
                    If we look into history, buttons as fasteners appeared long before they were used in mechanics or electronics. In ancient times, people used buttons, fasteners, and laces to secure clothing. However, in the mid-20th century, with the development of technology, buttons became a key element in managing electronic devices.
                </p>

                <p className="paragraph">
                    The first mechanical buttons used in devices can be found on telephones and radios, providing simple and reliable control. With the rise of computers and mobile devices, buttons became an integral part of user interfaces.
                </p>

                <p className="paragraph">
                    Virtual buttons appeared with the development of software interfaces and touch screens. They replaced physical buttons in many devices, such as smartphones and tablets.
                </p>
            </Section>

            {/* Examples of button usage */}
            <Section title="Examples of Button Usage">
                <ul className="space-y-6">
                    <Base_card
                        title="Mechanical Buttons"
                        description="Mechanical buttons are used on keyboards, household appliances such as microwaves, washing machines, and televisions."
                        icon="🖲️"
                    />
                    <Base_card
                        title="Virtual Buttons"
                        description="Virtual buttons are used on websites and mobile applications to perform actions, such as submitting forms or navigating links."
                        icon="📱"
                    />
                    <Base_card
                        title="Fastening Buttons"
                        description="Fastening buttons are used to fasten clothes, such as shirts, coats, or pants."
                        icon="👔"
                    />
                    <Base_card
                        title="Buttons in Transport"
                        description="In transport, buttons are used to signal the driver, open doors, or activate a stop."
                        icon="🚍"
                    />
                </ul>
            </Section>

            {/* Features of buttons */}
            <Section title="Features of Buttons">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Working mechanism of buttons:</Highlight> Mechanical buttons work by closing or opening electrical circuits when pressed, which activates a specific action.
                    </li>
                    <li>
                        <Highlight>Virtual buttons:</Highlight> Virtual buttons operate based on code: when pressed, they trigger a command that performs a specific action.
                    </li>
                    <li>
                        <Highlight>Button design:</Highlight> Both mechanical and virtual buttons must be intuitive and user-friendly. Their shape, color, and placement play an important role in how the user perceives and interacts with the device.
                    </li>
                </ul>
            </Section>

            {/* Interesting facts about buttons */}
            <Section title="Interesting Facts About Buttons">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Power button:</Highlight> The power button symbol (a circle with a vertical line) has become an international standard and is used on almost all devices.
                    </li>
                    <li>
                        <Highlight>Buttons in public transport:</Highlight> Buttons for opening doors on demand help save energy and maintain a comfortable temperature inside the vehicle.
                    </li>
                    <li>
                        <Highlight>Touch buttons:</Highlight> Modern devices are increasingly replacing mechanical buttons with touch-sensitive ones, making them more durable and convenient.
                    </li>
                    <li>
                        <Highlight>Buttons in spacecraft:</Highlight> In spacecraft, buttons play a crucial role in system control. They must be extremely reliable and easy to use in zero-gravity conditions. Buttons on the ISS are larger for ease of use while wearing spacesuits.
                    </li>
                </ul>
            </Section>

            {/* Quotes about buttons */}
            <Section title="Quotes About Buttons">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Pressing a button is an action that opens up a world of possibilities."
                        annotation="A button may be a simple element, but pressing it can trigger a complex chain of events or processes."
                    />
                    <Quote_with_annotation
                        quote="Buttons are the bridge between humans and machines."
                        annotation="Buttons serve as the interface that allows humans to interact with a device, whether it's a computer, phone, or household appliance."
                    />
                    <Quote_with_annotation
                        quote="One press of a button, and the world changes."
                        annotation="A simple action like pressing a button can lead to significant changes or results."
                    />
                    <Quote_with_annotation
                        quote="A button is a symbol of choice and action."
                        annotation="A button embodies the idea of choice and the ability to act through a simple and understandable mechanism."
                    />
                </div>
            </Section>
        </div>
    );
}