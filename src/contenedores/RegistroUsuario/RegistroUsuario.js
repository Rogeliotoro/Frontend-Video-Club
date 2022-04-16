import { useNavigate } from "react-router-dom";
import "./RegistroUsuario.css";

const RegistroUsuario = () => {
    const navegar = useNavigate();
    const formSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    try {
        const formData = {
          nombre: e.target[0].value,
          apellidos: e.target[1].value,
          email: e.target[2].value,
          contraseña: e.target[3].value,
          telefono: e.target[4].value,
        };

        const postUser = await fetch(
            "https://apirest-video.herokuapp.com/api/users",
            {
              method: "POST",
              body: JSON.stringify(formData),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const usuarioCreado = await postUser.json();
    
          if (usuarioCreado) {
            navegar("/login");
          }
        } catch (error) {
          alert("no se ha cargado la bd " + error);
        }
      };
  return (
    <div>
      <a href="/" ><img className="logo" src="https://i.ibb.co/s5TmSPj/ROFLIX-1.png" alt="ROFLIX-1" border="0"/></a>
      <form onSubmit={(e) => formSubmit(e)} className="crearUsuario">
      <h2>REGISTRO DE USUARIO</h2>
        <label className="labelCrearUsuario" htmlFor="nombre">
        </label>
        <input
          className="inputCrearUsuario"
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingrese su Nombre"
        />
        <label className="labelCrearUsuario" htmlFor="apellidos">
        </label>
        <input
          className="inputCrearUsuario"
          type="text"
          id="apellidos"
          name="apellidos"
          placeholder="Ingrese sus Apellidos"
        />
        <label className="labelCrearUsuario" htmlFor="email">
        </label>
        <input
          className="inputCrearUsuario"
          type="email"
          id="email"
          name="email"
          placeholder="ejemplo@dominio.com"
        />
        <label className="labelCrearUsuario" htmlFor="contraseña">
        </label>
        <input
          className="inputCrearUsuario"
          type="password"
          id="contraseña"
          name="contraseña"
          placeholder="Ingrese contraseña nueva"
        />
        <label className="labelCrearUsuario" htmlFor="tel">
        </label>
        <input
          className="inputCrearUsuario"
          type="tel"
          id="tel"
          name="tel"
          maxLength="12"
          minLength="12"
          placeholder="34#########"
        />
        <p> Estoy de acuerdo con <a href="#"> Terminos y condiciones</a></p>
        <input
          className="botonCrearUsuario"
          type="submit"
          value="Registrarse"
        />
        <p><a href="/login">¿Ya tengo Cuenta?</a></p>
      </form>
    </div>
  );
};

export default RegistroUsuario;