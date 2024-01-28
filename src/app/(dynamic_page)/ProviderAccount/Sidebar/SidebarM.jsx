"use client"
import Image from "next/image"
import personal from "@/Images/icon personal.svg"
import styles from "./SidebarM.module.css"

export default function SidebarM() {
  const handlerAccount=()=>{
    window.location.href="/ProviderAccount/Account"
  }
  const handlerEdit=()=>{
    window.location.href="/ProviderAccount/EditAccount"
  }
  const handlerService=()=>{
    window.location.href="/ProviderAccount/ServiceManagmrnt/EditServicesM"
  }
  const handlerProduct=()=>{
    window.location.href="/ProviderAccount/EditServices"
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
        <button onClick={handlerAccount}>Account</button>
        <button onClick={handlerEdit}>Edit Account</button>
        <button onClick={handlerService}>Service Managmrnt</button>
        <button onClick={handlerProduct}>Product Managment</button>
        <button onClick={handlerLogout}>Logout</button>
    </div>
  )
}
