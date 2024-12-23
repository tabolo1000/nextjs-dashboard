import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    classStyle?: string;
    name?: string;
    type?: "button" | "submit" | "reset";
    children?: React.ReactNode;
    id?: string;
    disabled?: boolean;
}

export const Base_button: React.FC<Props> = ({
                                     onClick,
                                     classStyle = "",
                                     name,
                                     type = "button",
                                     children,
                                     id,
                                     disabled = false,
                                     ...rest
                                 }) => {
    return (
        <button
            id={id}
            name={name}
            type={type}
            className={classStyle}
            onClick={onClick}
            disabled={disabled}
            {...rest} // Передача дополнительных атрибутов
        >
            {children}
        </button>
    );
};
