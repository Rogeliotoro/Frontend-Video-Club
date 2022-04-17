import "./Portal.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieCard } from "./Card.js";


const TodasPeliculas = () => {
    const navegar = useNavigate();
  
    const [peliculas, setPeliculas] = useState([]);
    const getPeliculas = async () => {
        const peliculasRes = await fetch(
            "https://apirest-video.herokuapp.com/api/movies", 
            {
                method: 'GET',
            }
          );
      const datosPeliculas = await peliculasRes.json();
      setPeliculas(datosPeliculas);
    };
    useEffect(() => {
      try {
        getPeliculas();
      } catch (error) {
        console.log(error);
      }
    }, []);
    console.log(peliculas)
    return (
        <div className="orden">
          {peliculas.map((movie) => {
                return (
                    <ul >
                      {peliculas.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                      ))}
                    </ul>
                  );
            

          })}
        </div>
      );
};

export default TodasPeliculas