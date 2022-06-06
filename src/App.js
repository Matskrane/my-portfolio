import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Projects from './pages/Projects';
import ThemeSwitcher from './components/ThemeSwitcher';
import Contact from './pages/Contact';



function App() {
  return (
    <>
    <Router>
    <div className='main-container'>
    <SideBar />
    <Routes>
    <Route index element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
    <ThemeSwitcher />
    </div>
    </Router>
    </>
  )
}

export default App;
