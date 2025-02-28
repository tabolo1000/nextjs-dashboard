import React from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';


type SwitcherProps = {
    /** Initial state of the switch */
    currentChecked: boolean;
    /** State change handler */
    onChange: (currentChecked: boolean) => void;
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

const Switcher = React.memo(function Switcher({
                                                  currentChecked,
                                                  onChange,
                                                  ariaLabel = 'Toggle theme',
                                                  checkedIcon = <NightsStayIcon className="text-yellow-500"/>,
                                                  uncheckedIcon = <LightModeIcon className="text-yellow-500"/>,
                                                  id = 'theme-switcher',
                                                  disabled = false
                                              }: SwitcherProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        onChange(e.target.checked);
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
                checked={currentChecked}
                onChange={handleChange}
                disabled={disabled}
                aria-label={ariaLabel}
                aria-checked={currentChecked}
            />
            <div
                className={`
          w-12 h-6 rounded-full ring-0 peer duration-500 outline-none 
          overflow-hidden shadow-lg 
          ${currentChecked ? 'bg-[#383838] shadow-gray-700' : 'bg-gray-200 shadow-gray-400'}
          before:flex before:items-center before:justify-center 
          after:flex after:items-center after:justify-center 
          before:content-[''] before:absolute before:h-5 before:w-5 
          before:top-1/2 before:bg-white before:rounded-full before:left-1 
          before:-translate-y-1/2 before:transition-all before:duration-700 
          before:flex before:items-center before:justify-center
          ${currentChecked ? 'before:opacity-0 before:rotate-90 before:-translate-y-full' : ''}
          after:content-[''] after:absolute after:bg-[#1d1d1d] 
          after:rounded-full after:top-[4px] after:right-1 
          after:w-5 after:h-5 after:transition-all after:duration-700
          ${currentChecked ? 'after:opacity-100 after:rotate-180 after:translate-y-0' : 'after:translate-y-full after:opacity-0'}
        `}
            >
        <span
            className="absolute top-1/2 left-1 -translate-y-1/2 flex items-center justify-center w-5 h-5 z-10 pointer-events-none "
            style={{opacity: currentChecked ? 0 : 1}}>
          {uncheckedIcon}
        </span>
                <span
                    className="absolute top-1/2 right-1 -translate-y-1/2 flex items-center justify-center w-5 h-5 z-10 pointer-events-none transition-opacity duration-300"
                    style={{opacity: currentChecked ? 1 : 0}}>
          {checkedIcon}
        </span>
            </div>
        </label>
    );
})

export default Switcher;