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
      <div className="xl:w-2/3 md:w-4/5 flex flex-col">
        <div className="text-3xl font-semibold">My Skills</div>
        <div className="mt-8 flex xl:flex-row sm:flex-col xl:items-center">
          <div className="flex flex-col">
            <div className="text-xl">Frontend</div>
            <div className="h-[6px] rounded mt-2 xl:w-[400px] bg-slate-500/60">
              <div className="h-[6px] rounded w-[80%] innerbar opacity-80" />
            </div>
          </div>
          <div className="xl:ml-12 flex flex-row text-gray-100 2xl:text-xl sm:mt-4 md:text-md">
            {/* Frontend Technologies */}
            <div className="flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiReactjsFill />
              <span className="ml-1">ReactJS</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <TbBrandReactNative />
              <span className="ml-1">React Native</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiTailwindCssFill />
              <span className="ml-1">TailwindCSS</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <TbBrandRedux />
              <span className="ml-1">Redux</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiHtml5Fill />
              <span className="ml-1">HTML5</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiCss3Fill />
              <span className="ml-1">CSS3</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex xl:flex-row sm:flex-col xl:items-center">
          <div className="flex flex-col">
            <div className="text-xl">Backend</div>
            <div className="h-[6px] rounded mt-2 xl:w-[400px] bg-slate-500/60">
              <div className="h-[6px] rounded w-[75%] innerbar opacity-80" />
            </div>
          </div>
          <div className="xl:ml-12 flex flex-row text-gray-100 2xl:text-xl sm:mt-4 md:text-md">
            {/* Backend Technologies */}
            <div className="flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiNodejsFill />
              <span className="ml-1">NodeJS</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <SiExpress />
              <span className="ml-1">Express</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiNextjsFill />
              <span className="ml-1">NextJS</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <SiFastapi />
              <span className="ml-1">FastAPI</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <SiSocketdotio />
              <span className="ml-1">socket.io</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <span className="ml-1">REST API</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex xl:flex-row sm:flex-col xl:items-center">
          <div className="flex flex-col">
            <div className="text-xl">DBMS</div>
            <div className="h-[6px] rounded mt-2 xl:w-[400px] bg-slate-500/60">
              <div className="h-[6px] rounded w-[65%] innerbar opacity-80" />
            </div>
          </div>
          <div className="xl:ml-12 flex flex-row text-gray-100 2xl:text-xl sm:mt-4 md:text-md">
            {/* DBMS Technologies */}
            <div className="flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <TbBrandMysql />
              <span className="ml-1">MySQL</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <BiLogoPostgresql />
              <span className="ml-1">PostgreSQL</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <TbBrandMongodb />
              <span className="ml-1">MongoDB</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <SiPrisma />
              <span className="ml-1">Prisma ORM</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex xl:flex-row sm:flex-col xl:items-center">
          <div className="flex flex-col">
            <div className="text-xl">Platform and Tools</div>
            <div className="h-[6px] rounded mt-2 xl:w-[400px] bg-slate-500/60">
              <div className="h-[6px] rounded w-[50%] innerbar opacity-80" />
            </div>
          </div>
          <div className="xl:ml-12 flex flex-row text-gray-100 2xl:text-xl sm:mt-4 md:text-md">
            {/* Platform and Tools AWS, Linux, Git, GitHub, Vercel */}
            <div className="flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <FaLinux />
              <span className="ml-1">Linux</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <FaAws />
              <span className="ml-1">AWS</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <RiVercelFill />
              <span className="ml-1">Vercel</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <BsGithub />
              <span className="ml-1">GitHub</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <FaGitAlt />
              <span className="ml-1">Git</span>
            </div>
            <div className="ml-4 flex cursor-pointer flex-row items-center opacity-50 transition-all duration-400 hover:opacity-100">
              <SiNginx />
              <span className="ml-1">nginx</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex xl:flex-row sm:flex-col xl:items-center">
          <div className="flex flex-col">
            <div className="text-xl">Problem Solving</div>
            <div className="h-[6px] rounded mt-2 xl:w-[400px] bg-slate-500/60">
              <div className="h-[6px] rounded w-[65%] innerbar opacity-80" />
            </div>
          </div>
          <div className="xl:ml-12 flex flex-row text-gray-100 2xl:text-xl sm:mt-4 md:text-md">
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
