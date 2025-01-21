import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function ArithmeticBasics() {
    return (
        <>
            {/* Числовые и буквенные выражения */}
            <Section title="Числовые и буквенные выражения" parity>
                <p className="paragraph_base">
                    <Highlight>Числовые выражения</Highlight> — это математические записи,
                    которые содержат числа и арифметические действия (сложение, вычитание,
                    умножение, деление). Например:
                    <Highlight> 2 + 4 = 6</Highlight>.
                </p>

                <p className="paragraph_base">
                    Давайте взглянем на это выражение через призму <Highlight>компонентов</Highlight>.
                    В математике <Highlight>компоненты</Highlight> — это части выражения, между которыми
                    выполняется действие. Например, в выражении <Highlight>2 + 4</Highlight> числа
                    <Highlight>2</Highlight> и <Highlight>4</Highlight> являются компонентами, а действие
                    между ними — это сложение.
                </p>

                <h3 className="header_h3 mt-4">Научный взгляд</h3>
                <p className="paragraph_base">
                    В математике компонентами называют элементы, из которых состоит
                    выражение или математическая структура. Например:
                </p>
                <ul className="unordered_list">
                    <li>
                        В сложении <Highlight>2 + 4</Highlight> компоненты — это числа
                        <Highlight>2</Highlight> и <Highlight>4</Highlight>.
                    </li>
                    <li>
                        В уравнении <Highlight>a + b = c</Highlight> компоненты —
                        <Highlight>a</Highlight>, <Highlight>b</Highlight> и
                        <Highlight>c</Highlight>.
                    </li>
                    <li>
                        В векторе <Highlight>(x, y, z)</Highlight> компоненты —
                        <Highlight>x</Highlight>, <Highlight>y</Highlight> и
                        <Highlight>z</Highlight>.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Компоненты — это основа любого математического действия, без них
                    невозможно ни вычисление, ни анализ.
                </p>

                <h3 className="header_h3 mt-4">Этимология и история</h3>
                <p className="paragraph_base">
                    Слово <Highlight>"компонента"</Highlight> происходит от латинского
                    <Highlight>"componere"</Highlight>, что означает "составлять", "собирать
                    вместе". Исторически термин "компонента" использовался для обозначения
                    частей, которые объединяются в целое. В математике это понятие стало
                    популярным в XIX веке, когда математики начали активно изучать
                    структуры, такие как векторы, матрицы и уравнения.
                </p>
                <p className="paragraph_base">
                    Например, в векторной алгебре каждую величину в наборе значений стали
                    называть компонентой, чтобы подчеркнуть её роль как части структуры.
                    Таким образом, термин "компонента" стал универсальным языком для
                    описания частей чего-либо — будь то числа, переменные или даже
                    элементы формулы.
                </p>

                <h3 className="header_h3 mt-4">Как воспринимать этот термин</h3>
                <p className="paragraph_base">
                    Представьте, что вы собираете пазл. Каждый фрагмент пазла — это
                    <Highlight>компонента</Highlight>. Только объединив их вместе, вы
                    получаете целую картину. Точно так же в математике компоненты —
                    это части, которые объединяются для выполнения действия. Не нужно
                    пугаться этого термина — он просто помогает структурировать наши
                    знания.
                </p>

                <p className="paragraph_base">
                    Например, если мы видим выражение <Highlight>2 + 4 = 6</Highlight>, мы
                    можем сказать: "Числа 2 и 4 — это компоненты сложения, а результат 6 —
                    это их сумма". Использование такого подхода помогает глубже понять
                    процесс вычисления.
                </p>

                <h3 className="header_h3 mt-4">Практическое применение</h3>
                <p className="paragraph_base">
                    Понимание компоненты полезно не только в математике, но и в
                    программировании, физике и многих других областях. Например:
                </p>
                <ul className="unordered_list">
                    <li>
                        В программировании компоненты являются базой для разделения
                        кода на части, которые можно использовать повторно.
                    </li>
                    <li>
                        В физике компоненты используются для описания сил, направлений и
                        векторов.
                    </li>
                </ul>

                <p className="paragraph_base">
                    Таким образом, понимание термина "компонента" помогает не только в
                    математике, но и в повседневной жизни, делая сложное простым и
                    доступным.
                </p>
            </Section>
        </>
    );
}

export default ArithmeticBasics;