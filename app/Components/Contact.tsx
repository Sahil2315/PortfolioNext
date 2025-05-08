"use client";
import { useState } from "react";
import { BsDiscord, BsGithub, BsLinkedin, BsSendFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { toast } from "sonner";

const Contact = () => {
  const [senderName, setSenderName] = useState<string>("");
  const [senderEmail, setSenderEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  async function formSubmit() {
    if (senderName && senderEmail && subject && message) {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderName: senderName,
          senderEmail: senderEmail,
          subject: subject,
          message: message,
        }),
      });
      const respjson = await response.json();
      setSenderEmail("");
      setSenderName("");
      setSubject("");
      setMessage("");
      if (respjson.message == "Successful") {
        toast(
          <span className="text-xl p-4 text-emerald-500">
            Message Sent Succesfully.
          </span>
        );
      } else {
        toast(
          <span className="text-xl p-4 text-rose-500">
            Message Couldn&apos;t be sent. Please Try Again Later.
          </span>
        );
      }
    } else {
      toast("Fields can't be left Empty!");
    }
  }
  return (
    <div
      id="sect-contact"
      className="bigSections w-full h-screen flex justify-center items-center"
    >
      <div className="2xl:w-2/5 max-2xl:w-3/5 max-lg:w-4/5 max-sm:w-5/6 rounded-xl bg-indigo-700/10 p-6 flex flex-col items-center relative">
        <div className="top-2 right-2 absolute xl:text-[35px] max-xl:text-[25px] max-md:text-[19px] flex flex-row">
          <a
            target="_blank"
            className="opacity-40 transition-all duration-400 hover:opacity-85"
            href="https://github.com/Sahil2315/"
          >
            <BsGithub />
          </a>
          <a
            target="_blank"
            className="opacity-40 ml-4 transition-all duration-400 hover:opacity-85"
            href="https://www.linkedin.com/in/sahil-nigam-496658238/"
          >
            <BsLinkedin />
          </a>
          <a
            target="_blank"
            className="opacity-40 ml-4 transition-all duration-400 hover:opacity-85"
            href="https://discord.com/users/sahilnigam"
          >
            <BsDiscord />
          </a>
          <a
            target="_blank"
            className="opacity-40 ml-4 transition-all duration-400 hover:opacity-85"
            href="https://leetcode.com/u/Sahil2315/"
          >
            <SiLeetcode />
          </a>
        </div>
        <span className="xl:text-3xl max-xl:text-xl max-md:text-md font-semibold mt-12">
          Contact Me
        </span>
        <span className="font-semibold xl:text-xl max-xl:text-md max-md:text-xs mt-4">
          I&apos;ll Be Glad to Connect with You.
        </span>
        <input
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          type="text"
          className="mt-8 py-2 px-2 rounded-lg bg-black/25 lg:text-md max-lg:text-sm w-7/8 outline-none"
          placeholder="Your Name"
        />
        <input
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          type="text"
          className="mt-4 py-2 px-2 rounded-lg bg-black/25 lg:text-md max-lg:text-sm w-7/8 outline-none"
          placeholder="Your Email"
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          className="mt-4 py-2 px-2 rounded-lg bg-black/25 lg:text-md max-lg:text-sm w-7/8 outline-none"
          placeholder="Subject"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={7}
          className="mt-4 py-2 px-2 rounded-lg bg-black/25 lg:text-md max-lg:text-sm w-7/8 outline-none"
          placeholder="Your Message"
        ></textarea>
        <button
          onClick={formSubmit}
          className="lg:text-md max-lg:text-sm py-2 px-4 mb-4 bg-indigo-600/50 hover:bg-indigo-700/80 flex flex-row items-center mt-8 rounded-lg"
        >
          <span className="mr-2">Send</span>
          <BsSendFill />
        </button>
      </div>
    </div>
  );
};

export default Contact;
