import { useState } from "react";
import CircleBig from "./CircleBig";
import "./StageTwo.css";

function StageTwo(props) {
  const [counter, setCounter] = useState(0);

  function loopComputerChoice() {
    setTimeout(() => {
      if (counter < 5) {
        setCounter(counter + 1);
      }
    }, 120);

    return (
      <CircleBig
        choice={props.marks[counter].name}
        img={props.marks[counter].img}
        player="computer"
        winner=""
      />
    );
  }

  return (
    <div className="game-step-2">
      <div className="user-box">
        <p className="text-picked_user">You Picked</p>
        <CircleBig
          choice={props.userChoice}
          img={props.userImg}
          player="user"
          winner={props.winner}
        />
      </div>
      {props.showResult && (
        <div className="result-box">
          <p className="result-text">{props.resultText}</p>
          <button className="btn-play" onClick={() => props.playAgain()}>
            Play Again
          </button>
        </div>
      )}
      <div className="pc-box">
        <p className="text-picked_pc">The House Picked</p>
        {counter < 5 && loopComputerChoice()}
        {!props.isSelecting && (
          <CircleBig
            choice={props.computerChoice}
            img={props.computerImg}
            player="computer"
            winner={props.winner}
          />
        )}
      </div>
    </div>
  );
}

export default StageTwo;
