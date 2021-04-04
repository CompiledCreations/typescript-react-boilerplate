import React from "react";

import styles from "./App.module.scss";
import logo from "./logo.svg";

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Boilerplate</h1>
      <img className={styles.image} src={logo}></img>
    </div>
  );
};
