import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ThemeSwitcher = () => {
  return (
    <>
      <div className="style-switcher">
        <div className="style-switcher-toggler s-icon">
         <FontAwesomeIcon icon={faCog} />
        </div>
        <div className="day-night s-icon">
          <i className="fas "></i>
        </div>
        <h4>Theme Colors</h4>
        <div className="colors">
          <span className="color-1"></span>
          <span className="color-2"></span>
          <span className="color-3"></span>
          <span className="color-4"></span>
          <span className="color-5"></span>
        </div>
      </div>
    </>
  );
}

export default ThemeSwitcher