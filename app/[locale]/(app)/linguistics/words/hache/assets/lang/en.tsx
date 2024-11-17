import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import hacheImage from "./../img/hache.jpg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Hache() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Haché: Etymology, Meaning, and Examples</h1>

            {/* Etymology */}
            <Section title="Etymology of the word 'haché'">
                <p className="paragraph">
                    The word <Highlight>haché</Highlight> comes from the French word <Highlight>haché</Highlight>, which means "chopped" or "minced". It is related to the verb <Highlight>hacher</Highlight>, which translates to "cut into small pieces". This term is used in cooking to describe the technique of preparing dishes from finely chopped ingredients.
                </p>
                <p className="paragraph">
                    <Highlight>French root:</Highlight> The French word <Highlight>hacher</Highlight> derives from the Latin word <Highlight>hassiare</Highlight>, which also means "to chop". In culinary terms, it refers to the method of processing ingredients such as meat or vegetables.
                </p>
                <p className="paragraph">
                    <Highlight>Borrowing into Russian:</Highlight> The word <Highlight>haché</Highlight> was borrowed into the Russian language in the 18th–19th centuries through French cuisine, which had a significant influence on Russian culture and culinary traditions at the time.
                </p>
            </Section>

            {/* Interactive Image */}
            <Interactive_Image src={hacheImage} alt={"Haché"} width={500} height={500} />

            {/* Meaning */}
            <Section title="Meaning of the word 'haché'">
                <p className="paragraph">
                    <Highlight>Haché</Highlight> refers to a dish made from finely chopped or minced ingredients, most often meat, but it can also include vegetables or fish. The main idea of haché is the use of chopped products, which are then fried, stewed, or baked.
                </p>
                <p className="paragraph">
                    Examples of haché include meat haché, vegetable haché, and fish haché, depending on the main ingredient.
                </p>
            </Section>

            {/* Usage Examples */}
            <Section title="Examples of using the word 'haché'">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Beef haché:</Highlight> Finely chopped beef fried with onions and garlic. It is often served with a side of potatoes or rice.
                    </li>
                    <li>
                        <Highlight>Vegetable haché:</Highlight> A vegetarian option with eggplants, zucchini, and tomatoes, fried in olive oil.
                    </li>
                    <li>
                        <Highlight>Chicken haché:</Highlight> Finely chopped pieces of chicken, fried with onions and spices.
                    </li>
                </ul>
            </Section>

            {/* Factors */}
            <Section title="Factors influencing the preparation of haché">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Chopping technique:</Highlight> Proper chopping of ingredients is a key factor for haché. Fine chopping allows the ingredients to better absorb each other's flavors.
                    </li>
                    <li>
                        <Highlight>Type of meat:</Highlight> Different types of meat can be used for haché, including beef, pork, or chicken. Vegetarian options are also popular.
                    </li>
                    <li>
                        <Highlight>Spices and seasonings:</Highlight> The use of various spices such as garlic, onion, pepper, and herbs gives the dish a rich flavor.
                    </li>
                </ul>
            </Section>

            {/* Haché in Culture */}
            <Section title="Haché in Culture and World Cuisine">
                <ul className="space-y-6">
                    <Base_card
                        title="French Cuisine"
                        description="In French cuisine, haché is considered a classic dish, mainly made from chopped meat with vegetables."
                        icon="🍽️"
                    />
                    <Base_card
                        title="Russian Cuisine"
                        description="In Russian cuisine, dishes similar to haché include stuffed vegetables and cabbage rolls, where minced meat is used."
                        icon="🥘"
                    />
                    <Base_card
                        title="Asian Cuisine"
                        description="In Asian cuisine, dishes with finely chopped ingredients, such as Chinese stir-fry, are also popular."
                        icon="🍜"
                    />
                </ul>
            </Section>

            {/* Quotes */}
            <Section title="Quotes about haché and their meaning">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Haché is not just chopping, it's a symphony of flavors combined in one dish."
                        annotation="Meaning: It's not only about finely chopping the ingredients but how they are combined to create a harmony of flavors."
                    />
                    <Quote_with_annotation
                        quote="Haché is the art of turning simple ingredients into something exquisite."
                        annotation="Meaning: Even ordinary ingredients can become a remarkable dish if prepared with skill and creativity."
                    />
                    <Quote_with_annotation
                        quote="Chopped or minced doesn't mean simple — the magic of haché lies in the details."
                        annotation="Meaning: Careful chopping and the right combination of flavors make haché a complex and interesting dish."
                    />
                </div>
            </Section>
        </div>
    );
}