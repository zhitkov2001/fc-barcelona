import React from "react";
import styles from "./titleBackground.module.scss";

const TitleBackground = ({ title }) => {
  return (
    <div className={styles["title-background"]}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default TitleBackground;
