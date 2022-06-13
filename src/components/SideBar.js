import { faBriefcase, faComments, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';


const SideBar = () => {

    const currentActiveNavLink = ({ isActive }) => {
        return {
            color: isActive  
        }
    };
    
    const [toggle, setToggle] = useState(true);
    
  return (
    <>  
        <div onClick={() => setToggle(!toggle)} className='nav-toggler'>
            <span></span>
        </div>
        {toggle && (
        <div className='aside mobile'>
            <div className='logo'>
                <Link to={'/'}><span>𝗠</span>ats</Link>
            </div>     
            <ul className='nav'>
                <li><NavLink style={currentActiveNavLink} to={'/'}><FontAwesomeIcon  icon={faHouse} />Home</NavLink></li>
                <li><NavLink style={currentActiveNavLink} to={'/about'}><FontAwesomeIcon  icon={faUser} />About</NavLink></li>
                <li><NavLink style={currentActiveNavLink} to={'/projects'}><FontAwesomeIcon icon={faBriefcase} />Projects</NavLink></li>
                <li><NavLink style={currentActiveNavLink} to={'/contact'}><FontAwesomeIcon icon={faComments} />Contact</NavLink></li>
            </ul>         
        </div>
        )}
               <div className='aside desktop'>
            <div className='logo'>
                <Link to={'/'}><span>𝗠</span>ats</Link>
            </div>     
            <ul className='nav'>
                <li><NavLink style={currentActiveNavLink} to={'/'}><FontAwesomeIcon  icon={faHouse} />Home</NavLink></li>
                <li><NavLink style={currentActiveNavLink} to={'/about'}><FontAwesomeIcon  icon={faUser} />About</NavLink></li>
                <li><NavLink style={currentActiveNavLink} to={'/projects'}><FontAwesomeIcon icon={faBriefcase} />Projects</NavLink></li>
                <li><NavLink style={currentActiveNavLink} to={'/contact'}><FontAwesomeIcon icon={faComments} />Contact</NavLink></li>
            </ul>         
        </div>
    </>
  )
}

export default SideBar