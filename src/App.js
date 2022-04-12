import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VistaPrincipal from "./componentes/VistaPrincipal/VistaPrincipal.js";

function App ()  {
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<VistaPrincipal />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )

}


export default App;