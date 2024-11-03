"use client"

import {Natural_numbers} from "@/app/ui/math/classFiveth/Natural_numbers/Natural_numbers";
import React, {useState} from "react";
import DecimalSystem from "@/app/ui/math/classFiveth/Natural_numbers/Decimal_system";

export default function Math () {
  const [topic, setTopic] = useState("Natural_numbers")

    switch (topic) {
        case "Natural_numbers": {
            return <Natural_numbers setTopic={setTopic}/>
        }
        case "Decimal_system": {
            return <DecimalSystem setTopic={setTopic}/>
        }
            default: return <h2> Im not find!</h2>
    }

}