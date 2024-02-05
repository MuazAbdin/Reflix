import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0 auto;
  height: calc(100vh - 5rem);
  width: min(90%, 950px);
  overflow-y: scroll;
  padding: 1em;
  font-family: var(--main-font);
  font-size: 1.5em;

  .title {
    font-family: var(--title-font);
    font-size: 1.5em;
    font-weight: 100;
    margin-bottom: 0.5em;
    text-align: center;
  }

  .details {
    background-color: #87cefa54;
    border-radius: 0.5em;
    box-shadow: 0 0 15px;
    display: grid;
    gap: 1em;
    padding: 1em;
    grid-auto-rows: min-content 1fr;
    grid-template-areas:
      "img rent"
      "img desc";
  }

  img {
    height: 13em;
    width: 10em;
    grid-area: img;
    border-radius: 0.25em;
  }

  .rent-status {
    grid-area: rent;
    font-weight: 900;
  }

  .rented {
    text-shadow: 0 0 25px red;
    color: darkred;
  }

  .available {
    text-shadow: 0 0 25px green;
    color: darkgreen;
  }

  .description {
    grid-area: desc;
  }
`;

export default Wrapper;
