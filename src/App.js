import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { FormControlLabel } from '@mui/material';
import { useState } from "react";
import { MaterialUISwitch } from './components/StyledThemeSwitcher';



function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <>
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
          <label className='label'> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <FormControlLabel
            checked={theme === "dark"}
            onChange={toggleTheme}
            control={<MaterialUISwitch sx={{ m: 1 }} />}
          />
        </div>
      </div>
    </>
  );
}

export default App;
