"use client"




export const Base_button = ({
    onClick, classStyle,name, type
                            }: Props) => {
    return (
        <div
            className={classStyle}>
            <button type={type || "button"} onClick={onClick || undefined} className={"text-lg w-full"}>{name}
            </button>
        </div>
    )
}

interface Props {
    onClick?: ()=> void,
    classStyle: string,
    name: string,
    type?: "button" | "submit" | "reset",
}