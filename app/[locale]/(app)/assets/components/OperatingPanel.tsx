'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Settings,
    Close,
    Animation,
    MotionPhotosOff,
    ScreenLockLandscape,
    KeyboardArrowDown, ChatBubbleOutline,
} from '@mui/icons-material';
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {toggleAnimation, toggleAsidePanel, toggleHeaderPanel} from "@/app/store/slices/mainSlice/mainSliceThunks";

export default function SettingsPanel() {
    const [isOpen, setIsOpen] = useState(false); // Состояние открытия панели
    const {isOpenHeaderPanel, isOpenAsidePanel} = useAppSelector((state)=> state.mainSlice.panel)
    const {isAnimating} = useAppSelector((state)=> state.mainSlice.animation)
    const dispatch = useAppDispatch();

    // Параметры панели
    const settings = [
        {
            name: 'Toggle Animation',
            isActive: isAnimating,
            truthIcon: <Animation />,
            falseIcon: <MotionPhotosOff />,
            callback: () =>  dispatch(toggleAnimation({isAnimating: !isAnimating})),
        },
        {
            name: 'Toggle Lock',
            isActive: (isOpenHeaderPanel === true && isOpenAsidePanel === true),
            truthIcon: <ScreenLockLandscape />,
            falseIcon: <KeyboardArrowDown />,
            callback: () => {
                dispatch(toggleHeaderPanel({isOpenHeaderPanel: !isOpenHeaderPanel}))
                dispatch(toggleAsidePanel({isOpenAsidePanel: !isOpenAsidePanel}))
            },
        },
        {
            name: 'Toggle Lock',
            isActive: isOpenAsidePanel,
            truthIcon: <ScreenLockLandscape />,
            falseIcon: <KeyboardArrowDown />,
            callback: () => dispatch(toggleAsidePanel({isOpenAsidePanel: !isOpenAsidePanel})),
        },
        {
            name: 'Toggle Lock',
            isActive: isOpenHeaderPanel,
            truthIcon: <ScreenLockLandscape />,
            falseIcon: <KeyboardArrowDown />,
            callback: () => dispatch(toggleHeaderPanel({isOpenHeaderPanel: !isOpenHeaderPanel})),
        },
    ];

    return (
        <div className="fixed bottom-20 right-5 z-50 flex flex-col items-end">
            {/* Кнопка открытия панели */}
                <motion.button
                    onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}
                    className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1}}
                    exit={{ scale: 0 }}
                    transition={{duration: 1}}
                >
                    {isOpen ? <Close fontSize="large" /> : <Settings fontSize="large" />}
                </motion.button>


            {/* Панель настроек */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mt-2 w-64 bg-gray-800 text-white rounded-lg shadow-lg p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Settings</h3>
                        <div className="flex flex-col gap-4">
                            {settings.map((setting, index) => (
                                <SettingItem
                                    key={index}
                                    name={setting.name}
                                    isActive={!!setting.isActive}
                                    truthIcon={setting.truthIcon}
                                    falseIcon={setting.falseIcon}
                                    callback={setting.callback}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function SettingItem({
                         name,
                         isActive,
                         truthIcon,
                         falseIcon,
                         callback,
                     }: {
    name: string;
    isActive: boolean;
    truthIcon: React.ReactNode;
    falseIcon: React.ReactNode;
    callback: () => void;
}) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-sm">{name}</span>
            <button
                onClick={callback}
                className={`w-10 h-10 flex items-center justify-center rounded-full 
          border text-white shadow-sm transition-all 
          ${isActive ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-600 hover:bg-gray-500'}`}
            >
                {isActive ? truthIcon : falseIcon}
            </button>
        </div>
    );
}