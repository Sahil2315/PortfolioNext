import { BsGithub } from "react-icons/bs"
import { FaLink } from "react-icons/fa"

const Projects = () => {
    return (
      <div id="sect-projects" className="bigSections w-full">
        <div className="w-full h-full flex flex-col justify-center items-center z-50">
          <div className="2xl:w-2/3 flex flex-col my-20 md:w-4/5 max-md:w-5/6">
            <span className="xl:text-3xl md:text-xl max-md:text-lg font-bold ml-1">
              My Projects
            </span>
            <div className="flex flex-col mt-8">
              <div className="flex-1 flex flex-col p-4 rounded-xl bg-indigo-800/20">
                <span className="xl:text-2xl md:text-lg max-md:text-md font-semibold">
                  Plankout
                </span>
                <span className="mt-2">
                A full-stack, AI-powered application designed to provide tailored workout plans and real-time assistance to users. It seamlessly integrates exceptional UI/UX with personalized AI-driven responses to customized prompts, ensuring a highly engaging and user-focused experience.
                </span>
                <div className="flex flex-row mt-4 max-md:hidden">
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl">Python</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">FastAPI</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">React Native</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">DeepSeek R1</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">Gemini</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">TailwindCSS</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">AWS</span>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <div className="mr-10">
                    <a target="blank" className="px-2 flex flex-row items-center py-1 rounded-lg bg-blue-200/10 text-indigo-300 opacity-70 hover:opacity-100 transition-all duration-300" href="https://github.com/Sahil2315/plankout">
                      <BsGithub className="xl:text-2xl md:text-lg max-md:text-md mr-2" />
                      <span>View on Github</span> 
                    </a>
                  </div>
                  {/* <div>
                    <a target="blank" className="px-2 py-1 flex flex-row items-center rounded-lg bg-blue-200/10 text-sky-300 opacity-70 hover:opacity-100 transition-all duration-300" href="https://github.com/">
                      <FaLink className="text-2xl mr-2"/>
                      <span>View Online</span>
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="flex-1 flex flex-col p-4 rounded-xl bg-indigo-800/20 mt-8">
                <span className="xl:text-2xl md:text-lg max-md:text-md font-semibold">
                  CrosNotes
                </span>
                <span className="mt-2">
                A versatile full-stack application created to offer seamless note-taking and reminder-setting functionality across desktops, laptops, and mobile devices. It leverages the operating system&apos;s push notifications alongside integrated reminders to ensure efficient and reliable performance.
                </span>
                <div>
                <div className="flex flex-row mt-4 max-md:hidden">
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl">NodeJS</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">Express</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">ReactJS</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">Redux</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">TailwindCSS</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">React Native</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">Electron</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">AWS</span>
                </div>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <div className="mr-10">
                    <a target="blank" className="px-2 flex flex-row items-center py-1 rounded-lg bg-blue-200/10 text-indigo-300 opacity-70 hover:opacity-100 transition-all duration-300" href="https://github.com/Sahil2315/CrosNotesN">
                      <BsGithub className="xl:text-2xl md:text-lg max-md:text-md mr-2" />
                      <span>View on Github</span> 
                    </a>
                  </div>
                  {/* <div>
                    <a target="blank" className="px-2 py-1 flex flex-row items-center rounded-lg bg-blue-200/10 text-sky-300 opacity-70 hover:opacity-100 transition-all duration-300" href="https://github.com/">
                      <FaLink className="text-2xl mr-2"/>
                      <span>View Online</span>
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="flex-1 flex flex-col p-4 rounded-xl bg-indigo-800/20 mt-8">
                <span className="xl:text-2xl md:text-lg max-md:text-md font-semibold">
                  Globin Chat
                </span>
                <span className="mt-2">
                A comprehensive full-stack chatting web application that combines outstanding UI/UX elements inspired by various popular chat apps. It prioritizes a user-first approach to deliver an intuitive, engaging, and seamless communication experience
                </span>
                <div className="flex flex-row mt-4 max-md:hidden">
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl">NodeJS</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">Express</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">ReactJS</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">socket.io</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">TailwindCSS</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">Firebase</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">AWS</span>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <div className="mr-10">
                    <a target="blank" className="px-2 flex flex-row items-center py-1 rounded-lg bg-blue-200/10 text-indigo-300 opacity-70 hover:opacity-100 transition-all duration-300" href="https://github.com/Sahil2315/Globin-Chat-React">
                      <BsGithub className="xl:text-2xl md:text-lg max-md:text-md mr-2" />
                      <span>View on Github</span> 
                    </a>
                  </div>
                  {/* <div>
                    <a target="blank" className="px-2 py-1 flex flex-row items-center rounded-lg bg-blue-200/10 text-sky-300 opacity-70 hover:opacity-100 transition-all duration-300" href="https://github.com/">
                      <FaLink className="text-2xl mr-2"/>
                      <span>View Online</span>
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="flex-1 flex flex-col p-4 rounded-xl bg-indigo-800/20 mt-8">
                <span className="xl:text-2xl md:text-lg max-md:text-md font-semibold">
                  EmplOIS Next
                </span>
                <span className="mt-2">
                A robust full-stack web application offering a comprehensive Employee Management System. It includes a range of highly practical features such as a built-in chat system, project tracking, profile editing, leave application management, and an efficient employee search functionality to enhance productivity and collaboration.
                </span>
                <div>
                <div className="flex flex-row mt-4 max-md:hidden">
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl">NextJS</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">ReactJS</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">socket.io</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">TailwindCSS</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">Vercel</span>
                  <span className="py-1 px-2 bg-black/50 max-lg:text-xs rounded-xl ml-4">AWS</span>
                </div>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <div className="mr-10">
                    <a target="blank" className="px-2 flex flex-row items-center py-1 rounded-lg bg-blue-200/10 text-indigo-300 opacity-70 hover:opacity-100 transition-all duration-300" href="https://github.com/Sahil2315/EmpNext">
                      <BsGithub className="xl:text-2xl md:text-lg max-md:text-md mr-2" />
                      <span>View on Github</span> 
                    </a>
                  </div>
                  <div>
                    <a target="blank" className="px-2 py-1 flex flex-row items-center rounded-lg bg-blue-200/10 text-sky-300 opacity-70 hover:opacity-100 transition-all duration-300" href="https://emplois.sahilnigam.online">
                      <FaLink className="xl:text-2xl md:text-lg max-md:text-md mr-2"/>
                      <span>View Online</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
          
      </div>
    )
  }
  
  export default Projects