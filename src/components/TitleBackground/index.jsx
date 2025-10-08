import React from "react";
import styles from "./TitleBackground.module.scss";

const TitleBackround = ({ title }) => {
  return (
    <div className={styles["title-background"]}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default TitleBackround;
