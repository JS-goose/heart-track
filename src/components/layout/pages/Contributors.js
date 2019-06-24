import React from "react";
import styles from './styles/Contributors.module.css';

const Contributors = () => {
  return (
    <div>
      <h1>Project Contributors</h1>
      <p>
        Here you will find a list of everyone that has helped in some form or fashion with the
        building of this project:
      </p>
      <ul id={styles['contributors-list']}>
        <li>Josep Lopez - @JosepLpez92</li>
        <li>
          Dominic Xavier at The Art of Awe / @TheArtOfAwe /{" "}
          <a href="https://theartofawe.co.uk" target="blank">
            theheartofawe
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contributors;
