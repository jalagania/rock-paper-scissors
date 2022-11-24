import "./StageOne.css";

function StageOne(props) {
  return (
    <div className="game-step-1">
      {props.marks.map((mark, index) => {
        return (
          <div
            className={`game-element-bg ${mark.name}-bg`}
            key={index}
            onClick={() => {
              props.setUserChoice(mark.name);
              props.handleSelectingChoice();
            }}
          >
            <div className={`game-element ${mark.name}`}>
              <img
                src={mark.img}
                className="element-img"
                alt={`${mark.name} icon`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StageOne;
