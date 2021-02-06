import React from 'react'
import styles from "./input.module.css"
function Input({lableName}) {
    return (
        <div>
             <div className={styles.inputStyles}>
                <input type="text" placeholder=" " className={styles.formInput}/>
                <label className={styles.formLabel}>{lableName}</label>
            </div>
        </div>
    )
}

export default Input
