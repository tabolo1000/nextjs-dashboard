"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, 
    Keyboard,
    Virtual,
    Mousewheel,
    FreeMode,
    Zoom,
    A11y,
    Manipulation, } from "swiper/modules";
import { Section } from "@/app/ui/math/components/Section";
import { Box } from "@mui/material";


export const BatteryReactionsSwiper: React.FC = () => {
    return (
      <Section title="Химические реакции в батарейках">

        <p className="paragraph_example dark:text-gray-400">
          Здесь мы рассмотрим несколько типов батареек, их состав, реакции и
          особенности.
        </p>
  
        {/* Swiper компонент */}
        <Swiper
      

          modules={[
            Navigation,
            Virtual,
            Keyboard,
            Mousewheel,
            FreeMode,
            Zoom,
            A11y,
            Manipulation,
        ]}
        zoom={{ maxRatio: 3 }}
        virtual
        a11y={{
            prevSlideMessage: "Предыдущий слайд",
            nextSlideMessage: "Следующий слайд",
        }}
        freeMode
        mousewheel={{ forceToAxis: true }}
        keyboard={{ enabled: true }}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true}}
        hashNavigation={{ watchState: true }}
        >
          {/* Слайд 1: Батарейка на основе цинка и меди */}
          <SwiperSlide >
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
            className="dark:border-gray-600 relative p-6 border-gray-200 rounded-lg border-2 shadow-lg"
        >
            <div className="slide-content ">
              <h3 className="header_h3 dark:text-blue-400">
                Батарейка на основе цинка и меди
              </h3>
              <p className="paragraph_example dark:text-gray-400">
                Простейший тип батарейки, где используются цинк (анод) и медь
                (катод) с раствором медного купороса (CuSO₄) в качестве
                электролита.
              </p>
              <ul className="unordered_list dark:text-gray-300">
                <li>
                  <strong>На аноде:</strong> Цинк окисляется, отдаёт электроны и
                  превращается в ионы:
                  <div className="annotation_card">
                    <p>Zn → Zn²⁺ + 2e⁻</p>
                  </div>
                </li>
                <li>
                  <strong>На катоде:</strong> Ионы меди из раствора принимают
                  электроны и превращаются в атомы меди:
                  <div className="annotation_card">
                    <p>Cu²⁺ + 2e⁻ → Cu</p>
                  </div>
                </li>
              </ul>
              <p className="paragraph dark:bg-gray-800 dark:text-gray-300">
                В результате цинковая пластина растворяется, а медная пластина
                утолщается за счёт осаждения меди.
              </p>
            </div>
            </Box>
          </SwiperSlide>
  
          {/* Слайд 2: Щелочная батарейка */}
          <SwiperSlide>
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
            className="dark:border-gray-600 relative p-6 border-gray-200 rounded-lg border-2 shadow-lg"
        >
            <div className="slide-content">
              <h3 className="header_h3 dark:text-blue-400">
                Щелочная батарейка
              </h3>
              <p className="paragraph_example dark:text-gray-400">
                Один из самых распространённых типов батареек, где анодом
                выступает порошковый цинк, а катодом — диоксид марганца (MnO₂).
              </p>
              <ul className="unordered_list dark:text-gray-300">
                <li>
                  <strong>На аноде:</strong> Цинк окисляется, превращаясь в ионы:
                  <div className="annotation_card">
                    <p>Zn + 2OH⁻ → ZnO + H₂O + 2e⁻</p>
                  </div>
                </li>
                <li>
                  <strong>На катоде:</strong> Диоксид марганца восстанавливается,
                  принимая электроны:
                  <div className="annotation_card">
                    <p>2MnO₂ + H₂O + 2e⁻ → Mn₂O₃ + 2OH⁻</p>
                  </div>
                </li>
              </ul>
              <p className="paragraph dark:bg-gray-800 dark:text-gray-300">
                Щелочные батарейки имеют высокую ёмкость и стабильное напряжение,
                но их нельзя перезаряжать.
              </p>
            </div>
            </Box>
          </SwiperSlide>
  
          {/* Слайд 3: Литий-ионная батарейка */}
          <SwiperSlide>
         < Box
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
            className="dark:border-gray-600 relative p-6 border-gray-200 rounded-lg border-2 shadow-lg"
        >
            <div className="slide-content">
              <h3 className="header_h3 dark:text-blue-400">
                Литий-ионная батарейка
              </h3>
              <p className="paragraph_example dark:text-gray-400">
                Современный тип батареек, где анод состоит из графита, катод —
                часто из оксида лития-кобальта (LiCoO₂), а электролит —
                органический раствор с солями лития.
              </p>
              <ul className="unordered_list dark:text-gray-300">
                <li>
                  <strong>На аноде:</strong> Литий отдаёт электроны и
                  превращается в ионы:
                  <div className="annotation_card">
                    <p>Li → Li⁺ + e⁻</p>
                  </div>
                </li>
                <li>
                  <strong>На катоде:</strong> Ионы лития восстанавливаются в
                  структуре оксида кобальта:
                  <div className="annotation_card">
                    <p>Li⁺ + e⁻ + CoO₂ → LiCoO₂</p>
                  </div>
                </li>
              </ul>
              <p className="paragraph dark:bg-gray-800 dark:text-gray-300">
                Литий-ионные батарейки широко используются в смартфонах,
                ноутбуках и электромобилях благодаря их высокой энергоёмкости и
                возможности перезарядки.
              </p>
            </div>
            </Box>
          </SwiperSlide>
  
          {/* Слайд 4: Свинцово-кислотная батарея */}
          <SwiperSlide>
          < Box
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
            className="dark:border-gray-600 relative p-6 border-gray-200 rounded-lg border-2 shadow-lg"
        >
            <div className="slide-content">
              <h3 className="header_h3 dark:text-blue-400">
                Свинцово-кислотная батарея
              </h3>
              <p className="paragraph_example dark:text-gray-400">
                Батарея для автомобилей, где анод сделан из свинца, катод — из
                оксида свинца (PbO₂), а электролит — раствор серной кислоты
                (H₂SO₄).
              </p>
              <ul className="unordered_list dark:text-gray-300">
                <li>
                  <strong>На аноде:</strong> Свинец окисляется:
                  <div className="annotation_card">
                    <p>Pb + SO₄²⁻ → PbSO₄ + 2e⁻</p>
                  </div>
                </li>
                <li>
                  <strong>На катоде:</strong> Оксид свинца восстанавливается:
                  <div className="annotation_card">
                    <p>
                      PbO₂ + SO₄²⁻ + 4H⁺ + 2e⁻ → PbSO₄ + 2H₂O
                    </p>
                  </div>
                </li>
              </ul>
              <p className="paragraph dark:bg-gray-800 dark:text-gray-300">
                Такие батареи обладают высокой надёжностью, но их вес и
                необходимость обслуживания делают их менее удобными для
                повседневного использования.
              </p>
            </div>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Section>
    );
  };
  
  