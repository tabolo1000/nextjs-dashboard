
/*import introduction_vitamin_k from "@/components/introduction_vitamin_k";
import BloodClotting from "@/components/BloodClotting";
import K1K2Differences from "@/components/K1K2Differences";
import VitaminKSources from "@/components/VitaminKSources";
import VitaminKDeficiency from "@/components/VitaminKDeficiency";*/

import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
            <div className="max-w-4xl w-full bg-white p-10 shadow-lg rounded-lg space-y-10">
               <Link href="introduction_vitamin_k" ></Link>
               {/* <BloodClotting />
                <K1K2Differences />
                <VitaminKSources />
                <VitaminKDeficiency />*/}
            </div>
        </div>
    );
}