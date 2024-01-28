import Image from "next/image"
import pro from "@/Images/Rectangle 698.png"
import styles from "./page.module.css"


export default function ProudactDetails() {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.img}>
            <Image
            className={styles.bimg}
            src={pro}
            width={267}
            height={500}
            alt="pro"
            />
             <Image
             className={styles.bimg}
            src={pro}
            width={267}
            height={500}
            alt="pro"
            />
        </div>
        <div className={styles.des}>
           <h3>Product Details</h3>
           <div className={styles.content}>
          <div className={styles.text}>
          <p>Service Name</p>
          <p>Service Provider</p>
          <p>Service Type</p>
          <p>Cost :</p>
        </div>
        <div className={styles.text}>
          <p>Service Name</p>
          <p>Service Provider</p>
          <p>Service Type</p>
          <p>200$</p>
        </div>
        </div>
        <button className={styles.btn}>Buy</button>
      </div>
    </div>
    </>
  )
}
