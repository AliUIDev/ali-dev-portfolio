import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import AboutContact from "./components/AboutContact/AboutContact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <AboutContact />
      </main>
    </div>
  );
}

export default App;