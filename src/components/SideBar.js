import { faBriefcase, faComments, faHouse, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <>
        <div className='aside'>
            <div className='logo'>
                <Link to={'/'}><span>爪</span>ats</Link>
            </div>
            <div className='nav-toggler'>
                <span></span>
            </div>
            <ul className='nav'>
                <li><Link to={'/'}><FontAwesomeIcon icon={faHouse} />Home</Link></li>
                <li><Link to={'/about'}><FontAwesomeIcon icon={faUser} />About</Link></li>
                <li><Link to={'/projects'}><FontAwesomeIcon icon={faBriefcase} />Projects</Link></li>
                <li><Link to={'/about'}><FontAwesomeIcon icon={faComments} />Contact</Link></li>
            </ul>
        </div>
    </>
  )
}

export default SideBar