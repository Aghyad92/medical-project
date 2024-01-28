import Image from 'next/image'
import a1 from "@/Images/Mask group.png"
import styles from "./RightSection.module.css"

export default function RightSection() {
  return (
    <div className={styles.container}>
        <div className={styles.detail}>
    <h3>Service Details</h3>
      <div className={styles.content}>
    <div className={styles.text}>
      <p>Doctor Name</p>
      <p>Doctor Locatuion</p>
      <p>17/5    20:30</p>
      <p>Cost <span>200$</span></p>
      </div>
    </div>
    </div>
    <Image
    src={a1}
    width={305}
    height={340}
    alt="Doctor"
    />

    </div>
  )
}
