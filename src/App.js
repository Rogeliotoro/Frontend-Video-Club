import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VistaPrincipal from "./componentes/VistaPrincipal/VistaPrincipal.js";
import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";

function App ()  {
  return(
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<VistaPrincipal />}></Route>
      </Routes>
      <div></div>
      <Footer />
      </BrowserRouter>
    </div>
  )

}


export default App;