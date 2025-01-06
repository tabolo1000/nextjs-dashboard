"use client";

import React from "react";
import {Aside_panel} from "@/app/[locale]/(app)/Aside_panel";
import {Button} from "@mui/material";


export function MainBlock({content} : {content: React.ReactNode}) {
    const [isOpen, setOpen] = React.useState(false);
    return<div className={
        `flex h-full 
        ${!isOpen && "pt-16"}
    `}>
        {
            isOpen &&
                <Button onClick={()=> setOpen(!isOpen)} className={"fixed bottom-10 right-10"} variant={"contained"}>Open</Button>
        }
        <div className={`${isOpen?"hidden":""}`}>
            <Aside_panel
                nameLink={{
                    math: "Математика",
                    biology: "Биология",
                    physics: "Физика",
                    words: "Лингвистика",
                    logout: "Выйти",
                }}
                setOpen={setOpen}
                isOpen={isOpen}
            />
        </div>
        <main
            className={`w-full grow base-animation-all
                         ${isOpen ? "ml-[0%] max-w-[100%]" : "p-4 xl:ml-[18%] xl:max-w-[82%] lg:ml-[25%] lg:max-w-[75%]"}`}
        >
            <div className="bg-white rounded-lg shadow-md px-6 dark:bg-gray-900">{content}</div>
        </main>
    </div>
}