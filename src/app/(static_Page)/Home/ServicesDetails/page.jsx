
import d1 from "@/Images/Mask group.png"
import Image from 'next/image'
import styles from "./page.module.css"


export default function ServicesDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
          <div className={styles.left}>
          <h3>Service Details</h3>
          <div className={styles.content}>
          <div className={styles.text}>
          <p>Doctor Name</p>
          <p>Doctor Locatuion</p>
          <p>Date</p>
          <p>Cost :</p>
        </div>
        <div className={styles.text}>
          <p>Doctor Name</p>
          <p>Doctor Locatuion</p>
          <p>17/5    20:30</p>
          <p>200$</p>
        </div>
        </div>
        <button className={styles.btn}>Buy</button>
          </div>
          <div className={styles.right}>
      <Image
      src={d1}
      width={305}
      height={340}
      alt="Doctor"
      />
      </div>
      </div>
      </div>
  )
}
