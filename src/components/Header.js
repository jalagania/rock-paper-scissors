import "./Header.css";
import logo from "../images/logo-bonus.svg";

function Header(props) {
  return (
    <header className="heading-box">
      <img src={logo} alt="logo" />
      <div className="score-box">
        <p className="score-text">Score</p>
        <p className="score">{props.score}</p>
      </div>
    </header>
  );
}

export default Header;
