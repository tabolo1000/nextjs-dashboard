import {Section} from "@/app/ui/math/components/Section";
import {Base_card} from "@/app/ui/math/components/Base_card";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Highlight} from "@/app/ui/math/components/Highlight";

export default async function Authentication() {

    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Etymology of the word "Authentication"
            </h1>

            <Section title="Etymology">
                <p className="paragraph">
                    The word <Highlight>authentication</Highlight> comes from the Latin <em>authenticus</em>, which in turn goes back to the Greek <em>αὐθεντικός</em> (<em>authentikos</em>), meaning <strong>genuine</strong>, <strong>true</strong>. The suffix <Highlight>-tion</Highlight> indicates a process or action. Thus, <Highlight>authentication</Highlight> literally means the process of confirming the authenticity or truth of something.
                </p>
            </Section>

            <Section title="Morphemic Parsing" parity>
                <ul className="unordered_list">
                    <li>
                        <strong>Authenti-</strong> — from the Greek root <em>authentikos</em>, meaning genuine.
                    </li>
                    <li>
                        <strong>-fication</strong> — a Latin suffix denoting the process, action, or accomplishment of something.
                    </li>
                </ul>
            </Section>

            <Section title="Historical Context" parity>
                <p className="paragraph">
                    The term <Highlight>authentication</Highlight> began to be actively used in the middle of the 20th century with the development of computer technology and information systems. Initially, it denoted the process of confirming the authenticity of a person or document, but with the spread of the internet and digital technologies, the importance of authentication has increased.
                </p>
                <p className="paragraph">
                    Before the advent of modern computer systems, <Highlight>authentication</Highlight> was of greater importance in legal and administrative contexts, where confirming the authenticity of signatures, manuscripts, and documents played an important role. In the digital age, the authentication process has come to be applied in the context of access to systems, services, and data, such as user accounts, banking systems, corporate networks, and other secure resources.
                </p>
            </Section>

            <Section title="Modern Meaning">
                <p className="paragraph">
                    In today's world, <Highlight>authentication</Highlight> is the process of verifying the identity of a person or object, usually for the purpose of granting access to a particular system, service, or information. Authentication is a critical element of security in information technology, protecting data from unauthorized access.
                </p>
            </Section>

            <Section title="Authentication Methods" parity>
                <ul className="unordered_list">
                    <li>
                        <strong>Passwords and PINs</strong> — the most common method based on knowledge of certain information.
                    </li>
                    <li>
                        <strong>Biometric authentication</strong> — using unique biometric data such as fingerprints, iris, voice, or face.
                    </li>
                    <li>
                        <strong>Token-based authentication</strong> — the use of physical or digital devices, such as smart cards or special applications that generate one-time codes.
                    </li>
                    <li>
                        <strong>Multi-factor authentication (MFA)</strong> — combining multiple methods to increase security (e.g., a combination of password and fingerprint).
                    </li>
                </ul>
            </Section>

            <Section title="Fun Fact">
                <p className="paragraph">
                    Multi-factor authentication (MFA) has become the security standard for many online services and applications. Implementing MFA significantly reduces the risk of unauthorized access, as it becomes much more difficult for an attacker to gain control of an account by requiring not only knowledge of the password, but also confirmation through a second factor, such as receiving a one-time code on a cell phone.
                </p>
            </Section>

            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Authentication is the first line of defense in the fight for data security."
                        annotation="The quote emphasizes the importance of authentication in securing information."
                    />
                    <Quote_with_annotation
                        quote="Without reliable authentication, the entire security system can be jeopardized."
                        annotation="The key role of authentication in a comprehensive security system is emphasized here."
                    />
                    <Quote_with_annotation
                        quote="Authentication is the process that confirms that you are who you say you are and gives you access to the right resources."
                        annotation="The quote explains the basic purpose of the authentication process."
                    />
                    <Quote_with_annotation
                        quote="Multi-factor authentication is not a luxury, but a necessary measure in a world of digital threats."
                        annotation="The quote emphasizes the importance of using multi-factor authentication to protect data."
                    />
                    <Quote_with_annotation
                        quote="A password is just the beginning, authentication is a process that must be layered."
                        annotation="It says that a password alone is not enough to provide a strong defense."
                    />
                </div>
            </Section>

            <Section title="Examples of Use of the Word 'Authentication'">
                <ul className="space-y-6">
                    <Base_card
                        title="Information Security"
                        description="Authenticating users through passwords and biometrics helps protect data from unauthorized access - digital authentication plays an important role in data protection."
                        icon="🔒"
                    />
                    <Base_card
                        title="Online Banking"
                        description="Two-factor authentication is often used to access bank accounts to increase security - banks are implementing MFA to protect customers from fraud."
                        icon="🏦"
                    />
                    <Base_card
                        title="Social Media"
                        description="Many social networks offer authentication via one-time codes to prevent accounts from being hacked - social platforms use additional security measures."
                        icon="📱"
                    />
                    <Base_card
                        title="Corporate Systems"
                        description="In corporate systems, multi-factor authentication can prevent sensitive information from being leaked - companies use sophisticated systems to protect data."
                        icon="💼"
                    />
                    <Base_card
                        title="Physical Security"
                        description="Biometric authentication is used in access control systems to secure buildings and facilities - biometrics are used to identify employees and visitors in secure buildings."
                        icon="🏢"
                    />
                    <Base_card
                        title="Electronic Signature"
                        description="Electronic signature is one method of authenticating the authenticity of documents in digital systems - authentication of documents is necessary for legal validity."
                        icon="✍️"
                    />
                    <Base_card
                        title="Mobile Devices"
                        description="Many smartphones include biometric authentication features such as fingerprint or facial scanning - modern phones use biometrics to secure access."
                        icon="📲"
                    />
                    <Base_card
                        title="Online Stores"
                        description="Online stores often require authentication before payment confirmation to protect against fraud - authentication is important for secure online transactions."
                        icon="🛒"
                    />
                    <Base_card
                        title="Data Encryption"
                        description="Authentication is the first step before data encryption to ensure that the user is authorized to access - encryption is closely tied to authentication processes."
                        icon="🔐"
                    />
                    <Base_card
                        title="Government Services"
                        description="Digital certificate authentication is required when submitting documents through government portals - in government systems, proving identity through digital certificates ensures security."
                        icon="📝"
                    />
                </ul>
            </Section>

            <Audio_Navigate
                path={"/words/authentication/authentication.record"}
                to={{
                    nextTask: "./cohort",
                    nextExercise: "",
                }}
            />
        </div>
    );
}