import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import tokenImage from "@/app/[locale]/(app)/linguistics/words/token/assets/img/token.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Token() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Token</h1>

            {/* Etymology of the word "Token" */}
            <Section title="Etymology of the word 'Token'">
                <p className="paragraph">
                    The word <Highlight>token</Highlight> comes from the English language (<i>token</i>), where it means "sign", "symbol", "coin", or "an item granting certain rights". The etymology of this word traces back to Old English *tācen* (meaning sign or symbol). In today’s context, the word "token" is used across various technical, economic, and digital domains.
                </p>
                <p className="paragraph">
                    1. <Highlight>English roots:</Highlight> The English word <i>token</i> originally referred to an item or symbol used as proof of something (for example, a travel token or a symbol of trust).
                </p>
                <p className="paragraph">
                    2. <Highlight>Modern usage:</Highlight> In contemporary language, "token" is often seen in digital technologies, cryptocurrencies, and data security contexts, where it represents a digital object or tool that grants access or ownership rights.
                </p>
            </Section>

            {/* Interactive Image */}
            <Interactive_Image src={tokenImage} alt={"Token"} width={500} height={500} />

            {/* Meaning of the word "Token" */}
            <Section title="Meaning of the word 'Token'">
                <p className="paragraph">
                    <Highlight>Token</Highlight> is a term used in various contexts, and its meaning can vary depending on the field of application. In general, a token is an object (physical or digital) that represents a right to something or is used for identification and authentication.
                </p>

                {/* List of Token Meanings */}
                <ul className="unordered_list">
                    <li>
                        <Highlight>Token in cryptocurrency:</Highlight> In blockchain technologies, a token is a digital asset that represents ownership of a resource or asset (e.g., cryptocurrency, digital property, or service).
                        *"Tokens can represent cryptocurrencies or digital assets such as NFTs."*
                    </li>
                    <li>
                        <Highlight>Token in security:</Highlight> In information security, a token is a unique string of data (a key or marker) used for user authentication or system access.
                        *"Upon login, a token is issued to the user to authenticate them during the session."*
                    </li>
                    <li>
                        <Highlight>Token in programming:</Highlight> In programming, a token is an element of source code that represents the smallest meaningful unit of the language (e.g., an operator, keyword, or variable).
                        *"The parser breaks down the code into tokens for further processing."*
                    </li>
                    <li>
                        <Highlight>Token in payment systems:</Highlight> In electronic payment systems, a token is a temporary and secure replacement for real card data used in transactions.
                        *"Tokenization systems protect card data during online payments by replacing them with a unique token."*
                    </li>
                    <li>
                        <Highlight>Token as a physical object:</Highlight> Traditionally, a token can also mean a physical object, such as a coin used to gain access to a service (e.g., a metro token).
                        *"A metro token is an example of a physical token used for access to a ride."*
                    </li>
                </ul>
            </Section>

            {/* Examples of Token Usage */}
            <Section title="Examples of Token Usage">
                <ul className="space-y-6">
                    <Base_card
                        title="Token in Blockchain and Cryptocurrencies"
                        description="On blockchain platforms, tokens can represent both cryptocurrencies (e.g., Bitcoin) and digital assets like NFTs (non-fungible tokens)."
                        icon="🔗"
                    />
                    <Base_card
                        title="Tokenization of Payment Data"
                        description="Tokenization is the process of replacing sensitive data (such as a card number) with a unique identifier — a token, which can be safely transmitted between systems."
                        icon="💳"
                    />
                    <Base_card
                        title="Tokens for Authentication"
                        description="In information systems, tokens are used for user authentication. After successful login, the user is granted a token that verifies their identity during the session."
                        icon="🔐"
                    />
                    <Base_card
                        title="Tokens in Programming"
                        description="In compilers and interpreters, tokens are the building blocks of code that the compiler reads to understand how to execute a program."
                        icon="💻"
                    />
                    <Base_card
                        title="Tokens as Coins"
                        description="In everyday life, tokens are used at events, attractions, or in public transport. They represent physical tokens that grant access to a specific service."
                        icon="🚇"
                    />
                </ul>
            </Section>

            {/* Quotes About Tokens */}
            <Section title="Quotes About Tokens">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Tokens are the building blocks of modern digital economies."
                        annotation="This illustrates the importance of tokens in digital finance and blockchain systems."
                    />
                    <Quote_with_annotation
                        quote="Tokenization is the future of secure transactions."
                        annotation="This highlights how tokenization enhances the security of online payments and data transmission."
                    />
                    <Quote_with_annotation
                        quote="Tokens represent the shift from traditional assets to digital ones."
                        annotation="This shows the growing role of tokens in representing ownership and rights in a digital world."
                    />
                </div>
            </Section>

            {/* Types of Tokens */}
            <Section title="Types of Tokens">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Tokens in cryptocurrency:</Highlight>
                        <ul className="unordered_list">
                            <li><Highlight>Financial tokens:</Highlight> Represent cryptocurrency or digital currency, used for payments or investment (e.g., Bitcoin, Ethereum).</li>
                            <li><Highlight>Utility tokens:</Highlight> Used to access certain services or platforms (e.g., tokens that allow users to engage with decentralized applications).</li>
                            <li><Highlight>NFT (non-fungible tokens):</Highlight> Unique digital assets that represent ownership of specific items, such as digital art or collectibles.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Tokens in security:</Highlight>
                        <ul className="unordered_list">
                            <li><Highlight>One-time tokens:</Highlight> One-time passwords (OTP), generated for each session or transaction.</li>
                            <li><Highlight>JWT (JSON Web Tokens):</Highlight> A token format commonly used for secure data exchange between a client and a server.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Tokens in payments:</Highlight>
                        <ul className="unordered_list">
                            <li><Highlight>Card tokens:</Highlight> A replacement for bank card data, used to conduct transactions securely.</li>
                            <li><Highlight>Mobile payment tokens:</Highlight> Used in mobile payment systems such as Apple Pay or Google Pay.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Tokens in programming:</Highlight>
                        <ul className="unordered_list">
                            <li><Highlight>Keywords:</Highlight> Such as `if`, `for`, `while`.</li>
                            <li><Highlight>Operators:</Highlight> Such as `+`, `-`, `=`.</li>
                            <li><Highlight>Identifiers:</Highlight> Variables, functions, classes, and other elements in code that have unique names.</li>
                        </ul>
                    </li>
                </ul>
            </Section>

            {/* Benefits of Using Tokens */}
            <Section title="Advantages of Using Tokens">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Security:</Highlight> Tokens replace sensitive data (e.g., passwords or credit card numbers) with temporary identifiers, reducing the risk of data breaches.
                        *"Using tokens in payment systems significantly increases the security of transactions."*
                    </li>
                    <li>
                        <Highlight>Flexibility:</Highlight> Tokens can be used in various systems for authentication, authorization, and access to resources without transmitting real data.
                        *"OAuth tokens allow users to securely interact with APIs without sharing passwords."*
                    </li>
                    <li>
                        <Highlight>Scalability:</Highlight> In blockchain systems, tokens can represent different assets or rights, making them versatile for a wide range of applications, from finance to games and art.
                        *"Tokenization of assets opens new opportunities for investors and developers."*
                    </li>
                    <li>
                        <Highlight>Ease of integration:</Highlight> Many tokenization systems easily integrate with existing technologies, simplifying their adoption.
                        *"JWT tokens are easy to use for securing web applications."*
                    </li>
                </ul>
            </Section>
        </div>
    );
}