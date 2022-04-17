import "./Portal.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TodasPeliculas = () => {
    const navegar = useNavigate();
  
    const [peliculas, setPeliculas] = useState([]);
    const getPeliculas = async () => {
        const peliculasRes = await fetch(
            "https://mdblist.p.rapidapi.com/?s=game", 
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'mdblist.p.rapidapi.com',
                    'X-RapidAPI-Key': '8a22628fc4msh65ccc05b2e37abcp103b2fjsn402c631acfdf'
                }
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
        <div className="citasCardAll">
          {peliculas.map(() => {

          })}
        </div>
      );
};

export default TodasPeliculas