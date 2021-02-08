import React from 'react'
import styles from "./input.module.css"
function Input({lableName, onchange}) {
    return (
        <div>
             <div className={styles.inputStyles}>
                <input type="text" placeholder=" " className={styles.formInput} onchange={onchange}/>
                <label className={styles.formLabel}>{lableName}</label>
            </div>
        </div>
    )
}

export default Input
