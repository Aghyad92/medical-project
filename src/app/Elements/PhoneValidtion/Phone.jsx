"use client"
import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from "react-phone-number-input"
import styles from "./Phone.module.css"


export default function Phone() {
    const [PhoneNumber,setPhoneNumber]=useState("");
    const [valid,setValid]=useState(true);

    const handleChange =(value)=>{
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    }

    const validatePhoneNumber=(PhoneNumber)=>{
        const PhoneNumberPattern=/^\d{10}$/;
        return PhoneNumberPattern.test(PhoneNumber);
    }

  return (
    <div className={styles.Phone}>
        <label htmlFor='Phone Number'>Phone number</label>
        <div  className={styles.Phonen}>
        <PhoneInput
        country={"us"}
        value={PhoneNumber}
        onChange={handleChange}
        inputProps={{
          required :true,
        }}
        />
        </div>
        
        {!valid && <p>please enter a valid phone number</p>}
    </div>
  )
}
