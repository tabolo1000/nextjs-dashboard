"use client"

import { useRouter} from "next/navigation";
import { useEffect, useCallback } from "react";
import { Base_button } from "@/app/ui/math/components/Base_button";

export default function NavigateButton({ to }: Props) {
    const router = useRouter();

    // Prefetch routes in useEffect
    useEffect(() => {
        if (to.nextTask !== undefined) {
          router.prefetch(to.nextTask);
        }
        if (to.nextExercise !== undefined) {
            router.prefetch(to.nextExercise);
        }
    }, [to.nextTask, to.nextExercise, router]);

    const routerHandler = useCallback(
        (nextPage: string) => {
            router.push(nextPage);
        },
        [router]
    );

    const onClickNextTask = useCallback(() => {
        if (to.nextTask !== undefined) {
            routerHandler(to.nextTask);
            return;
        }
        if (to.localNavigationSecondButton !== undefined) {
            to.localNavigationSecondButton();
        }
    }, [to.nextTask, routerHandler, to.localNavigationSecondButton]);

    const onClickNextExercise = useCallback(() => {
        if (to.nextExercise !== undefined) {
            routerHandler(to.nextExercise);
            return;
        }
        if (to.localNavigationSecondButton !== undefined) {
            to.localNavigationSecondButton();
        }
    }, [to.nextExercise, routerHandler, to.localNavigationSecondButton]);

    return (
        <div className="right-sidebar bg-gray-100 p-4 border-l w-full">
            <h2 className="text-xl font-bold mb-4 opacity-0 absolute">Навигация</h2>
            <div className="flex">
                <Base_button
                    onClick={onClickNextTask}
                    name={"Перейти к следующей теме"}
                    classStyle={"w-1/2 button_to bg-blue-500 hover:bg-blue-700 mr-5"}
                />
                <Base_button
                    onClick={onClickNextExercise}
                    name={"Пройти практическое занятие"}
                    classStyle={"w-1/2 button_to bg-green-500 hover:bg-green-600"}
                />
            </div>
        </div>
    );
}

interface Props {
    to: {
        nextTask?: string;
        nextExercise?: string;
        localNavigationFirstButton?: () => void;
        localNavigationSecondButton?: () => void;
    };
}