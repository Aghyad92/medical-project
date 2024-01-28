"use client"
import Image from "next/image"
import personal from "@/Images/icon personal.svg"
import styles from "./Sidebar.module.css"

export default function Sidebar() {
  const handlerEdit=()=>{
    window.location.href="/PatientPage/Account"
  }
  const handlerPayment=()=>{
    window.location.href="/PatientPage/Payment"
  }
  const handlerCart=()=>{
    window.location.href="/PatientPage/Cart"
  }
  const handlerLogout=()=>{
    window.location.href="/Login"
  }
  return (
    <div className={styles.sidebar}>
        <Image className={styles.img}
        src={personal}
        width={182}
        height={184}
        alt='personal'
        />
        <button onClick={handlerEdit}>Edit Account</button>
        <button onClick={handlerPayment}>Payment</button>
        <button onClick={handlerCart}>Cart</button>
        <button onClick={handlerLogout}>Logout</button>
    </div>
  )
}
