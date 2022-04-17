import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VistaPrincipal from "./componentes/VistaPrincipal/VistaPrincipal.js";
import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import RegistroUsuario from "./contenedores/RegistroUsuario/RegistroUsuario.js";
import LoginUsuario from "./contenedores/LoginUsuario/LoginUsuario.js";
import TodasPeliculas from "./contenedores/PortalPeliculas/Portal.js";


function App ()  {
  return(
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<VistaPrincipal />}></Route>
      <Route path="/registro" element={<RegistroUsuario />}></Route>
      <Route path="/login" element={<LoginUsuario />}></Route>
      <Route path="/peliculas" element={<TodasPeliculas />}></Route>
      </Routes>
      <div></div>
      <Footer />
      </BrowserRouter>
    </div>
  )

}


export default App;