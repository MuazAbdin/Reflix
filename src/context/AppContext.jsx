import { createContext, useReducer, useContext, useEffect } from "react";
import initUsers from "../assets/data/users.js";
import initMovies from "../assets/data/movies.js";

// constant categories
export const ACTIONS = {
  RENT_MOVIE: "RENT_MOVIE",
  RETURN_MOVIE: "RETURN_MOVIE",
  CHOOSE_USER: "CHOOSE_USER",
  SET_QUERY: "SET_QUERY",
  CLOSE_MODAL: "CLOSE_MODAL",
};

export const MOVIE_RENT = 3;

// The Reducer
export const AppReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHOOSE_USER: {
      return { ...state, curUserID: action.payload };
    }
    case ACTIONS.RENT_MOVIE: {
      const { userID, movieID } = action.payload;

      const movieIdx = state.movies.findIndex((m) => m.id === movieID);
      const movie = state.movies[movieIdx];
      if (movie.isRented) return state;
      const updatedMovie = { ...movie, isRented: true };

      const userIdx = state.users.findIndex((u) => u.id === userID);
      const user = state.users[userIdx];
      if (user.budget < MOVIE_RENT) return { ...state, isModalOpened: true };
      const updatedUser = {
        ...user,
        budget: user.budget - 3,
        rentedMoviesIDs: [...user.rentedMoviesIDs, movieID],
      };
      return {
        ...state,
        users: state.users.with(userIdx, updatedUser),
        movies: state.movies.with(movieIdx, updatedMovie),
      };
    }
    case ACTIONS.RETURN_MOVIE: {
      const { userID, movieID } = action.payload;

      const movieIdx = state.movies.findIndex((m) => m.id === movieID);
      const movie = state.movies[movieIdx];
      const updatedMovie = { ...movie, isRented: false };

      const userIdx = state.users.findIndex((u) => u.id === userID);
      const user = state.users[userIdx];
      const updatedUser = {
        ...user,
        budget: user.budget + 3,
        rentedMoviesIDs: user.rentedMoviesIDs.filter((id) => id !== movieID),
      };

      return {
        ...state,
        users: state.users.with(userIdx, updatedUser),
        movies: state.movies.with(movieIdx, updatedMovie),
      };
    }
    case ACTIONS.SET_QUERY: {
      return { ...state, query: action.payload };
    }
    case ACTIONS.CLOSE_MODAL: {
      return { ...state, isModalOpened: false };
    }
    default:
      return state;
  }
};

const getLocalStorage = (key, defaultValue = []) => {
  if (typeof window !== "undefined") {
    const storedTasks = localStorage.getItem(key);
    return JSON.parse(storedTasks) || defaultValue;
  }
};

// Initial State
const initialState = {
  // movies: initMovies,
  // users: initUsers,
  movies: getLocalStorage("movies"),
  users: getLocalStorage("users"),
  curUserID: 0,
  query: "",
  isModalOpened: false,
};

// Context
export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

// The Provider
export function AppProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state.users));
    localStorage.setItem("movies", JSON.stringify(state.movies));
  }, [state.users, state.movies]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}
