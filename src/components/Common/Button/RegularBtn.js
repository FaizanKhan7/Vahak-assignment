import React from "react";
import styles from "./button.module.scss";

function RegularBtn({ bidBtn, disabled }) {
  return (
    <div className={styles.regularBtn}>
      <button disabled={disabled}>{bidBtn}</button>
    </div>
  );
}

export default RegularBtn;
