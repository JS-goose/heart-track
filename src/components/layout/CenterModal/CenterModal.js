import React from "react";
import styles from "./CenterModal.module.css";

const CenterModal = () => {
  return (
    <article id={styles["home-landing-container"]}>
      <div className={styles["centerModal"]}>
        <h1>Vital statistics data, charted out for you</h1>
        <p>
          Enter your vitals, chart them, then export to a spreadsheet <br />
          or share them with your healthcare provider
        </p>
        <div id={styles["modal-button-container"]}>
          <button>
            Demo <i className="fas fa-arrow-alt-circle-right" />
          </button>
          <button>Get Started</button>
        </div>
      </div>
    </article>
  );
};

export default CenterModal;
