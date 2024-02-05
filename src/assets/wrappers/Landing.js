import styled from "styled-components";

const Wrapper = styled.section`
  height: calc(100vh - 5rem);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em;
  margin-top: 1rem;
  font-family: var(--main-font);
  font-size: 1.5em;

  menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem;
    width: 100%;
  }

  li {
    cursor: pointer;
    padding: 2em;
    font-family: var(--title-font);
    color: #2d2e2e;
    font-size: 1.5rem;
    border: 2px solid #2d2e2e;
    border-radius: 0.5rem;
  }

  li:hover {
    box-shadow: 0px 0px 10px black;
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
