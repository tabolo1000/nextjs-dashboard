import { Section } from "@/app/ui/math/components/Section";
import Term from "@/app/ui/math/components/сopywriting/Term";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";
import compressor from "../img/compressor.webp";
import evaporator from "../img/evaporator.webp";
import refrigerant from "../img/refrigerant.jpg";
import capillary_tube from "../img/capillary_tube.webp";
import condenser from "../img/condenser.jpg";
import schema from "../img/schema.jpg";
import Link from "next/link";
import {pathWords} from "@/app/lib/path";

export default function FridgeExplanation() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                How a Refrigerator Works
            </h1>
            <Section title={"The Magic of Coolness at Home"} parity>
                <p className="paragraph">
                    Imagine a summer day: the heat is oppressive, the sun is blazing... And then you open the fridge door, feeling the fresh, cool air envelop you. Pure magic! But, strangely enough, the "magic" of the fridge is not that it fills up with cold air from the outside. In fact, it does something quite the opposite: <strong>it pulls heat out</strong> from the food and releases it into the surrounding air.
                </p>
            </Section>

            <Section title={"The Magic of Cooling: How Does a Refrigerator Create Cold?"}>
                <p className="paragraph">
                    When you first hear that a refrigerator doesn't "create" cold but <strong>removes heat</strong>, it may seem counterintuitive. But this process is not only simple but also ingenious! Let's find out what lies behind it.
                </p>



                <h3 className="header_h3">The Main Components of the Refrigeration System</h3>
                <ul className="unordered_list">
                    <li>
                        <Link href={"/linguistics/words/compressor"}><Term>Compressor</Term></Link>
                        — the heart of the refrigerator. It pumps and compresses the refrigerant.

                    </li>
                    <li>
                        <Link href={`${pathWords}/capacitor`}><Term>Condenser</Term></Link>
                        — releases heat into the environment through the back of the refrigerator.

                    </li>
                    <li>
                        <Link href={`${pathWords}/capillary_tube`}><Term>Capillary Tube</Term></Link>
                        — regulates the flow of refrigerant between the condenser and the evaporator.

                    </li>
                    <li>
                        <Link href={`${pathWords}/evaporator`}><Term>Evaporator</Term></Link>
                        — this is where the refrigerant turns into gas, absorbing heat from the food.

                    </li>
                    <li>
                        <Link href={`${pathWords}/coolant`}><Term>Refrigerant</Term></Link>
                        — the main substance that transfers heat in the refrigeration system.
                    </li>
                </ul>
            </Section>

            <Section title={"How a Refrigerator Works: Step by Step"} parity>
                <ol className="order_list paragraph">
                    <li>The compressor starts up and draws in gaseous refrigerant from the evaporator.</li>
                    <li>The compressor compresses the refrigerant, increasing its pressure and temperature.</li>
                    <li>The refrigerant passes through the condenser, where it cools and turns into liquid, releasing heat.</li>
                    <li>A filter cleans the refrigerant before it enters the capillary tube.</li>
                    <li>The liquid refrigerant flows into the evaporator, where the pressure drops, and it turns into gas.</li>
                    <li>In the evaporator, the refrigerant absorbs heat from the food and turns back into gas.</li>
                    <li>The gas returns to the compressor, and the cycle repeats.</li>
                </ol>

                <h3 className="header_h3">Real-Life Example: Evaporation</h3>
                <p className="paragraph">
                    Remember when you step out of a pool on a hot day, and you feel cold, even though it's 30°C outside? Why is that? The water on your skin evaporates, taking heat with it, and you feel cool. This is exactly how your fridge works: the evaporation of refrigerant absorbs heat from the food, rather than adding cold.
                </p>

                <h3 className="header_h3">Refrigerators with a BioFresh Zone</h3>
                <p className="paragraph">
                    Refrigerators with a BioFresh zone maintain a temperature around 0°C and optimal humidity. This compartment helps keep food fresh for longer. Air is drawn by a fan, cooled behind the rear wall, and distributed between the drawers to create ideal conditions.
                </p>
            </Section>

            <Section title={"Conclusion: The Refrigerator is a True Technological Marvel!"}>
                <p className="paragraph">
                    Every time you open the fridge, you witness an amazing process: heat leaves your food and is transferred into the environment. It's not just a machine for storing food — it's a complex device that uses the laws of physics to make your life easier and more comfortable.
                </p>
            </Section>
        </div>
    );
}