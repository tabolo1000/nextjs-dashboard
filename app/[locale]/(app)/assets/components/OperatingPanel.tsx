"use client"

import React from "react";
import {asidePanel, headerPanel, turnOfAnimation} from "@/app/store/slices/mainSlice";
import {KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp} from "@mui/icons-material";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import MotionPhotosOffIcon from '@mui/icons-material/MotionPhotosOff';
import AnimationIcon from '@mui/icons-material/Animation';





export const OperatingPanel = React.memo(function OperatingPanel() {
    const {isOpenHeaderPanel, isOpenAsidePanel} = useAppSelector((state)=> state.mainSlice.panel)
    const {isAnimating} = useAppSelector((state)=> state.mainSlice.animation)
    const dispatch = useAppDispatch();

    return <div className={"fixed flex flex-col gap-1 bottom-5 right-5"}>
        <Button_Control
            isActive={isOpenHeaderPanel}
            truthIcon={<KeyboardArrowDown/>}
            falseIcon={ <KeyboardArrowUp/>}
            callback={() => dispatch(headerPanel())}
        />
        <Button_Control
            isActive={isOpenAsidePanel}
            truthIcon={<KeyboardArrowRight/>}
            falseIcon={ <KeyboardArrowLeft/>}
            callback={() => dispatch(asidePanel())}
        />
        <Button_Control
            isActive={isAnimating}
            truthIcon={<AnimationIcon />}
            falseIcon={<MotionPhotosOffIcon/>}
            callback={() => dispatch(turnOfAnimation())}
        />
    </div>
})

function Button_Control ({truthIcon, falseIcon, callback, isActive}: {truthIcon: React.ReactNode, falseIcon: React.ReactNode, callback: ()=>void, isActive: boolean | null}) {
    return <button onClick={callback}
                   className={`
                w-8 h-8 
                text-amber-600 bg-gray-800 hover:bg-gray-600 
                rounded border  
                base-animation-all`}>
        {isActive ? truthIcon : falseIcon}
    </button>
}