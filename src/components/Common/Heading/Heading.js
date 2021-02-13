import React from 'react'
import styles from "./heading.module.scss"
function Heading({title}) {
    return (
        <div className={styles.heading}>
          <h2>{title}</h2>  
          <div className={styles.headingBorder}></div>
        </div>
    )
}

export default Heading
