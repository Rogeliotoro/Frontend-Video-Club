import "./RegistroUsuario.css";

const RegistroUsuario = () => {
  return (
    <div className="crearUsuario">
      <h2 className="h2registro">REGISTRO DE USUARIO</h2>
      <form >
        <label className="labelCrearUsuario" htmlFor="nombre">
          Nombre
        </label>
        <input
          className="inputCrearUsuario"
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingrese su Nombre"
        />
        <label className="labelCrearUsuario" htmlFor="apellidos">
          Apellidos
        </label>
        <input
          className="inputCrearUsuario"
          type="text"
          id="apellidos"
          name="apellidos"
        />
        <label className="labelCrearUsuario" htmlFor="email">
          Email
        </label>
        <input
          className="inputCrearUsuario"
          type="email"
          id="email"
          name="email"
          placeholder="ejemplo@dominio.com"
        />
        <label className="labelCrearUsuario" htmlFor="contraseña">
          Contraseña
        </label>
        <input
          className="inputCrearUsuario"
          type="password"
          id="contraseña"
          name="contraseña"
        />
        <label className="labelCrearUsuario" htmlFor="tel">
          Telefono
        </label>
        <input
          className="inputCrearUsuario"
          type="tel"
          id="tel"
          name="tel"
          maxLength="9"
          minLength="9"
        />
        <p> Estoy de acuerdo con <a href="#"> Terminos y condiciones</a></p>
        <input
          className="botonCrearUsuario"
          type="submit"
          value="Registrarse"
        />
        <p><a href="#">¿Ya tengo Cuenta?</a></p>
      </form>
    </div>
  );
};

export default RegistroUsuario;