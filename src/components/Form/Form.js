import React from 'react'
import GhostButton from '../Common/Button/GhostButton'
import RegularBtn from '../Common/Button/RegularBtn'
import Heading from '../Common/Heading/Heading'
import Input from '../Common/Input/Input'
import styles from "./form.module.css"
function Form() {
    return (
        <>
            <div className={styles.formStyles}>
                <Heading title={"Place your Load Bid"}/>
                <div className={styles.bid}>
                    <label>₹</label>
                    <p contenteditable="true">0</p>
                </div>
                <div className={styles.formBtns}>
                    <GhostButton btnName={"Fixed Price"}/>
                    <GhostButton btnName={"Rate Negiotable"}/>
                </div>
            <Input lableName={"Enter your mobile number*"}/>
            <Input lableName={"Enter your name*"}/>
            <Input lableName={"Enter Remarks (optional)*"}/>
            </div>
           <RegularBtn bidBtn={"Bid Now"}/>
           </>
    )
}

export default Form
