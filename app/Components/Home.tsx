import scrollLogo from "../assets/scrollDoc.svg"
import greenCode from "../assets/greenCode.svg"
import redCode from "../assets/redCode.svg"
import pythonLogo from "../assets/python.svg"
import tsLogo from "../assets/typescript.svg"
import jsLogo from "../assets/javascript.svg"
import reactLogo2 from "../assets/reactLogo.svg"
import nextLogo from "../assets/next.svg"
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs"
import { RiCornerRightDownLine } from "react-icons/ri"
import { SiLeetcode } from "react-icons/si"
import Image from "next/image"


const Home = () => {
  return (
    <div id="sect-home" className="bigSections w-full h-screen flex justify-center items-center">
        <div className="absolute h-full w-full top-0 left-0 z-20 bg-grad1">
            <Image alt="scroll" height={180} src={scrollLogo} className="absolute opacity-65 top-20 left-30" />
            <Image alt="code" height={180} src={redCode} className="absolute opacity-65 top-20 right-30" />
            <Image alt="code" height={180} src={greenCode} className="absolute opacity-65 bottom-20 left-30" />
        </div>
        <div className="absolute h-full w-full top-0 left-0 z-30 bg-grad2 backdrop-blur-[3px]">
            <div className="absolute bottom-[10%] right-[10%]">
                <div className="flex flex-row">
                    <div>
                        <Image alt="ts" height={100} src={tsLogo} className=" opacity-65"/>
                        <Image alt="js" height={100} src={jsLogo} className=" opacity-65"/>
                        <Image alt="py" height={100} src={pythonLogo} className=" opacity-65"/>
                    </div>
                    <div className="flex flex-col justify-center ml-6">
                        <Image alt="react" height={100} src={reactLogo2} className=" opacity-65"/>
                        <Image alt="next" height={130} src={nextLogo} className=" opacity-65 mt-4 ml-2"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute h-full w-full top-0 left-0 z-40 bg-black/20 backdrop-blur-[4px]" />
        <div className="flex flex-col font-semibold w-1/3 z-50">
            <div className="text-xl tracking-tight mt-4 flex flex-col">
                <span className="text-3xl">Hi, I'm Sahil Nigam,</span>
                <span className="mt-4">A passionate Full Stack Developer with expertise in building dynamic and scalable websites and apps using TypeScript and Python.</span>
                <span className="mt-4">With hands-on experience and a creative approach to problem-solving, I transform ideas into seamless digital experiences.</span>
            </div>
            <div className="tracking-tight text-xl mt-4">
                Explore my portfolio to learn more about my projects, skills, and journey in the tech world.
            </div>
            <div className="flex flex-row items-center mt-4 w-full relative">
                <a href="#sect-contact" className="py-1 px-4 rounded-lg bg-indigo-600/30 flex flex-row items-center transition-all duration-300 hover:bg-indigo-700/60"> 
                    <span>
                        Contact Me
                    </span>
                    <span className="text-3xl ml-2">
                        <RiCornerRightDownLine /> 
                    </span>
                    
                </a>
                <div className="top-0 right-2 absolute text-[30px] flex flex-row">
                    <a target="_blank" className="opacity-40 transition-all duration-300 hover:opacity-85" href="https://github.com/Sahil2315/">
                        <BsGithub />
                    </a>
                    <a target="_blank" className="opacity-40 ml-4 transition-all duration-300 hover:opacity-85" href="https://www.linkedin.com/in/sahil-nigam-496658238/">
                        <BsLinkedin />
                    </a>
                    <a target="_blank" className="opacity-40 ml-4 transition-all duration-300 hover:opacity-85" href="https://discord.com/users/sahilnigam">
                        <BsDiscord />
                    </a>
                    <a target="_blank" className="opacity-40 ml-4 transition-all duration-300 hover:opacity-85" href="https://leetcode.com/u/Sahil2315/">
                        <SiLeetcode />
                    </a>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Home