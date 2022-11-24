import "./Modal.css";
import iconClose from "../images/icon-close.svg";
import rules from "../images/image-rules-bonus.svg";

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-window">
        <div className="modal-top">
          <p className="modal-text">Rules</p>
          <img
            src={iconClose}
            className="icon-close"
            alt="close icon"
            onClick={() => props.setShowModal(false)}
          />
        </div>
        <img src={rules} className="img-rules" alt="image rules" />
      </div>
      <div className="modal-bg" onClick={() => props.setShowModal(false)}></div>
    </div>
  );
}

export default Modal;
