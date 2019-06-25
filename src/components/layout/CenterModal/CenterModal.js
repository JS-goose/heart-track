import React from "react";
import styles from "./CenterModal.module.css";

const CenterModal = () => {
  return (
    <article id={styles["home-landing-container"]}>
      <div className={styles["centerModal"]}>
        <h2>Heart Track</h2>
        <p>Placeholder text Placeholder text</p>
        <div>
          Demo <i className="fas fa-arrow-alt-circle-right" />
        </div>
      </div>
    </article>
  );
};

export default CenterModal;
