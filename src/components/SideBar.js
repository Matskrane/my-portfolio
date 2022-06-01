import { faBriefcase, faComments, faHouse, faList, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SideBar = () => {
  return (
    <>
        <div className='aside'>
            <div className='logo'>
                <a href='#'><span>爪</span>ats</a>
            </div>
            <div className='nav-toggler'>
                <span></span>
            </div>
            <ul className='nav'>
                <li><a href='#'><FontAwesomeIcon icon={faHouse} />Home</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faUser} />About</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faList} />Services</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faBriefcase} />Portfolio</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faComments} />Contact</a></li>
            </ul>
        </div>
    </>
  )
}

export default SideBar