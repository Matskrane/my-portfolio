import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Projects from './pages/Projects';



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
    </Routes>
    </div>
    </Router>
    </>
  )
}

export default App;
