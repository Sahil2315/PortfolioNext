const About = () => {
  return (
    <div id="sect-about" className="bigSections w-full min-h-screen relative">
      <div className="bg-about h-full w-full absolute z-0 top-0 left-0"></div>
      <div className="bg-about2 h-full w-full absolute z-10 top-0 left-0"></div>
      <div className="h-full w-full absolute z-20 top-0 left-0 bg-black/40 backdrop-blur-[2px]"></div>
      <div className=" relative z-50 flex flex-col w-full h-full justify-center items-center">
        <div className="max-2xl:w-3/5 max-lg:w-4/5 max-sm:5/6 2xl:w-1/2">
          <span className="xl:text-3xl md:text-xl max-md:text-lg font-bold">
            About Me
          </span>
          <p className="xl:text-xl lg:text-lg max-xl:text-md lg:font-semibold lg:mt-8 max-lg:mt-4 max-sm:text-sm">
            I am Sahil Nigam, a recent graduate with a Bachelor&apos;s degree
            (B.Tech) in Computer Science and Engineering, actively seeking
            Software Developer roles. My journey into the world of technology
            started during high school as a passionate gamer. Over time, my
            curiosity about building computers evolved into a love for learning
            how they work. I pursued my interest further by enrolling in a
            school-offered programming course, and the thrill of coding and
            creating has stayed with me ever since.
          </p>
          <p className="xl:text-xl lg:text-lg max-lg:text-md lg:font-semibold lg:mt-4 max-lg:mt-2 max-sm:text-sm">
            Today, I have solid programming knowledge and practical experience
            with TypeScript, JavaScript, Python, C++, and C, complemented by
            expertise in web development (MERN Stack and PERN Stack and NextJS)
            along with Backend Python Development (FastAPI) and mobile
            development (React Native). I enjoy leveraging these skills to build
            feature-rich and fully functional applications.
          </p>
          <p className="xl:text-xl lg:text-lg max-lg:text-md lg:font-semibold lg:mt-4 max-lg:mt-2 max-sm:text-sm">
            Beyond the technical realm, I am deeply passionate about sports,
            particularly basketball. I also have an appreciation for music,
            especially rock genres, and enjoy playing the guitar in my free
            time.
          </p>
          <p className="xl:text-xl lg:text-lg max-lg:text-md lg:font-semibold lg:mt-4 max-lg:mt-2 max-sm:text-sm">
            Let&apos;s collaborate and innovate—exploring how my skills, experience,
            and enthusiasm can make an impact!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
