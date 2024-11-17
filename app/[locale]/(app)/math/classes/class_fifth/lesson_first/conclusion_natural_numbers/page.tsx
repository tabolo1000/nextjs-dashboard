import {Audio_button} from "@/app/ui/math/components/audio_player/Audio_button";




export default function Conclusion_natural_numbers() {
    return <div className="mb-8">
        <h1 className="header_h1">Заключение</h1>
        <p className="mb-4">
            Натуральные числа и десятичная система счисления — это основа всей математической науки.
            Понимание таких понятий как <strong>разряды</strong>, <strong>классы</strong>, <strong>однозначные и
            многозначные числа</strong> позволяет эффективно оперировать числами, записывать и читать их.
            <strong>Нуль</strong> играет ключевую роль в обозначении отсутствия разрядов и является важным элементом
            нашей числовой системы.
        </p>
        <Audio_button path={"/math/class_fifth/lesson_first/conclusion_natural_numbers/conclusion_natural_numbers_record"}/>
    </div>
}