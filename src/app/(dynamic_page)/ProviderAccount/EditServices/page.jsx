"use client"
import Image from 'next/image'
import pencel from "@/Images/ic_baseline-edit (1).svg"
import rubsh from "@/Images/delete.svg"
import product from "@/Images/Rectangle 652 (1).png"
import styles from "./page.module.css"
import Add from '../Add/Add'
import SidebarM from '../Sidebar/SidebarM'
import { boxes } from './data'

export default function EditServices() {
  const hanlerEdit=()=>{
    const Edit=document.querySelector("#pencel")
    window.location.href="/ProviderAccount/EditProduct"
  }
  return (
    <div className={styles.container}>
        <SidebarM/>
      <div className={styles.edit}>
      <Add/>
      <div className={styles.page}>
     {boxes.map((box)=>(
       <div className={styles.box} key={box.id}>
       <div className={styles.head}>
         <Image className={styles.pencel}
         src={pencel}
         width={30}
         height={30}
         alt="pencel"
         id='pencel'
         onClick={hanlerEdit}
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
           <p className={styles.p1}>Name</p>
           <p className={styles.p2}>product</p>
           <p className={styles.p1}>Price</p>
           <p className={styles.p2}>100$</p>
         </div>
         <div className={styles.right}>
        <div className={styles.img}>
         <Image 
         src={product}
         width={103}
         height={85}
         alt="product"
         />
         <Image 
         src={product}
         width={103}
         height={85}
         alt="product"
         />
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
      </div>
  )
}
