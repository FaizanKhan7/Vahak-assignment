import React, { useState } from "react";
import GhostButton from "../Common/Button/GhostButton";
import RegularBtn from "../Common/Button/RegularBtn";
import Heading from "../Common/Heading/Heading";
import Input from "../Common/Input/Input";
import styles from "./form.module.scss";

function Form() {
  const [mobileNo, setMobileNo] = useState("");
  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");

  function BitNowBtn() {
    if ((mobileNo, name, remarks)) {
      return <RegularBtn bidBtn={"Bid Now"} disabled={false} />;
    } else {
      return <RegularBtn bidBtn={"Bid Now"} disabled={true} />;
    }
  }
  return (
    <>
      <div className={styles.formStyles}>
        <Heading title={"Place your Load Bid"} />
        <div className={styles.bid}>
          <label>₹</label>
          <p contenteditable="true">0</p>
        </div>
        <div className={styles.formBtns}>
          <GhostButton btnName={"Fixed Price"} />
          <GhostButton btnName={"Rate Negiotable"} />
        </div>
        <Input
          name="mobileNo"
          type="text"
          lableName={"Enter your mobile number*"}
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
        <Input
          name="name"
          type="text"
          lableName={"Enter your name*"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="remarks"
          type="text"
          lableName={"Enter Remarks (optional)*"}
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />
      </div>
      <BitNowBtn />
    </>
  );
}

export default Form;
