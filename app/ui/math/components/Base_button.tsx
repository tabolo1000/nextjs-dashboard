"use client"




import {MouseEvent} from "react";

export const Base_button = ({
    onClick, classStyle,name, type, children, id
                            }: Props) => {

    return (
        <div
            className={classStyle}
            id={id}
        >
            <button type={type || "button"} onClick={onClick || undefined} className={"text-lg w-full base-animation-all"}>
                <div className={"inline-flex items-center justify-center"}>
                    {
                        (children || name)
                    }
                </div>
            </button>
        </div>
    )
}

interface Props {
    onClick?: (event?: MouseEvent<HTMLElement> | any) => void,
    classStyle: string,
    name?: string,
    type?: "button" | "submit" | "reset",
    children?: React.ReactNode,
    id?: string,
}