import "./Alquileres.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AlquilarPelicula = () => {
  const navegar = useNavigate();
  const [peliculas, setPeliculas] = useState([]);

  const getpeliculas = async () => {
    const peliculasRes = await fetch(
      "https://apirest-video.herokuapp.com/api/movies",
      {
        method: "GET",
      }
    );
    const peliculasData = await peliculasRes.json();
    setPeliculas(peliculasData);
  };
  useEffect(() => {
    try {
      getpeliculas();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        fecha_alquiler: e.target[0].value,
        fecha_devolucion: e.target[1].value,
        idPelicula: e.target[2].value,
        idUsuario: localStorage.getItem("id"),
      };

      const postPelicula = await fetch(
        "https://clone-netflix-back.herokuapp.com/alquileres",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (postPelicula) {

        navegar("/peliculas");
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };
  return (
    <div className="alquileres">
      <div>
        <h2 >Alquilar Película</h2>
        <form onSubmit={(e) => formSubmit(e)}>
        </form>
      </div>
    </div>
  );
};

export default AlquilarPelicula;