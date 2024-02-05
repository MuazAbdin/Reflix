import styled from "styled-components";

const Wrapper = styled.section`
  height: calc(100vh - 3.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  padding: 1em;
  font-family: var(--main-font);
  font-size: 1.5em;

  header,
  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    font-size: 1.25rem;
    color: darkblue;
  }

  header {
    width: 100%;
  }

  .containers {
    width: 100%;
    overflow-y: scroll;
    padding-bottom: 1em;
  }

  .search-field {
    border: none;
    width: 40%;
  }

  #search-movies {
    height: 100%;
    width: 100%;
    border: none;
    font-family: :var(--main-font);
    font-size: 1.25rem;
    padding: 0.25rem 1rem;
    border-radius: 50px;
  }

  .movies-cards-deck {
    list-style-type:none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1em;
  }

  .title {
    margin: 0.25em;
    align-self: flex-start;
    color: #EFEBE0;
  }

  .movie-card {
    width: 16rem;
    height: 23rem;
    position: relative;
    cursor: pointer;
  }

  .rented {
    width: 11rem;
    height: 15rem;
  }

  .movie-card:hover {
    box-shadow: 0px 0px 15px black;
  }

  .even:hover {
    transform: rotateZ(-3deg);
  }

  .odd:hover {
    transform: rotateZ(3deg);
  }

  img {
    width: 100%;
    height: 100%;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    border: none;
    font-size: 1em;
    color: white;
    background-color: #0000008f;
    padding: 0.5rem;
    border-radius: 0 0 0 0.5rem;
  }

  button:hover {
    font-size: 1.25em;
  }
`;

export default Wrapper;
