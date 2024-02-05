import Wrapper from "../assets/wrappers/Catalog.js";
import MoviesContainer from "./MoviesContainer.jsx";
import Search from "./Search.jsx";
import { useAppContext } from "../context/AppContext";

function Catalog() {
  const { movies, users, curUserID, query } = useAppContext();
  const currentUser = users.find((u) => u.id === curUserID);
  const searchResult = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(query.toLowerCase());
  });
  // const availableMovies = searchResult.filter((movie) => !movie.isRented);
  const rentedMovies = searchResult.filter((movie) => movie.isRented);

  return (
    <Wrapper>
      <header>
        <Search />
        <div className="user-info">
          <div>
            Hello, <strong>{currentUser.name}</strong>
          </div>
          <div>
            Budget: <strong>${currentUser.budget}</strong>
          </div>
        </div>
      </header>
      <div className="containers">
        {rentedMovies.length > 0 && (
          <>
            <MoviesContainer
              key="Rented"
              sectionTilte="Rented"
              movies={rentedMovies}
              currentUser={currentUser}
            />
            <hr />
          </>
        )}
        <MoviesContainer
          key="Catalog"
          sectionTilte="Catalog"
          movies={searchResult}
          currentUser={currentUser}
        />
      </div>
    </Wrapper>
  );
}

export default Catalog;
