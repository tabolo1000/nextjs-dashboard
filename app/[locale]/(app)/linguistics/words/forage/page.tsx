import {Section} from "@/app/ui/math/components/Section";
import {Highlight} from "@/app/ui/math/components/Highlight";
import {Base_card} from "@/app/ui/math/components/Base_card";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";

export default function Forage() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Этимология слова "Фураж"
            </h1>

            <Section title="Этимология">
                <p className="paragraph">
                    Слово <Highlight>фураж - forage |ˈfɔːrɪdʒ| </Highlight> происходит от французского <i>fourrage</i>, что означало <strong>корм для животных</strong>. Французское слово, в свою очередь, связано с латинским <i>forrago</i>, которое обозначало сено или корм для скота. Изначально это слово употреблялось для обозначения корма, необходимого для лошадей и других животных, особенно в военное время.
                </p>
            </Section>

            <Interactive_Image src={"/audio/words/forage/forage.jpeg"} alt={"forage"} width={400} height={400}/>

            <Section title="Морфемный разбор" parity>
                <ul className="unordered_list">
                    <li>
                        <strong>Корень "фураж"</strong> — обозначает корм для животных.
                    </li>
                </ul>
            </Section>

            <Section title="Исторический контекст" parity>
                <p className="paragraph">
                    В истории слово <Highlight>фураж</Highlight> имело важное значение, особенно в военной сфере. Лошади, как основное средство передвижения и боевой единицы, нуждались в постоянном питании, и обеспечение армии фуражом было критически важной задачей. В армии даже существовали отдельные отряды, ответственные за добычу и заготовку фуража. Недостаток фуража мог привести к ослаблению кавалерийских сил и парализовать передвижение войск. Помимо армии, фураж был необходим и в сельском хозяйстве для содержания скота, особенно в зимнее время, когда пастбища были недоступны.
                </p>
            </Section>

            <Section title="Современное значение">
                <p className="paragraph">
                    В современном языке <Highlight>фураж</Highlight> означает корм для скота, чаще всего для лошадей, а также процесс его заготовки. Это слово используется в сельскохозяйственной сфере для обозначения травяных кормов, сена и других видов пищи, необходимых для поддержания здоровья и силы животных. Важность фуража особенно велика в зимний период, когда животные не могут питаться свежей травой.
                </p>
            </Section>

            <Section title="Интересный факт" parity>
                <p className="paragraph">
                    В некоторых странах, особенно с богатой сельскохозяйственной традицией, до сих пор используются специальные ярмарки и аукционы, где продают <Highlight>фураж</Highlight> для животных. Качество фуража напрямую влияет на здоровье и выносливость скота, поэтому фермеры уделяют большое внимание его заготовке и хранению. Кроме того, в современных условиях фураж может включать не только традиционное сено, но и зерно, комбикормы и другие питательные смеси, которые помогают животным получать все необходимые вещества.
                </p>
            </Section>

            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Фураж для лошади — это её жизненная сила, залог её выносливости и здоровья."
                        annotation="Эта цитата подчёркивает важность качественного корма для здоровья и боеспособности лошади."
                    />
                    <Quote_with_annotation
                        quote="Фураж — это не просто корм, это фундамент здоровья и силы любого сельскохозяйственного животного."
                        annotation="Здесь говорится о том, что правильный корм — основа для продуктивной работы скота."
                    />
                    <Quote_with_annotation
                        quote="Недостаток фуража в армии может стать причиной поражения быстрее, чем недостаток боеприпасов."
                        annotation="Цитата подчёркивает стратегическую важность фуража в военных операциях."
                    />
                    <Quote_with_annotation
                        quote="Фураж — это то, что превращает траву и зерно в силу и выносливость животных."
                        annotation="Здесь подчеркивается, что корм напрямую влияет на физическое состояние животных."
                    />
                    <Quote_with_annotation
                        quote="Запасы фуража — это залог спокойной зимы для фермеров и их скота."
                        annotation="Указывается на важность заготовки корма для успешного содержания скота в зимний период."
                    />
                </div>
            </Section>

            <Section title="Примеры использования слова 'фураж'">
                <ul className="space-y-6">
                    <Base_card
                        title="Заготовка на зиму"
                        description="В деревне заготавливали фураж для зимы — жители деревни собирали и хранили корм для скота на холодное время года."
                        icon="🌾"
                    />
                    <Base_card
                        title="Корм для лошадей"
                        description="Лошади нуждаются в качественном фураже — лошади требуют хорошего корма для поддержания здоровья и сил."
                        icon="🐎"
                    />
                    <Base_card
                        title="Рацион скота"
                        description="Фураж составлял основу рациона животных на ферме — животные на ферме питались в основном кормами, такими как сено и зерно."
                        icon="🐄"
                    />
                    <Base_card
                        title="Военный контекст"
                        description="Солдаты были отправлены в соседние деревни для поиска фуража — военные отправились за кормом для лошадей."
                        icon="⚔️"
                    />
                    <Base_card
                        title="Закупка фуража"
                        description="Фураж для лошадей закупался в больших объёмах — для нужд фермы или армии закупали большие партии корма."
                        icon="🏷️"
                    />
                    <Base_card
                        title="Хранение фуража"
                        description="Зимой фураж необходимо было хранить в сухих условиях — важно было обеспечить правильное хранение корма, чтобы он не испортился."
                        icon="🏚️"
                    />
                    <Base_card
                        title="Зимняя подготовка"
                        description="Без достаточных запасов фуража животные не переживут зиму — запасы корма критически важны для выживания скота в холодное время года."
                        icon="❄️"
                    />
                    <Base_card
                        title="Продажа на ярмарке"
                        description="Крестьяне доставляли фураж на ярмарку для продажи — фермеры продавали излишки корма на рынках."
                        icon="🛍️"
                    />
                    <Base_card
                        title="Проблемы с поставками"
                        description="В армии часто возникали проблемы с поставками фуража — армия сталкивалась с трудностями в обеспечении лошадей кормом."
                        icon="🚚"
                    />
                    <Base_card
                        title="Сельскохозяйственные работы"
                        description="Заготовка фуража начиналась сразу после сбора урожая — после уборки зерновых начинали заготавливать корм для скота."
                        icon="🌾"
                    />
                </ul>
            </Section>

            <Audio_Navigate
                path={"/words/furazh/furazh.record"}
                to={{
                    nextTask: "./directory",
                    nextExercise: "",
                }}
            />
        </div>
    );
}