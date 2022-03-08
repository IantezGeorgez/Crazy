import "./styles/App.css"
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/Resume";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

function App({show}) {
  return (
    <div id="main">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="work" element={<Work show={show}/>} />
          <Route path="resume" element={<About show={show}/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
