import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VistaPrincipal from "./componentes/VistaPrincipal/VistaPrincipal.js";
import Footer from "./componentes/Footer/Footer";

function App ()  {
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<VistaPrincipal />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )

}


export default App;