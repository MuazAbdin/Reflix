import { ACTIONS, useAppContext } from "../context/AppContext";

const Search = () => {
  const { query, dispatch } = useAppContext();
  function onChangeQuery(newQuery) {
    dispatch({ type: ACTIONS.SET_QUERY, payload: newQuery });
  }

  return (
    <fieldset className="search-field">
      <input
        type="search"
        id="search-movies"
        name="search-movies"
        placeholder="Search Movies ..."
        value={query}
        onChange={(e) => onChangeQuery(e.target.value)}
      />
    </fieldset>
  );
};

export default Search;
