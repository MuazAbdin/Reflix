import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  font-family: var(--main-font);
  font-size: 1.5rem;
  border-bottom: 1px solid;
  box-shadow: 0 1px 15px;

  menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
  }

  li {
    cursor: pointer;
    color: white;
  }

  li:hover {
    font-weight: 600;
  }

  .logo {
    font-family: var(--title-font);
    font-size: 2rem;
    color: darkblue;
  }

  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;

export default Wrapper;
