import React from "react";
import placeholder from '../../../assets/imgs/chart-placeholder.jpg';
import styles from './styles/Charts.module.css';

const Charts = () => {
  return (
    <div>
      <h1>Charts</h1>
      <img
        src={placeholder}
        alt="a chart graph showing red and green values"
      />
    </div>
  );
};

export default Charts;
