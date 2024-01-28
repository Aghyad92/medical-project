"use client"
import Image from "next/image"
import styles from "./product.module.css"
import pro from "@/Images/Rectangle 652.svg"

export default function Product() {
  const handlerProduct=()=>{
    window.location.href="/Home/ProudactDetails"
  }
  return (
       <div className={styles.box}>
    <Image 
    className={styles.img}
      src={pro}
      width={40}
      height={40}
      alt="prodact"
    />
    <button className={styles.btn} onClick={handlerProduct}>Review</button>
    <div className={styles.info}>
      <div className={styles.head}>
      <h4>medicen</h4>
       <span>TYpe</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>100$</p>
    </div>
    </div>
  )
  }
