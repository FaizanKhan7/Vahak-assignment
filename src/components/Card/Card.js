import React, { useState } from 'react'
import styles from "./card.module.scss"
import Cube from "../../assets/Cube.svg"
import Transport from "../../assets/Transport.svg"
import Payment from "../../assets/payment.svg"
import Profile from "../../assets/Profile.png"
import More from "../../assets/More.svg"

function Card() {
    const [moreLess, setMoreLess] = useState(false);
    return (
        <div className={styles.card}>
            <div className={styles.cardHeading}>
                <h3>Honda City</h3>
                <p>Posted at 1 Nov, 9.30 AM</p>
            </div>
            <div>
                <div className={styles.specifications}>
                    <div className={styles.specification}>
                        <img src={Cube} alt="Cube"/>
                        <h3>Specification 01</h3>
                    </div>
                    <div className={styles.specification2}>
                        <img src={Transport} alt="Transport"/>
                        <h3>Specification 02</h3>
                    </div>
                    <div className={styles.specification3}>
                        <img src={Payment} alt="Card"/>
                        <h3>Specification 03</h3>
                    </div>
                </div>
                    {moreLess ? (
                        <p className={styles.moreContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    ) : ('')}
                <div className={styles.moreDetails}>
                    <button onClick={() => setMoreLess(!moreLess)}>{moreLess ? "Hide Details" : "More Details"}</button>
                    <img src={More} style={moreLess ? {transform: 'rotate(180deg)', transition: 'transform 0.5s ease-in-out'} : {transform: 'rotate(0deg)', transition: 'transform 0.35s ease-in-out'}} alt="favicon-bottom"/>
                </div>
                <div className={styles.profile}>
                    <img src={Profile} alt="Profile-photo"/>
                    <div className={styles.nameLocation}>
                    <h3>Rohan Sharma</h3>
                    <p>Bengaluru, Karnataka</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
