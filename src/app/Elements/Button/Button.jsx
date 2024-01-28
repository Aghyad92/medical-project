"use client"
import styles from"./Button.module.css"
export default function Button({label}) {
  const paoitantHandler=()=>{
    if(label==="Login"){
      window.location.href="/Login/Chose"
    }else if(label==="Create Account"){
    window.location.href="/Login/ServicesLogin"
   }else if(label==="Patient"||label==="Provider"){
    window.location.href="/Login/LoginPass"
   }else if(label==="Create Account As patient"){
    window.location.href="/Login/CreateAccount"
   }else if(label==="Create Account  As Provider"){
    window.location.href="/Login/AccountProvider"
   }

  }
  return (
    <div>
      <button className={styles.button} onClick={paoitantHandler}>{label}</button>
    </div>
  )
}
