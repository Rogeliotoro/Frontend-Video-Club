import "./RegistroUsuario.css";

const RegistroUsuario = () => {
  return (
    <div>
      <a href="/" ><img className="logo" src="https://i.ibb.co/s5TmSPj/ROFLIX-1.png" alt="ROFLIX-1" border="0"/></a>
      <form className="crearUsuario">
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
          placeholder="+34#########"
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