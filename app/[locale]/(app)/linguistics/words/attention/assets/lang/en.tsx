import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import attentionImage from "./../img/attention.jpeg"; // Placeholder for the image related to "attention"
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";


export default function Attention() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Attention: Etymology, Meaning, and Examples</h1>

            {/* Etymology */}
            <Section title="Etymology of the Word 'Attention'">
                <p className="paragraph">
                    The word <Highlight>attention</Highlight> comes from the Old Russian word <Highlight>vnimati</Highlight>, which meant "to listen," "to heed," or "to hear." In turn, this word is related to the root <Highlight>imati</Highlight>, meaning "to take" or "to perceive." Thus, originally, <Highlight>attention</Highlight> involved the process of perceiving information through hearing, but over time, its meaning expanded to a broader concept of focusing on an object or phenomenon.
                </p>
                <p className="paragraph">
                    <Highlight>Old Slavic and Russian Roots:</Highlight> In Old Russian, the word <Highlight>vnimati</Highlight> was used to denote the act of actively perceiving information, especially through hearing. This root has been preserved in modern words like "heed," "attentive," and "attention."
                </p>
                <p className="paragraph">
                    <Highlight>Origin in the Context of Behavior:</Highlight> Attention, as the ability to focus on specific objects, was an essential element of interacting with the surrounding world. Attention to one's surroundings, details, and other people has always been valued in society because it helped better understand and respond to what was happening.
                </p>
            </Section>

            {/* Interactive Image */}
            <Interactive_Image src={attentionImage} alt={"Attention"} width={500} height={500} />

            {/* Definition */}
            <Section title="Definition of the Word 'Attention'">
                <p className="paragraph">
                    <Highlight>Attention</Highlight> is the ability of a person to consciously direct their perception and thought processes toward a specific object, action, or phenomenon. It helps to focus, highlight important information from the environment, and ignore unnecessary distractions.
                </p>
                <p className="paragraph">
                    <Highlight>Main Meanings of the Word 'Attention':</Highlight>
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Focus:</Highlight> Attention is the process of actively concentrating on a subject, process, or task.
                        <br />
                        <i>"Solving this problem requires full attention."</i>
                    </li>
                    <li>
                        <Highlight>Expression of Interest:</Highlight> Attention can imply showing interest or care towards another person or object.
                        <br />
                        <i>"He gave her a lot of attention and helped solve the issue."</i>
                    </li>
                    <li>
                        <Highlight>Warning of Danger:</Highlight> In some situations, attention is used as a warning that one needs to focus or be cautious.
                        <br />
                        <i>"Attention! Roadwork ahead."</i>
                    </li>
                </ul>
            </Section>

            {/* Examples of Use */}
            <Section title="Examples of Using the Word 'Attention'">
                <ul className="unordered_list">
                    <li>
                        <Highlight>In the Learning Process:</Highlight> To learn successfully, it is necessary to pay attention to the material, or important details may be missed.
                        <br />
                        <i>"The teacher asked the students to pay attention to the important topic of the lesson."</i>
                    </li>
                    <li>
                        <Highlight>Medical Examinations:</Highlight> Doctors often need to pay attention to the slightest symptoms to make an accurate diagnosis.
                        <br />
                        <i>"The doctor paid close attention to the patient's complaints and conducted a detailed examination."</i>
                    </li>
                    <li>
                        <Highlight>Attention in Communication:</Highlight> In interpersonal relationships, paying attention to the words and feelings of another person helps to build trust.
                        <br />
                        <i>"She listened to his story with attention and kept the conversation going."</i>
                    </li>
                    <li>
                        <Highlight>Warning of Caution:</Highlight> Attention is often used as a call for caution on the road or in other important situations.
                        <br />
                        <i>"Attention! Boarding for the flight begins at 10 a.m."</i>
                    </li>
                </ul>
            </Section>

            {/* Types of Attention */}
            <Section title="Types of Attention">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Involuntary Attention:</Highlight> This type of attention arises automatically, without conscious effort. For example, a loud sound or bright light may attract your attention.
                        <br />
                        <i>"Involuntary attention is often triggered by unexpected changes in the environment."</i>
                    </li>
                    <li>
                        <Highlight>Voluntary Attention:</Highlight> This is a conscious and deliberate focus on a particular task or object. Voluntary attention requires effort and willpower.
                        <br />
                        <i>"Successful task completion requires voluntary attention to small details."</i>
                    </li>
                    <li>
                        <Highlight>Postvoluntary Attention:</Highlight> This type of attention initially requires effort to concentrate but is later maintained through interest in the object or task. For example, when a person becomes engrossed in reading a book and loses track of time.
                        <br />
                        <i>"Postvoluntary attention occurs when a person becomes absorbed in an activity they are interested in."</i>
                    </li>
                </ul>
            </Section>

            {/* Quotes */}
            <Section title="Quotes About Attention and Their Meaning">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Attention is the rarest and purest form of generosity."
                        annotation="Meaning: Paying attention to another person is an important and valuable act that shows respect and care. In today's world, where people are often distracted by many things, attention becomes especially valuable."
                    />
                    <Quote_with_annotation
                        quote="What you pay attention to defines your reality."
                        annotation="Meaning: Our attention shapes our impressions and perception of the world. What we focus on influences our mood, goals, and actions."
                    />
                    <Quote_with_annotation
                        quote="Most people listen not to understand, but to reply."
                        annotation="Meaning: Attention in communication is often lacking because people concentrate more on what to say next rather than truly understanding the speaker."
                    />
                    <Quote_with_annotation
                        quote="Attention is energy that feeds what it is directed toward."
                        annotation="Meaning: What we give our attention to—whether work, relationships, or hobbies—receives our time and energy. Therefore, it is important to focus on truly important things."
                    />
                    <Quote_with_annotation
                        quote="Where there is attention, there is success."
                        annotation="Meaning: A person achieves success in areas where they focus their attention and efforts. Concentrating on a goal helps to achieve it."
                    />
                </div>
            </Section>

            {/* Attention in Science and Psychology */}
            <Section title="Attention in Science and Psychology">
                <ul className="space-y-6">
                    <Base_card
                        title="Attention in Psychology"
                        description="In psychology, attention is studied as one of the key cognitive processes. It is essential for perception, memory, and learning. Scientists study how people allocate their attention, what factors distract it, and how to improve concentration."
                        icon="🧠"
                    />
                    <Base_card
                        title="Concentration and Memory"
                        description="Attention is closely related to memory. The more attention a person pays to information, the better it is remembered. This is especially important when learning new material."
                        icon="📚"
                    />
                    <Base_card
                        title="Attention Disorders"
                        description="Attention disorders can manifest in various forms, such as Attention Deficit Hyperactivity Disorder (ADHD). These conditions require a special approach to learning and work."
                        icon="🚨"
                    />
                    <Base_card
                        title="Training Attention"
                        description="Attention can be developed through special exercises. For example, mindfulness meditation helps people learn to focus on the present moment and improve their ability to maintain attention."
                        icon="🧘"
                    />
                </ul>
            </Section>

            {/* Attention in Everyday Life */}
            <Section title="Attention in Everyday Life">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Attention at Work:</Highlight> The ability to focus on tasks is a key skill for productive work. Distractions such as social media or noise reduce efficiency.
                        <br />
                        <i>"To increase productivity at work, it is important to minimize distractions and focus on the main task."</i>
                    </li>
                    <li>
                        <Highlight>Attention in Relationships:</Highlight> Paying attention to the needs and feelings of others helps to build strong and trusting relationships.
                        <br />
                        <i>"Paying attention to loved ones strengthens emotional bonds and improves mutual understanding."</i>
                    </li>
                    <li>
                        <Highlight>Attention to Yourself:</Highlight> An important part of life is being able to pay attention to your own needs and well-being. This helps maintain balance and improve the quality of life.
                        <br />
                        <i>"Paying regular attention to your health and emotional well-being is the key to a harmonious life."</i>
                    </li>
                </ul>
            </Section>
        </div>
    );
}