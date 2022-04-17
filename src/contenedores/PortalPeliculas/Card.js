import "./Card.css";
export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className="movieCard">
      <img
        width={230}
        height={345}
        className="movieImage"
        src={imageUrl}
        alt={movie.title}
      />
      <div className="titulo">{movie.title}</div>
      <div className="numero">{movie.vote_average}</div>
      <div className="texto">{movie.overview}</div>
    </li>
  );
}