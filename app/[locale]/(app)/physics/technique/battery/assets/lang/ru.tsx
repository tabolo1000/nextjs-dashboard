import React from "react";
import {BatterySlide} from "@/app/[locale]/(app)/physics/technique/battery/assets/BatterySlide";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";
import battery from "../img/battery.png"
import {Buttery_Header} from "@/app/[locale]/(app)/physics/technique/battery/components/Buttery_Header";
import {
    BasicPrincipleOfBattery
} from "@/app/[locale]/(app)/physics/technique/battery/components/BasicPrincipleOfBattery";
import {StorageConditions} from "@/app/[locale]/(app)/physics/technique/battery/components/StorageConditions";
import {TemperatureInfluence} from "@/app/[locale]/(app)/physics/technique/battery/components/TemperatureInfluence";
import {SerialVsParallel} from "@/app/[locale]/(app)/physics/technique/battery/components/SerialVsParallel";
import {BatteryFormats} from "@/app/[locale]/(app)/physics/technique/battery/components/BatteryFormats";
import {TypesOfBatteries} from "@/app/[locale]/(app)/physics/technique/battery/components/TypesOfBatteries";
import {ManufacturerReview} from "@/app/[locale]/(app)/physics/technique/battery/components/ManufacturerReview";
import {ColdConditions} from "@/app/[locale]/(app)/physics/technique/battery/components/ColdСonditions";
import {CopperDeposition} from "@/app/[locale]/(app)/physics/technique/battery/components/CopperDeposition";
import {ConclusionOnBattery} from "@/app/[locale]/(app)/physics/technique/battery/components/ConclusionOnBatteries";






const BatteryAndCopperArticle: React.FC = () => {
    return (
        <div className="main_block_task" >
            {/* Заголовок статьи */}
            <Buttery_Header />

            {/* Основной принцип работы батареек */}
            <BasicPrincipleOfBattery />

            {/* Химические реакции в батарейке */}
            <BatterySlide />

            {/* Условия хранения */}
            <StorageConditions />

            {/* Влияние температуры */}
            <TemperatureInfluence />

            {/* Параллельное и последовательное соединение */}
            <SerialVsParallel/>

            {/* Форматы батареек */}
            <BatteryFormats />

            {/* Основной блок: Батарейки и аккумуляторы */}
            <ManufacturerReview />

            {/* Виды батареек */}
            <TypesOfBatteries />

            {/* Почему аккумулятор разряжается быстрее на холоде? */}
            <ColdConditions />

            {/* Осаждение меди в разных условиях */}
            <CopperDeposition />

            {/* Заключение */}
            <ConclusionOnBattery />
        </div>
    );
};

export default BatteryAndCopperArticle;






// Компонент для отображения таблицы преимуществ и недостатков
export const Table: React.FC<{ items: string[]; title: string }> = ({ items, title }) => (
    <div className="mt-4">
        <h5 className="header_h5">{title}</h5>
        <ul className="unordered_list">
            {items.map((item, index) => (
                <li className={"unordered_list_li paragraph_example"} key={index}>{item}</li>
            ))}
        </ul>
    </div>
);