import {MorphemeWordFragment} from "@/app/@graphql/@generated/graphql";
import React from "react";
import {
    DynamicTextWithArc
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/morphemes/DynamicTextWithArc";
import {
    DynamicTextWithPeak
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/morphemes/DynamicTextWithPeak";
import {
    DynamicTextWithBox
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/morphemes/DynamicTextWithBox";
import {
    DynamicTextWithLine
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/morphemes/DynamicTextWithLine";

export function Morpheme({prefix, root, suffix, end}: MorphemeWordFragment){

    return <p className={"m-3 mr-10"}>
        {
            (prefix)
                ? prefix.map((el , index) => (
                    <DynamicTextWithLine key = {index}  text={el}/>
                ))
                : ""
        }
        {
            (root)
                ? root.map((el , index) => (
                    <DynamicTextWithArc key = {index}  text={el}/>
                ))
                : ""
        }
        {
            (suffix)
                ? suffix.map((el , index) => (
                    <DynamicTextWithPeak key = {index}  text={el}/>
                ))
                : ""
        }
        {
            (end)
                ? end.map((el , index) => (
                    <DynamicTextWithBox key = {index}  text={el}/>
                ))
                : <DynamicTextWithBox />
        }
    </p>
}