import React, {useState} from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';


type SwitcherProps = {
    /** Initial state of the switch */
    defaultChecked: boolean;
    /** State change handler */
    onChange: (isChecked: boolean) => void;
    /** Label for screen readers */
    ariaLabel?: string;
    /** Text for “on” status */
    checkedIcon?: React.ReactNode;
    /** Text for “off” status */
    uncheckedIcon?: React.ReactNode;
    /** ID to link to label */
    id?: string;
    /** Disabling the switch */
    disabled?: boolean;
}

const Switcher = ({
                      defaultChecked = false,
                      onChange,
                      ariaLabel = 'Toggle theme',
                      checkedIcon = <NightsStayIcon className="text-yellow-500"/>,
                      uncheckedIcon = <LightModeIcon className="text-yellow-500"/>,
                      id = 'theme-switcher',
                      disabled = false
                  }: SwitcherProps) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;

        const newChecked = e.target.checked;
        setIsChecked(newChecked);

        if (onChange) {
           /* onChange(newChecked);*/
            onChange(newChecked);
        }
    };

    return (
        <label
            htmlFor={id}
            className={`relative inline-flex items-center cursor-pointer ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
            <input
                id={id}
                type="checkbox"
                className="sr-only peer"
                checked={isChecked}
                onChange={handleChange}
                disabled={disabled}
                aria-label={ariaLabel}
                aria-checked={isChecked}
            />
            <div
                className={`
          w-24 h-12 rounded-full ring-0 peer duration-500 outline-none 
          overflow-hidden shadow-lg 
          ${isChecked ? 'bg-[#383838] shadow-gray-700' : 'bg-gray-200 shadow-gray-400'}
          before:flex before:items-center before:justify-center 
          after:flex after:items-center after:justify-center 
          before:content-[''] before:absolute before:h-10 before:w-10 
          before:top-1/2 before:bg-white before:rounded-full before:left-1 
          before:-translate-y-1/2 before:transition-all before:duration-700 
          before:flex before:items-center before:justify-center
          ${isChecked ? 'before:opacity-0 before:rotate-90 before:-translate-y-full' : ''}
          after:content-[''] after:absolute after:bg-[#1d1d1d] 
          after:rounded-full after:top-[4px] after:right-1 
          after:w-10 after:h-10 after:transition-all after:duration-700
          ${isChecked ? 'after:opacity-100 after:rotate-180 after:translate-y-0' : 'after:translate-y-full after:opacity-0'}
        `}
            >
        <span
            className="absolute top-1/2 left-1 -translate-y-1/2 flex items-center justify-center w-10 h-10 z-10 pointer-events-none "
            style={{opacity: isChecked ? 0 : 1}}>
          {uncheckedIcon}
        </span>
                <span
                    className="absolute top-1/2 right-1 -translate-y-1/2 flex items-center justify-center w-10 h-10 z-10 pointer-events-none transition-opacity duration-300"
                    style={{opacity: isChecked ? 1 : 0}}>
          {checkedIcon}
        </span>
            </div>
        </label>
    );
}

export default Switcher;