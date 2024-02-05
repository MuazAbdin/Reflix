import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../context/AppContext";

function Movie({ idx, movie, isRentedMoviesContainer, handleAction }) {
  const { curUserID, users } = useAppContext();
  const user = users.find((user) => user.id === curUserID);
  const isMovieRentedByUser = user.rentedMoviesIDs.includes(movie.id);
  const rentedClass = isRentedMoviesContainer ? "rented" : "";

  let movieBtn = undefined;
  if (!movie.isRented)
    movieBtn = (
      <button onClick={() => handleAction(movie.id)}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    );
  else if (isMovieRentedByUser && isRentedMoviesContainer) {
    movieBtn = (
      <button onClick={() => handleAction(movie.id)}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
    );
  }

  return (
    <li className={`movie-card ${idx % 2 ? "even" : "odd"} ${rentedClass}`}>
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.img} alt={movie.title} />
      </Link>
      {movieBtn}
    </li>
  );
}

export default Movie;
