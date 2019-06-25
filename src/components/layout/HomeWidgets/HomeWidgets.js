import React from "react";
import styles from "./HomeWidget.module.css";

const HomeWidget = () => {
  return (
    <article>
      <div id={styles["widget-container"]}>Container
          <div className={styles['widget-box']}>Box One</div>
          <div className={styles['widget-box']}>Box Two</div>
          <div className={styles['widget-box']}>Box Three</div>
      </div>
    </article>
  );
};

export default HomeWidget;
