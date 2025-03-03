import {Meta, StoryObj} from "@storybook/react";
import {useEffect, useState} from "react";
import AnimatedContainer from "@/app/@ui/components/layout/animatedContainer/AnimatedContainer";


const meta: Meta<typeof AnimatedContainer> = {
    title: "Components/AnimatedContainer",
    component: AnimatedContainer,
    tags: ["autodocs"],
    args: {
        isVisible: true,
        isAnimating: true,
    }
}

export default meta;

type Story = StoryObj<typeof AnimatedContainer>

export const Default: Story = {
    render: (args) => {
        return (
            <AnimatedContainer {...args}>
                <div className={"p-2 text-center bg-amber-200 rounded"}>
                    Your animation window!
                </div>
            </AnimatedContainer>
        )
    }
}

export const AnimationOff: Story = {
    ...Default,
    args: {
        isAnimating: false,
        isVisible: true, // Указываем явно
    }
}

export const AnimationToggle: Story = {
    render: (args) => {
        const [isAnimating, setIsAnimating] = useState<boolean>(true);

        // Исправлен useEffect для предотвращения многократных таймеров
        useEffect(() => {
            const timer = setTimeout(() => {
                setIsAnimating(!isAnimating);
            }, 2000);

            // Очистка таймера при размонтировании или перед новым вызовом
            return () => clearTimeout(timer);
        }, [isAnimating]);

        return (
            <AnimatedContainer
                {...args}
                isAnimating={isAnimating}
            >
                <div className={"p-2 text-center bg-amber-200 rounded"}>
                    Your animation window! (Animation: {isAnimating ? "ON" : "OFF"})
                </div>
            </AnimatedContainer>
        )
    },
    args: {
        isVisible: true,
    }
}

export const VisibilityToggle: Story = {
    render: (args) => {
        const [isVisible, setIsVisible] = useState<boolean>(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsVisible(!isVisible);
            }, 2000);

            return () => clearTimeout(timer);
        }, [isVisible]);

        return (
            <>
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Toggle Visibility
                </button>

                <AnimatedContainer
                    {...args}
                    isVisible={isVisible}
                >
                    <div className={"p-2 text-center bg-amber-200 rounded"}>
                        Your animation window! (Visibility: {isVisible ? "VISIBLE" : "HIDDEN"})
                    </div>
                </AnimatedContainer>
            </>
        )
    }
}