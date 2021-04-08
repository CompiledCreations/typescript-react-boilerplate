import React from "react";

import styles from "./App.module.scss";

import logo from "./logo.svg";

export interface AppProps {
  title: string;
}

export const App: React.FC<AppProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <img className={styles.image} src={logo}></img>
    </div>
  );
};
