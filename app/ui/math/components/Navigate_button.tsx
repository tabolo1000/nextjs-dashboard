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
        <div className="bg-gray-100 dark:bg-gray-900 p-4 border-l w-full">
            <div className="flex">
                <Base_button
                    onClick={onClickNextTask}
                    classStyle={"w-1/2 button_to bg-blue-500 hover:bg-blue-700 mr-5"}
                >
                    Перейти к следующей теме
                </Base_button>
                <Base_button
                    onClick={onClickNextExercise}
                    classStyle={"w-1/2 button_to bg-green-500 hover:bg-green-600"}
                >
                    Пройти практическое занятие
                </Base_button>
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