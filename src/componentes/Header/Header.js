import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
  return (
    <header>
        <div><a href="/" ><img className="logo" src="https://i.ibb.co/s5TmSPj/ROFLIX-1.png" alt="ROFLIX-1" border="0"/></a>

          <div className="enlaces">
            <Link to="/registro">Registrarse</Link>
          </div>
          <div className="enlaces">
            <Link to="/login">Iniciar Sesion</Link>
          </div>
        </div>
    </header>
  );
};

export default Header;