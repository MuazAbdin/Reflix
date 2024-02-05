import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Landing";
import { ACTIONS, useAppContext } from "../context/AppContext";

function Landing() {
  const { users, dispatch } = useAppContext();

  function handleChooseUser(userID) {
    dispatch({ type: ACTIONS.CHOOSE_USER, payload: userID });
    dispatch({ type: ACTIONS.SET_QUERY, payload: "" });
  }

  return (
    <Wrapper>
      <h2>Who's watching?</h2>
      <menu>
        {users.map((user) => (
          <Link key={user.id} to="/catalog">
            <li
              style={{ backgroundColor: `${user.color}` }}
              onClick={() => handleChooseUser(user.id)}
            >
              {user.name}
            </li>
          </Link>
        ))}
      </menu>
    </Wrapper>
  );
}

export default Landing;
