import "./LoginUsuario.css";

const LoginUsuario = () => {
  return (
    <div className="loginUsuario">
      <h2>LOGIN DE USUARIO</h2>
      <form>
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