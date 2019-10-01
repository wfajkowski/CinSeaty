import React from "react";
import styles from "./AvailableDates.module.scss";

const AvailableDates = () => {
  return (
    <div className={styles.wrapper}>
      <button className='ui inverted button'>Dzisiaj</button>
      <button className='ui inverted button'>Jutro</button>
    </div>
  );
};

export default AvailableDates;
