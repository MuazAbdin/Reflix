import { ACTIONS, useAppContext } from "../context/AppContext.jsx";
import Movie from "./Movie.jsx";

function MoviesContainer({ sectionTilte, movies = [] }) {
  const { curUserID, dispatch } = useAppContext();
  const isRentedMoviesContainer = sectionTilte === "Rented";

  function handleRent(movieID) {
    dispatch({
      type: ACTIONS.RENT_MOVIE,
      payload: { userID: curUserID, movieID },
    });
  }

  function handleReturn(movieID) {
    dispatch({
      type: ACTIONS.RETURN_MOVIE,
      payload: { userID: curUserID, movieID },
    });
  }

  return (
    <section className="movies-container">
      <h4 className="title">{sectionTilte}</h4>
      <ol className="movies-cards-deck">
        {movies.map((movie, i) => (
          <Movie
            key={movie.id}
            idx={i}
            movie={movie}
            isRentedMoviesContainer={isRentedMoviesContainer}
            handleAction={isRentedMoviesContainer ? handleReturn : handleRent}
          />
        ))}
      </ol>
    </section>
  );
}

export default MoviesContainer;
