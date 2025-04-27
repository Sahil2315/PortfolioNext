import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  const activeId = "sect-home"
  return (
    <div className="w-full h-full bg-gray-900 text-white">
      <Navbar curActive={activeId} />
      <div className="flex flex-col">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
