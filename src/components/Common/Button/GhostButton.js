import React from 'react'
import styles from "./button.module.css"

function GhostButton({btnName}) {
    return (
        <div className={styles.ghostButton}>
            <button>{btnName}</button>
        </div>
    )
}

export default GhostButton
