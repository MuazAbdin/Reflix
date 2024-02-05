import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Header";

function Header() {
  return (
    <Wrapper>
      <nav>
        <menu>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/catalog">
            <li>Catalog</li>
          </Link>
        </menu>
      </nav>
      <div className="logo">REFLIX</div>
    </Wrapper>
  );
}

export default Header;
