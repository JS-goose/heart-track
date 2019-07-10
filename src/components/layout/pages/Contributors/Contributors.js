import React from "react";
import styles from "../styles/Contributors.module.css";

const Contributors = () => {
  return (
    <article className={styles["contributors-container"]}>
      <h1>Project Contributors</h1>
      <p>
        Here you will find a list of everyone that has helped in some form or fashion with the
        building of this project:
      </p>
      <ul id={styles["contributors-list"]}>
        <li>
          Josep Lopez /{" "}
          <a href="https://twitter.com/JosepLpez92" target="_blank" rel="noopener noreferrer">
            @JosepLpez92
          </a>
        </li>
        <li>
          Dominic Xavier at The Art of Awe /{" "}
          <a href="https://twitter.com/TheArtOfAwe" target="_blank" rel="noopener noreferrer">
            @TheArtOfAwe
          </a>{" "}
          /{" "}
          <a href="https://theartofawe.co.uk" target="_blank" rel="noopener noreferrer">
            theheartofawe
          </a>
        </li>
        <li>
          Joe Moses /{" "}
          <a href="https://twitter.com/JoeMoses33" target="_blank" rel="noopener noreferrer">
            @JoeMoses33
          </a> / <a href="https://joemoses.dev" target="_blank" rel="noopener noreferrer">joemoses.dev</a>
        </li>
        <li>
          Jonathan Sexton /{" "}
          <a href="https://twitter.com/jj_goose" target="_blank" rel="noopener noreferrer">
            @jj_goose
          </a> / <a href="https://jonathansexton.me" target="_blank" rel="noopener noreferrer">jonathansexton.me</a>
        </li>
      </ul>
    </article>
  );
};

export default Contributors;
