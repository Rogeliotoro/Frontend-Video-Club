import { useNavigate } from "react-router-dom";
import "./LoginUsuario.css";

const LoginUsuario = () => {
    const navegar = useNavigate();
    const formSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();

    try {
      let loginUser = await fetch(
        "https://apirest-video.herokuapp.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            email: e.target[0].value,
            contraseña: e.target[1].value,
          },
        }
      );
      loginUser = await loginUser.json();

      if (loginUser) {
        localStorage.setItem("email", loginUser.email);
        localStorage.setItem("contraseña", loginUser.contraseña);
        if (localStorage.getItem()) {
          navegar("/peliculas");
        } 
      } else {
        alert("Usuario y/o contraseña incorrecto.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="loginUsuario">
      <h2>LOGIN DE USUARIO</h2>
      <form onSubmit={(e) => formSubmit(e)}>
        <label className="labelUsuario" htmlFor="email">Email</label>
        <input className="inputUsuario" 
        type="email" 
        id="email" 
        name="email" />
        <label className="labelUsuario" htmlFor="contraseña">Contraseña</label>
        <input
          className="inputUsuario"
          type="password"
          id="contraseña"
          name="contraseña"
        />
        <input type="submit" value="Entrar" className="botonUsuario" />
        <a href="/registro">¿No tienes una cuenta?</a>
      </form>
    </div>
  );
};

export default LoginUsuario;