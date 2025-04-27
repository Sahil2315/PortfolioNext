import { BsDiscord, BsGithub, BsLinkedin, BsSendFill } from "react-icons/bs"
import { SiLeetcode } from "react-icons/si"

const Contact = () => {

    return (
      <div id="sect-contact" className="bigSections w-full h-screen flex justify-center items-center">
        <div className="w-2/5 rounded-xl bg-indigo-700/10 p-6 flex flex-col items-center relative">
          <div className="top-2 right-2 absolute text-[35px] flex flex-row">
            <a target="_blank" className="opacity-40 transition-all duration-400 hover:opacity-85" href="https://github.com/Sahil2315/">
              <BsGithub />
            </a>
            <a target="_blank" className="opacity-40 ml-4 transition-all duration-400 hover:opacity-85" href="https://www.linkedin.com/in/sahil-nigam-496658238/">
              <BsLinkedin />
            </a>
            <a target="_blank" className="opacity-40 ml-4 transition-all duration-400 hover:opacity-85" href="https://discord.com/users/sahilnigam">
              <BsDiscord />
            </a>
            <a target="_blank" className="opacity-40 ml-4 transition-all duration-400 hover:opacity-85" href="https://leetcode.com/u/Sahil2315/">
              <SiLeetcode />
            </a>
          </div>
          <span className="text-3xl font-semibold mt-12">Contact Me</span>
          <span className="font-semibold text-xl mt-4">I&apos;ll Be Glad to Connect with You.</span>
          <input type="text" className="mt-8 py-2 px-2 rounded-lg bg-black/25 text-md w-7/8 outline-none" placeholder="Your Name"/>
          <input type="text" className="mt-4 py-2 px-2 rounded-lg bg-black/25 text-md w-7/8 outline-none" placeholder="Your Email"/>
          <input type="text" className="mt-4 py-2 px-2 rounded-lg bg-black/25 text-md w-7/8 outline-none" placeholder="Subject"/>
          <textarea rows={7} className="mt-4 py-2 px-2 rounded-lg bg-black/25 text-md w-7/8 outline-none" placeholder="Your Message"></textarea>
          <button className="text-md py-2 px-4 mb-4 bg-indigo-600/50 hover:bg-indigo-700/80 flex flex-row items-center mt-8 rounded-lg">
            <span className="mr-2">Send</span>
            <BsSendFill />
          </button>
        </div>
      </div>
    )
  }
  
  export default Contact