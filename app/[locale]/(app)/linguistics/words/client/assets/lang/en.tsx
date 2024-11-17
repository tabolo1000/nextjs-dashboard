import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import clientImage from "./../img/client.jpeg"; // Placeholder for an image related to "Client"
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Client() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Client: Etymology, Meaning, and Examples</h1>

            {/* Etymology */}
            <Section title="Etymology of the word 'client'">
                <p className="paragraph">
                    The word <Highlight>client</Highlight> comes from the Latin <Highlight>cliens</Highlight>, which meant "dependent" or "protege." In Ancient Rome, a <Highlight>cliens</Highlight> was a person who sought protection and support from a more influential person called a patron. Clients turned to patrons for protection and assistance, in return offering various services.
                </p>
                <p className="paragraph">
                    <Highlight>Latin origin:</Highlight> The Latin word <Highlight>cliens</Highlight> referred to someone in a subordinate social position who needed help or patronage. These relationships were an important part of Roman social structure — clients received protection, and in return, patrons gained loyalty and support.
                </p>
                <p className="paragraph">
                    <Highlight>French and Latin borrowing:</Highlight> In the Middle Ages, the word <Highlight>client</Highlight> came to refer to a person seeking help or services and was adopted into other languages, including Russian, where it gained its modern meaning of "customer" or "client."
                </p>
            </Section>

            {/* Interactive Image */}
            <Interactive_Image src={clientImage} alt={"Client"} width={500} height={500} />

            {/* Meaning */}
            <Section title="Meaning of the word 'client'">
                <p className="paragraph">
                    In modern usage, a <Highlight>client</Highlight> is a person or organization that uses services or purchases goods from another organization or individual. Clients can be buyers, users of services, customers, or consumers of products.
                </p>
                <p className="paragraph">
                    <Highlight>Main meanings of the word 'client':</Highlight>
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Buyer:</Highlight> A person who purchases goods or services from a company or seller.
                        <br />
                        <i>"The store always strives to improve service for its clients."</i>
                    </li>
                    <li>
                        <Highlight>Customer:</Highlight> An individual or company that enters into a contract for services or work.
                        <br />
                        <i>"The architects designed the project according to the client's wishes."</i>
                    </li>
                    <li>
                        <Highlight>Service consumer:</Highlight> A person who seeks professional services (e.g., legal, medical).
                        <br />
                        <i>"The lawyer always strives to protect the interests of their client."</i>
                    </li>
                    <li>
                        <Highlight>Regular client:</Highlight> A person who frequently uses services or purchases products from the same company.
                        <br />
                        <i>"Regular clients receive discounts and bonuses."</i>
                    </li>
                </ul>
            </Section>

            {/* Usage Examples */}
            <Section title="Examples of using the word 'client'">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Client in retail:</Highlight> In stores or retail outlets, clients are buyers who purchase goods.
                        <br />
                        <i>"This store is very popular among clients due to the high quality of its products."</i>
                    </li>
                    <li>
                        <Highlight>Client in the service sector:</Highlight> In sectors like banking, insurance, and law firms, clients are individuals or companies that use their services.
                        <br />
                        <i>"The bank offers favorable loan conditions to its clients."</i>
                    </li>
                    <li>
                        <Highlight>Client in IT:</Highlight> In information technology, a "client" can refer to software or a device that receives services from a server, such as an email client or web client.
                        <br />
                        <i>"This program is an email client that allows receiving and sending electronic messages."</i>
                    </li>
                </ul>
            </Section>

            {/* Quotes */}
            <Section title="Quotes about clients and their meaning">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="The customer is always right."
                        annotation="Meaning: This well-known saying emphasizes the importance of meeting the client's needs in business. Companies strive to do everything possible to ensure customer satisfaction."
                    />
                    <Quote_with_annotation
                        quote="Without clients, there is no business."
                        annotation="Meaning: The importance of clients to the success of any company cannot be overstated as they are the main source of revenue."
                    />
                    <Quote_with_annotation
                        quote="It's easy to attract a client, but hard to retain them."
                        annotation="Meaning: Companies can easily attract clients through advertising or discounts, but building long-term relationships requires high-quality products or services and attentive customer service."
                    />
                    <Quote_with_annotation
                        quote="Your best client is the one who returns."
                        annotation="Meaning: Regular clients bring more profit than new ones, so it's important to not only attract new clients but also retain existing ones."
                    />
                    <Quote_with_annotation
                        quote="A client is not just a source of income, but a partner with whom you need to work long-term."
                        annotation="Meaning: Building trust and long-term relationships with clients helps a company grow and develop."
                    />
                </div>
            </Section>

            {/* Clients in Business and Marketing */}
            <Section title="Clients in Business and Marketing">
                <ul className="space-y-6">
                    <Base_card
                        title="Client Orientation"
                        description="In modern business, great attention is given to the concept of client orientation — an approach where the needs and interests of clients are prioritized. The idea is that a satisfied client will return and recommend the company to others."
                        icon="📈"
                    />
                    <Base_card
                        title="CRM Systems"
                        description="To manage relationships with clients, companies use CRM (Customer Relationship Management) systems, which help track interactions with clients, improve service levels, and offer personalized solutions."
                        icon="💻"
                    />
                    <Base_card
                        title="Types of Clients"
                        description="Clients can vary — from one-time buyers to regular clients, from large corporate customers to individual consumers. Depending on this, companies develop different strategies for working with them."
                        icon="🛍️"
                    />
                    <Base_card
                        title="Customer Loyalty"
                        description="Loyal clients are those who regularly use a company's products or services and recommend it to others. To increase loyalty, companies often implement loyalty programs, offering bonuses and discounts."
                        icon="🎁"
                    />
                    <Base_card
                        title="Feedback"
                        description="One of the key elements of working with clients is collecting feedback. This helps companies better understand their clients' needs and improve the quality of their services."
                        icon="💬"
                    />
                </ul>
            </Section>

            {/* Clients in Various Fields */}
            <Section title="Clients in Various Fields">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Clients in the financial sector:</Highlight> In banks and financial institutions, clients are individuals or companies who use loans, deposits, or other services.
                        <br />
                        <i>"The bank offers its clients favorable loan terms and high interest rates on deposits."</i>
                    </li>
                    <li>
                        <Highlight>Clients in the legal field:</Highlight> In law firms, clients are individuals or organizations that need legal assistance.
                        <br />
                        <i>"The lawyer always protects their clients' interests in court."</i>
                    </li>
                    <li>
                        <Highlight>Clients in IT:</Highlight> In the IT field, a "client" is software or a device that interacts with a server (e.g., web clients, email clients).
                        <br />
                        <i>"This program serves as a client for remote access to the server."</i>
                    </li>
                    <li>
                        <Highlight>Clients in the hospitality industry:</Highlight> In the hotel and restaurant business, clients are guests who use the services of hotels, restaurants, and other establishments.
                        <br />
                        <i>"The hotel always strives to make its clients' stay as comfortable as possible."</i>
                    </li>
                </ul>
            </Section>
        </div>
    );
}