import React from "react";
import styles from "./button.module.scss";

function GhostButton({ btnName }) {
  return (
    <div className={styles.ghostButton}>
      <button>{btnName}</button>
    </div>
  );
}

export default GhostButton;
