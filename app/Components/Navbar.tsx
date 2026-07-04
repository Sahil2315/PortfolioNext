"use client"
import { useEffect, useState, useRef } from "react";
import { sectionsJSON } from "../sections";
import useInter from "../inter";

const Navbar = ({curActive}: {curActive: string}) => {
    const [curActiveState, setActiveState] = useState(curActive)
    useInter(setActiveState)

    const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });
    const navItemsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        const activeElement = navItemsRef.current[curActiveState];
        if (activeElement) {
            // Measure relative to the parent container
            setSliderStyle({
                width: activeElement.offsetWidth,
                left: activeElement.offsetLeft
            });
        }
    }, [curActiveState]);

    return (
        <div className={`fixed z-60 top-4 left-0 w-full flex flex-row justify-center max-md:hidden`}>
            {/* 1. Added 'relative' for positioning and 'isolate' to completely protect background colors */}
            <div className='relative flex flex-row w-max bg-black/70 backdrop-blur px-4 py-1 rounded-3xl isolate'>
            
            {/* 2. Moved the slider ABOVE the map loop so it naturally sits behind text layers */}
            <div 
                className="absolute h-4/5 top-1 rounded-2xl bg-gray-600/25 transition-all duration-150 ease-in-out pointer-events-none -z-10" 
                style={{
                    width: `${sliderStyle.width}px`,
                    left: 0, 
                    transform: `translateX(${sliderStyle.left}px)`
                }}
            />

            {
                sectionsJSON.map((section, index) => (
                <div 
                    ref={(el) => { navItemsRef.current[section.id] = el; }}
                    className={`${section.id == "sect-home" ? "" : "ml-8"} text-sm rounded-2xl px-4 py-2 text-white/40 transition-all duration-350 ${curActiveState == section.id ? "text-white/100" : ""} hover:text-white`} 
                    key={index}
                >
                    <a href={`#${section.id}`}>{section.name}</a>
                </div>
                ))
            }
            </div>
        </div>
    )
}

export default Navbar