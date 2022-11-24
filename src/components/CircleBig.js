import "./CircleBig.css";

function CircleBig(props) {
  return (
    <div
      className={`game-element-bg-l ${props.choice}-bg-l ${
        props.player === props.winner ? "winner-border" : ""
      }`}
    >
      <div className={`game-element-l ${props.choice}-l`}>
        <img src={props.img} className={`${props.choice}-img`} />
      </div>
    </div>
  );
}

export default CircleBig;
