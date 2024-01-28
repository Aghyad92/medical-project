"use client"
import Image from 'next/image'
import pencel from "@/Images/ic_baseline-edit (1).svg"
import rubsh from "@/Images/delete.svg"
import styles from "./page.module.css"
import SidebarM from '../../Sidebar/SidebarM'
import Add from '../../Add/Add'
import { services } from './data'
import ServiceManagment from '../page'

export default function EditServicesM() {
  const EditHandler=()=>{
    window.location.href="/ProviderAccount/ServiceManagmrnt/EditPensel"
  }
  return (
    <div className={styles.container}>
      <ServiceManagment/>
      <div className={styles.page}>
      {services.map((box)=>(
       <div className={styles.box} key={box.id}>
      <div className={styles.head}>
         <Image className={styles.pencel}
         src={pencel}
         width={30}
         height={30}
         alt="pencel"
         id='pencel'
         onClick={EditHandler}
         />
         <Image className={styles.rubsh}
         src={rubsh}
         width={30}
         height={30}
         alt="delete"
         />
       </div>
       <div className={styles.content}>
         <div className={styles.left}>
         <p className={styles.p1}>Section</p>
         <p className={styles.p2}>Nurse</p>
           <p className={styles.p1}>Name</p>
           <p className={styles.p2}>Services</p>
           <p className={styles.p1}>Price</p>
           <p className={styles.p2}>100$</p>
         </div>
         <div className={styles.right}>
        <div className={styles.img}>
         </div>
           <p className={styles.p1}>Discount</p>
           <p className={styles.p2}>After 80$</p>
           <p className={styles.p2}>Before 120$</p>
         </div>
     </div>
     </div>
      ))}
      </div>
      </div>
  )
}
