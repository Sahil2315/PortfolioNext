import { BiLogoPostgresql } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaGitAlt, FaLinux } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiVercelFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiFastapi,
  SiNginx,
  SiPrisma,
  SiSocketdotio,
} from "react-icons/si";
import {
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandReactNative,
  TbBrandRedux,
} from "react-icons/tb";
const Skills = () => {
  return (
    <div
      id="sect-skills"
      className="bigSections w-full h-screen flex justify-center items-center"
    >
      <div className="2xl:w-2/3 md:w-4/5 max-md:w-5/6 flex flex-col">
        <div className="xl:text-3xl max-xl:text-xl max-md:text-lg font-semibold">My Skills</div>
        <div className="mt-8 flex xl:flex-row max-xl:flex-col xl:items-center">
          <div className="flex flex-col">
            <div className="xl:text-xl max-xl:text-lg max-md:text-md">Frontend</div>
            <div className="h-[6px] rounded mt-2 xl:w-[400px] bg-slate-500/60">
              <div className="h-[6px] rounded w-[80%] innerbar opacity-80" />
            </div>
          </div>
          <div className="xl:ml-12 flex flex-row text-gray-100 2xl:text-xl max-xl:mt-4 max-md:text-md max-sm:text-[8.5px] sm:text-sm max-2xl:text-md">
            {/* Frontend Technologies */}
            <div className="flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiReactjsFill />
              <span className="ml-[2px]">ReactJS</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <TbBrandReactNative />
              <span className="ml-[2px]">React Native</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiTailwindCssFill />
              <span className="ml-[2px]">TailwindCSS</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <TbBrandRedux />
              <span className="ml-[2px]">Redux</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiHtml5Fill />
              <span className="ml-[2px]">HTML5</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiCss3Fill />
              <span className="ml-[2px]">CSS3</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex xl:flex-row max-xl:flex-col xl:items-center">
          <div className="flex flex-col">
            <div className="xl:text-xl max-xl:text-lg max-md:text-md">Backend</div>
            <div className="h-[6px] rounded mt-2 xl:w-[400px] bg-slate-500/60">
              <div className="h-[6px] rounded w-[75%] innerbar opacity-80" />
            </div>
          </div>
          <div className="xl:ml-12 flex flex-row text-gray-100 2xl:text-xl max-xl:mt-4 md:text-md max-sm:text-[9px] sm:text-sm max-2xl:text-md">
            {/* Backend Technologies */}
            <div className="flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiNodejsFill />
              <span className="ml-[2px]">NodeJS</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <SiExpress />
              <span className="ml-[2px]">Express</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiNextjsFill />
              <span className="ml-[2px]">NextJS</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <SiFastapi />
              <span className="ml-[2px]">FastAPI</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <SiSocketdotio />
              <span className="ml-[2px]">socket.io</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <span className="ml-[2px]">REST API</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex xl:flex-row max-xl:flex-col xl:items-center">
          <div className="flex flex-col">
            <div className="xl:text-xl max-xl:text-lg max-md:text-md">DBMS</div>
            <div className="h-[6px] rounded mt-2 xl:w-[400px] bg-slate-500/60">
              <div className="h-[6px] rounded w-[65%] innerbar opacity-80" />
            </div>
          </div>
          <div className="xl:ml-12 flex flex-row text-gray-100 2xl:text-xl max-xl:mt-4 md:text-md max-sm:text-[9px] sm:text-sm max-2xl:text-md">
            {/* DBMS Technologies */}
            <div className="flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <TbBrandMysql />
              <span className="ml-[2px]">MySQL</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <BiLogoPostgresql />
              <span className="ml-[2px]">PostgreSQL</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <TbBrandMongodb />
              <span className="ml-[2px]">MongoDB</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <SiPrisma />
              <span className="ml-[2px]">Prisma ORM</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex xl:flex-row max-xl:flex-col xl:items-center">
          <div className="flex flex-col">
            <div className="xl:text-xl max-xl:text-lg max-md:text-md">Platform and Tools</div>
            <div className="h-[6px] rounded mt-2 xl:w-[400px] bg-slate-500/60">
              <div className="h-[6px] rounded w-[50%] innerbar opacity-80" />
            </div>
          </div>
          <div className="xl:ml-12 flex flex-row text-gray-100 2xl:text-xl max-xl:mt-4 md:text-md max-sm:text-[9px] sm:text-sm max-2xl:text-md">
            {/* Platform and Tools AWS, Linux, Git, GitHub, Vercel */}
            <div className="flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <FaLinux />
              <span className="ml-[2px]">Linux</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <FaAws />
              <span className="ml-[2px]">AWS</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiVercelFill />
              <span className="ml-[2px]">Vercel</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <BsGithub />
              <span className="ml-[2px]">GitHub</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <FaGitAlt />
              <span className="ml-[2px]">Git</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <SiNginx />
              <span className="ml-[2px]">nginx</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex xl:flex-row max-xl:flex-col xl:items-center">
          <div className="flex flex-col">
            <div className="xl:text-xl max-xl:text-lg max-md:text-md">Problem Solving</div>
            <div className="h-[6px] rounded mt-2 xl:w-[400px] bg-slate-500/60">
              <div className="h-[6px] rounded w-[65%] innerbar opacity-80" />
            </div>
          </div>
          <div className="xl:ml-12 flex flex-row text-gray-100 2xl:text-xl max-xl:mt-4 md:text-md max-sm:text-[9px] sm:text-sm max-2xl:text-md">
            {/* Problem Solving Related Skills */}
            <div className="opacity-50 transition-all duration-400 cursor-pointer hover:opacity-100">
              Data Structures and Algorithms
            </div>
            <div className="ml-4 opacity-50 transition-all duration-400 cursor-pointer hover:opacity-100">
              Object Oriented Programming
            </div>
            <div className="ml-4 opacity-50 transition-all duration-400 cursor-pointer hover:opacity-100">
              System Design
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
