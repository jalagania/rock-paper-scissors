import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";

import lizard from "./images/icon-lizard.svg";
import spock from "./images/icon-spock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";
import { useEffect } from "react";

const marks = [
  { name: "lizard", img: lizard },
  { name: "spock", img: spock },
  { name: "paper", img: paper },
  { name: "scissors", img: scissors },
  { name: "rock", img: rock },
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showStageOne, setShowStageOne] = useState(true);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [isSelecting, setIsSelecting] = useState(false);
  const [score, setScore] = useState(0);
  const [resultText, setResultText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [winner, setWinner] = useState("");

  // ---------- Functions ----------

  // Plays Game Again
  function playAgain() {
    setShowStageOne(true);
    setShowResult(false);
    setWinner("");
  }

  // User Wins Game
  function userWins() {
    setScore((prevState) => prevState + 1);
    setResultText("You Win");
    setShowResult(true);
    setWinner("user");
  }

  // Computer Wins Game
  function computerWins() {
    setScore((prevState) => prevState - 1);
    setResultText("You Lose");
    setShowResult(true);
    setWinner("computer");
  }

  // Selects Computer's Choice
  function handleSelectingChoice() {
    setShowStageOne(false);
    setIsSelecting(true);
    setComputerChoice(marks[Math.floor(Math.random() * 5)].name);
  }

  // ---------- useEffects ----------

  // Display Game Result
  useEffect(() => {
    if (!showStageOne) {
      setTimeout(() => {
        setIsSelecting(false);
      }, 1100);

      setTimeout(() => {
        if (userChoice === "lizard") {
          if (computerChoice === "lizard") {
            playAgain();
          } else if (computerChoice === "spock" || computerChoice === "paper") {
            userWins();
          } else {
            computerWins();
          }
        }

        if (userChoice === "spock") {
          if (computerChoice === "spock") {
            playAgain();
          } else if (
            computerChoice === "rock" ||
            computerChoice === "scissors"
          ) {
            userWins();
          } else {
            computerWins();
          }
        }

        if (userChoice === "paper") {
          if (computerChoice === "paper") {
            playAgain();
          } else if (computerChoice === "spock" || computerChoice === "rock") {
            userWins();
          } else {
            computerWins();
          }
        }

        if (userChoice === "scissors") {
          if (computerChoice === "scissors") {
            playAgain();
          } else if (
            computerChoice === "lizard" ||
            computerChoice === "paper"
          ) {
            userWins();
          } else {
            computerWins();
          }
        }

        if (userChoice === "rock") {
          if (computerChoice === "rock") {
            playAgain();
          } else if (
            computerChoice === "lizard" ||
            computerChoice === "scissors"
          ) {
            userWins();
          } else {
            computerWins();
          }
        }
      }, 1600);
    }
  }, [showStageOne]);

  return (
    <div className="container">
      {showModal && <Modal setShowModal={setShowModal} />}
      <Header score={score} />
      <main className="game-box">
        {showStageOne && (
          <StageOne
            marks={marks}
            setUserChoice={setUserChoice}
            handleSelectingChoice={handleSelectingChoice}
          />
        )}
        {!showStageOne && (
          <StageTwo
            marks={marks}
            userChoice={userChoice}
            userImg={marks.filter((mark) => mark.name === userChoice)[0].img}
            computerChoice={computerChoice}
            computerImg={
              marks.filter((mark) => mark.name === computerChoice)[0].img
            }
            isSelecting={isSelecting}
            resultText={resultText}
            winner={winner}
            showResult={showResult}
            playAgain={playAgain}
          />
        )}
      </main>
      <Footer setShowModal={setShowModal} />
    </div>
  );
}

export default App;
