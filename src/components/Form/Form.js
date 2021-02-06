import React from 'react'
import Heading from '../Common/Heading/Heading'
import Input from '../Common/Input/Input'
import styles from "./form.module.css"
function Form() {
    return (
        <div className={styles.formStyles}>
           <Heading title={"Place your Load Bid"}/>
           <div className={styles.bid}>
            <label>₹</label>
            <p contenteditable="true">0</p>
           </div>
           <Input lableName={"Enter your mobile number*"}/>
           <Input lableName={"Enter your name*"}/>
           <Input lableName={"Enter Remarks (optional)*"}/>
        </div>
    )
}

export default Form
