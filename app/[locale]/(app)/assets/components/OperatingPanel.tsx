"use client"

import {KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp} from "@mui/icons-material";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import MotionPhotosOffIcon from '@mui/icons-material/MotionPhotosOff';
import AnimationIcon from '@mui/icons-material/Animation';
import {
    MainConfiguration,
    toggleAnimation,
    toggleAsidePanel,
    toggleHeaderPanel
} from "@/app/store/slices/mainSlice/mainSliceThunks";
import React from "react";


export const OperatingPanel = React.memo(function OperatingPanel() {
    const {isOpenHeaderPanel, isOpenAsidePanel} = useAppSelector((state)=> state.mainSlice.panel)
    const {isAnimating} = useAppSelector((state)=> state.mainSlice.animation)
    const dispatch = useAppDispatch();

    React.useEffect(()=>{
        dispatch(MainConfiguration())
    },[dispatch])

    return <div className={"fixed flex flex-col gap-1 bottom-5 right-5"}>
        <Button_Control
            isActive={isOpenHeaderPanel}
            truthIcon={<KeyboardArrowUp/>}
            falseIcon={<KeyboardArrowDown/>}
            callback={() => dispatch(toggleHeaderPanel({isOpenHeaderPanel: !isOpenHeaderPanel}))}
        />
        <Button_Control
            isActive={isOpenAsidePanel}
            truthIcon={<KeyboardArrowRight/>}
            falseIcon={<KeyboardArrowLeft/>}
            callback={() => dispatch(toggleAsidePanel({isOpenAsidePanel: !isOpenAsidePanel}))}
        />
        <Button_Control
            isActive={isAnimating}
            truthIcon={<AnimationIcon />}
            falseIcon={<MotionPhotosOffIcon/>}
            callback={() => dispatch(toggleAnimation({isAnimating: !isAnimating}))}
        />
    </div>
})

function Button_Control ({
                             truthIcon,
                             falseIcon,
                             callback,
                             isActive
}: {
    truthIcon: React.ReactNode,
    falseIcon: React.ReactNode,
    callback: ()=>void,
    isActive: boolean | null
}) {
    return <button onClick={callback}
                   className={`
                w-8 h-8 
                text-amber-600 bg-gray-800 hover:bg-gray-600 
                rounded border  
                base-animation-all`}>
        {isActive ? truthIcon : falseIcon}
    </button>
}