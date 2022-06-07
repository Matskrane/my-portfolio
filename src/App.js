import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Switch from 'react-js-switch';
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="main-container" id={theme}>
          <Router>
            <SideBar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
          <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <Switch onChange={toggleTheme} value={theme === "dark"} />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
