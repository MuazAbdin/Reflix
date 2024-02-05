import { useParams } from "react-router";
import { useAppContext } from "../context/AppContext.jsx";
import Wrapper from "../assets/wrappers/MovieDetails.js";

function MovieDetail() {
  const { movieID } = useParams();
  const { movies, users } = useAppContext();

  // const { name } = users.find((user) =>
  //   user.rentedMoviesIDs.includes(parseInt(movieID))
  // );

  const { isRented, title, year, img, descrShort } = movies.find(
    (movie) => movie.id === parseInt(movieID)
  );

  return (
    <Wrapper>
      <h3 className="title">
        {title} ({year})
      </h3>
      <div className="details">
        <img src={img} alt={title} />
        <div className={`rent-status ${isRented ? "rented" : "available"}`}>
          {isRented ? "Rented" : "Available"}
          {/* <span> by {name}</span> */}
        </div>
        <p className="description">{descrShort}</p>
      </div>
    </Wrapper>
  );
}

export default MovieDetail;
