import React from "react";
import styles from "./input.module.scss";
function Input({ type, name, lableName, value, onChange }) {
  return (
    <div>
      <div className={styles.inputStyles}>
        <input
          type={type}
          name={name}
          placeholder=" "
          className={styles.formInput}
          onChange={onChange}
          value={value}
        />
        <label className={styles.formLabel}>{lableName}</label>
      </div>
    </div>
  );
}

export default Input;
