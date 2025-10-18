import styles from "./RoundSelector.module.scss";

const RoundSelector = ({ selectedRound, onRoundChange }) => {
  const selectorOptions = ["Group stage", "Playoff"];

  const handleRoundSelect = (round) => {
    onRoundChange(round);
  };

  return (
    <div className={styles["round-selector"]}>
      {selectorOptions.map((round) => (
        <div
          key={round}
          onClick={() => handleRoundSelect(round)}
          className={`${styles.selector__item} ${
            selectedRound === round ? styles.active : ""
          }`}
        >
          {round}
        </div>
      ))}
    </div>
  );
};

export default RoundSelector;
