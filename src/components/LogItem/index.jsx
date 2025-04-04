import React from "react";

import styles from "./LogItem.module";

function LogItem() {
  return (
    <>
      <article className={styles.log__item}>
        <div className="container">
          <div className="club__news-container">
            <h2 className="section__news-title">News</h2>
          </div>
        </div>
      </article>
    </>
  );
}

export default LogItem;
