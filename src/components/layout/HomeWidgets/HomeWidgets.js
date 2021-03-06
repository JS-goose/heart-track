import React from "react";
import styles from "./HomeWidget.module.css";

const HomeWidget = () => {
  return (
    <article id={styles["widget-container"]}>
          <div className={styles['widget-box']}>Box One</div>
          <div className={styles['widget-box']}>Box Two</div>
          <div className={styles['widget-box']}>Box Three</div>
    </article>
  );
};

export default HomeWidget;
