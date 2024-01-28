"use client"
import Link from "next/link"
import Search from "@/app/Elements/Search/Search"
import { linksP } from "./data"
import Image from "next/image"
import styles from "./NavPatient.module.css"
import imageLogo from "@/Images/images 7.svg"
import personal from "@/Images/personal.svg"



export default function NavPatient() {
  const handlerAccount=()=>{
    window.location.href="/PatientPage/Account"
  }
  return (
    
      <div className={styles.container}>
        <div className={styles.logo}>
        <Image className={styles.Image}
       src={imageLogo}
       width={82}
       height={55}
       alt="logo"
       />   
       <p className={styles.text}>Care</p>
        </div>
      <div className={styles.Link}>
         {linksP.map(link=>
            <Link key={link.id} href={link.url} className={styles.Link}>{link.title}</Link>
            )}
            <Search/>
            </div>
    <Image className={styles.per}
    src={personal}
    width={60}
    height={56}
    alt="personal"
    onClick={handlerAccount}
    />
    </div>
  )
}
