import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { ACTIONS, MOVIE_RENT, useAppContext } from "../context/AppContext.jsx";
import Wrapper from "../assets/wrappers/Modal.js";

function Modal() {
  const { isModalOpened, dispatch } = useAppContext();
  const dialog = useRef();

  useEffect(() => {
    isModalOpened ? dialog.current.showModal() : dialog.current.close();
  }, [isModalOpened]);

  function handleClose() {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  }

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={handleClose}>
      <Wrapper>
        <h2>insufficient budget</h2>
        <FontAwesomeIcon icon={faTriangleExclamation} />
        <p>You must have at least ${MOVIE_RENT} to rent a movie.</p>
        <button onClick={handleClose}>close</button>
      </Wrapper>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
