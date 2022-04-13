import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {

  return (
    <header>
        <div>
          <div className="enlaces">
            <Link to="/registro">Registrarse</Link>
          </div>
          <div className="enlaces">
            <Link to="/login">Login</Link>
          </div>
        </div>
    </header>
  );
};

export default Header;