"use client"

import React from "react";
import {AnimatePresence, motion, MotionConfig, Variants} from "framer-motion";
import {Transition} from "motion";

/**
 * Компонент для анимированного отображения содержимого с настраиваемыми параметрами.
 *
 * @param children - Содержимое, которое будет анимировано
 * @param isVisible - Флаг видимости компонента
 * @param isAnimating - Флаг включения/отключения анимации
 * @param className - Дополнительные CSS-классы для контейнера
 * @param customVariants - Кастомные варианты анимации
 * @param customTransition - Кастомные параметры перехода
 */
export function AnimatedContainer({
                                      children,
                                      isVisible,
                                      isAnimating = true,
                                      className = "z-50",
                                      customVariants,
                                      customTransition
                                  }:{
    children: React.ReactNode;
    isVisible: boolean;
    isAnimating: boolean;
    className?: string;
    customVariants: Variants;
    customTransition: Transition;
}) {

    const defaultVariants = {
        initial: {opacity: 0, y: -50, x: -500},
        animate: {
            opacity: 1, y: 0, x: 0,
            width: ["0%", "100%"],
        },
        exit: {
            opacity: 0,
            y: 50,
            x: 500,
        },
    };

    // Default transition settings
    const defaultTransition = {
        delay: .2,
        duration: 0.4,
        ease: ["easeOut"],
        repeatDelay: 1,
    };

    // Final animation parameters
    const variants = isAnimating
        ? (customVariants || defaultVariants)
        : {
            initial: {opacity: 1, y: 0, x: 0},
            animate: {opacity: 1, y: 0, x: 0},
            exit: {opacity: 1, y: 0, x: 0},
        };

    // Final transition parameters
    const transition = customTransition || defaultTransition;

    return (
        <MotionConfig transition={transition}>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key={isAnimating ? "animating" : "static"}
                        variants={variants}
                        className={className}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </MotionConfig>
    );
}