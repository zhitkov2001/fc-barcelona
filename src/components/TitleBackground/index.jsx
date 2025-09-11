import React from "react";
import styles from "./titleBackground.module.scss";

const TitleBackround = ({ title }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default TitleBackround;
