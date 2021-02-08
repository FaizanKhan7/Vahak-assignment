import React from 'react'
import styles from "./button.module.css"

function RegularBtn({bidBtn}) {
    return (
        <div className={styles.regularBtn}>
            <button>{bidBtn}</button>
        </div>
    )
}

export default RegularBtn
