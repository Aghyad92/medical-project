"use client"
import React from 'react'
import OTPInput from 'react-otp-input'
import styles from "./page.module.css"
import { useState } from 'react'
import ImageHome from '@/app/Elements/ImageHome/page'

export default function Code() {
  const [otp, setOtp] = useState('');
  return (
    <div className={styles.container}>
    <h2>Enter code</h2>
    <div className={styles.content}>
      <ImageHome/>
      <form className={styles.right}>
    <div className={styles.box}>
      <label htmlFor='Code'>Code :</label>
      <OTPInput
      value={otp}
      onChange={setOtp}
      numInputs={5}
      containerStyle={styles.otp}
      inputStyle={styles.Code}
      renderSeparator={<span> </span>}
      renderInput={(props) => <input {...props} />}
      ></OTPInput>
        </div>
        <button type='button' className={styles.btn}>Confirm code</button>
      </form>
    </div>
    </div>
  )
}
