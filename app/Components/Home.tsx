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
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"


const Home = () => {
  return (
    <div id="sect-home" className="bigSections w-full h-screen flex justify-center items-center">
        <div className="absolute h-full w-full top-0 left-0 z-20 bg-grad1">
            <Image alt="scroll" height={180} src={scrollLogo} className="absolute opacity-65 2xl:h-[20%] max-2xl:h-[18%] max-xl:h-[16%] max-lg:h-[15%] max-md:h-[10%] xl:top-20 xl:left-30 max-xl:top-[5%] max-xl:left-[5%]" />
            <Image alt="code" height={180} src={redCode} className="absolute opacity-65 2xl:h-[20%] max-2xl:h-[18%] max-xl:h-[16%] max-lg:h-[15%] max-md:h-[10%] xl:top-20 xl:right-30 max-xl:top-[5%] max-xl:right-[5%]" />
            <Image alt="code" height={180} src={greenCode} className="absolute opacity-65 2xl:h-[20%] max-2xl:h-[18%] max-xl:h-[16%] max-lg:h-[15%] max-md:h-[10%] xl:bottom-20 xl:left-30 max-xl:bottom-[5%] max-xl:left-[5%]" />
        </div>
        <div className="absolute h-full w-full top-0 left-0 z-30 bg-grad2 backdrop-blur-[3px]">
            <div className="absolute xl:bottom-[8%] xl:right-[6%] lg:bottom-[5%] lg:right-[5%] max-lg:bottom-[1%] max-lg:right-[1%]">
                <div className="flex flex-row">
                    <div>
                        <Image alt="ts" height={100} src={tsLogo} className="opacity-65 xl:h-[35%] max-xl:h-[25%]"/>
                        <Image alt="js" height={100} src={jsLogo} className="opacity-65 xl:h-[35%] max-xl:h-[25%]"/>
                        <Image alt="py" height={100} src={pythonLogo} className="opacity-65 xl:h-[35%] max-xl:h-[25%]"/>
                    </div>
                    <div className="flex flex-col justify-center max-xl:ml-2 xl:ml-6">
                        <Image alt="react" height={100} src={reactLogo2} className="opacity-65 xl:h-[35%] max-xl:h-[25%]"/>
                        <Image alt="next" height={130} src={nextLogo} className="opacity-65 mt-4 md:ml-2 max-md:mt-1 xl:h-[35%] max-xl:h-[25%]"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute h-full w-full top-0 left-0 z-40 bg-black/20 backdrop-blur-[4px]" />
        <div className="flex flex-col font-semibold z-50 2xl:w-4/7 xl:w-3/4 max-lg:w-4/5 max-md:w-5/6">
            <div className="tracking-tight mt-4 flex flex-col md:text-md xl:text-xl">
                <span className="md:text-xl xl:text-3xl">Hi, I&apos;m Sahil Nigam,</span>
                <span className="mt-4">A passionate Full Stack Developer with expertise in building dynamic and scalable websites and apps using TypeScript and Python.</span>
                <span className="mt-4">With hands-on experience and a creative approach to problem-solving, I transform ideas into seamless digital experiences.</span>
            </div>
            <div className="tracking-tight mt-4 md:text-md xl:text-xl">
                Explore my portfolio to learn more about my projects, skills, and journey in the tech world.
            </div>
            <div className="flex flex-row items-center mt-4 w-full relative">
                <a href="#sect-contact" className="py-1 px-4 rounded-lg bg-indigo-600/30 flex flex-row items-center transition-all duration-300 hover:bg-indigo-700/60 xl:text-lg md:text-md"> 
                    <span>
                        Contact Me
                    </span>
                    <span className="text-3xl ml-2">
                        <RiCornerRightDownLine /> 
                    </span>
                    
                </a>
                <div className="top-0 right-6 absolute text-[30px] flex flex-row items-center">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <a target="_blank" className="opacity-40 transition-all duration-300 hover:opacity-85" href="https://github.com/Sahil2315/">
                                    <BsGithub />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>Link To Github</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger className="ml-4 flex flex-row items-center">
                                <a target="_blank" className="opacity-40 transition-all duration-300 hover:opacity-85" href="https://www.linkedin.com/in/sahil-nigam-496658238/">
                                    <BsLinkedin />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>Link To Linkedin</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger className="ml-4 flex flex-row items-center">
                                <a target="_blank" className="opacity-40 transition-all duration-300 hover:opacity-85" href="https://discord.com/users/sahilnigam">
                                    <BsDiscord />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>Link To Discord</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger className="ml-4 flex flex-row items-center">
                                <a target="_blank" className="opacity-40 transition-all duration-300 hover:opacity-85" href="https://leetcode.com/u/Sahil2315/">
                                    <SiLeetcode />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>Link To Leetcode</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Home