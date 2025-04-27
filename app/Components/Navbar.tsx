"use client"
import { useEffect, useState } from "react";
import { sectionsJSON } from "../sections";
import useInter from "../inter";

const Navbar = ({curActive}: {curActive: string}) => {
    const [curActiveState, setActiveState] = useState(curActive)
    useInter(setActiveState)
    const indexMap = new Map()
    const [curIndex, setIndex] = useState(0)
    indexMap.set("sect-home", 0)
    indexMap.set("sect-about", 1)
    indexMap.set("sect-projects", 2)
    indexMap.set("sect-skills", 3)
    indexMap.set("sect-contact", 4)
    useEffect(() => {
        setIndex(indexMap.get(curActiveState))
    }, [curActiveState])
    return (
        <div className={`fixed z-60 top-4 left-0 w-full flex flex-row justify-center`}>
            <div className='flex flex-row w-max bg-black/70 backdrop-blur px-4 py-1 rounded-3xl'>
            {
                sectionsJSON.map((section, index) => (
                <div className={`${section.id == "sect-home" ? "" : "ml-8"} text-sm rounded-2xl px-4 py-2 text-white/40 transition-all duration-350 ${curActiveState == section.id ? "text-white/100" : ""} hover:text-white`} key={index}>
                    <a href={`#${section.id}`}>{section.name}</a>
                </div>
                ))
            }
            <div className="absolute h-4/5 top-1 rounded-2xl px-4 py-2 bg-gray-600/25 transition-transform duration-150 ease-in-out" style={{
                width: `${curIndex == 0 ? "4.4rem" : curIndex == 1 ? "4.6rem" : curIndex == 2 ? "5.2rem" : curIndex == 3 ? "3.9rem" : "4.95rem"}`,
                transform: `translateX(${curIndex == 0 ? curIndex*6 : curIndex == 1 ? curIndex*6.2 : curIndex == 2 ? curIndex*6.3 : curIndex == 3 ? curIndex*6.57 : curIndex*6.42}rem)`
            }}>

            </div>
            </div>
        </div>
    )
}

export default Navbar