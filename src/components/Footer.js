import "./Footer.css";
import Attribution from "./Attribution";

function Footer(props) {
  return (
    <footer>
      <button className="btn-rules" onClick={() => props.setShowModal(true)}>
        Rules
      </button>
      <Attribution />
    </footer>
  );
}

export default Footer;
