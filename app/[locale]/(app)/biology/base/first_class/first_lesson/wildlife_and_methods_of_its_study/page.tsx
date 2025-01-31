import {Highlight} from "@/app/ui/math/components/Highlight";
import React from "react";
import {Section} from "@/app/ui/math/components/Section";


const Wildlife_and_methods_of_its_study = () => {
  return (
      <Section title="Живая природа и методы её изучения" parity>
          <p className="paragraph_base">
              <Highlight>Живая природа</Highlight> — это мир, наполненный удивительными
              организмами: от мельчайших бактерий до гигантских деревьев и животных. Каждая
              форма жизни уникальна и играет важную роль в поддержании баланса на планете.
          </p>

          <h3 className="header_h3">§1. Живые организмы</h3>
          <p className="paragraph_base">
              Живой организм — это сложная система, способная к обмену веществ, росту,
              размножению и взаимодействию с окружающей средой. Основные признаки жизни:
          </p>
          <ul className="unordered_list">
              <li className="unordered_list_li">
                  <Highlight>Обмен веществ</Highlight> — получение и использование энергии.
              </li>
              <li className="unordered_list_li">
                  <Highlight>Рост и развитие</Highlight> — изменение размеров и усложнение
                  структуры.
              </li>
              <li className="unordered_list_li">
                  <Highlight>Размножение</Highlight> — воспроизведение себе подобных.
              </li>
              <li className="unordered_list_li">
                  <Highlight>Ответ на раздражители</Highlight> — реакция на изменения в
                  окружающей среде.
              </li>
          </ul>
          <p className="paragraph_base">
              Слово "организм" происходит от латинского <Highlight>"organismus"</Highlight>, что
              означает "целостность", "упорядоченность". Это подчёркивает, что жизнь — это не
              хаотичный процесс, а гармоничное взаимодействие частей.
          </p>

          <h3 className="header_h3">Интересный факт</h3>
          <p className="paragraph_example">
              Самая большая живая структура на Земле — это грибница опёнка в Орегоне, США.
              Её возраст превышает <Highlight>2400 лет</Highlight>, а площадь — более 9
              квадратных километров!
          </p>
      </Section>
  )
}

export default Wildlife_and_methods_of_its_study