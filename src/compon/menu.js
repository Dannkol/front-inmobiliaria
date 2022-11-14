import { Link } from "react-router-dom";

import user_icon from "../img/svg/Vector.svg";
import "../css/menu.css";

const menu_add = () => {
  return (
    <div className="menu-add">
      <img src={user_icon} className="user_icon-add" alt="user" />
      <Link className="menu-link" to="/new">
        <div className="cag_content">Crear Inmueble</div>
      </Link>
    </div>
  );
};

function menu() {
  return (
    <div className="menu">
      <header className="menu-header">
        <div className="NavContec">
          <div className="navReact">
            <div className="item" id="Inicio">
              <Link to="/">Inicio</Link>
            </div>
            <div className="item" id="QS">
              <Link to="/somos">¿Quienes somos?</Link>
            </div>
            <div className="item" id="Contact">
              <Link to="/contact">Contactanos</Link>
            </div>
            <div className="push"></div>
            <div className="user_icon">
              <div className="user_icon">
                {
                  <div className="dropbtn-menu">
                    <img src={user_icon} className="user_icon" alt="user" />
                    <div>{menu_add()}</div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default menu;
