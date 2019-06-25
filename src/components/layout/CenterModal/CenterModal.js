import React from "react";
import styles from "./CenterModal.module.css";

const CenterModal = () => {
  return (
    <article id={styles["home-landing-container"]}>
      <div className={styles["centerModal"]}>
        <h2>Vital statistics data, charted out for you</h2>
        <p>
          Enter your vitals, chart them, then export to a spreadsheet <br/>or share them with your
          healthcare provider
        </p>
        <button>
          Demo <i className="fas fa-arrow-alt-circle-right" />
        </button>
        <button>Get Started</button>
      </div>
    </article>
  );
};

export default CenterModal;
