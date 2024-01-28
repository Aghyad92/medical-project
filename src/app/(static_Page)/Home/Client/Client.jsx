import Image from "next/image"
import line from "@/Images/Group.svg"
import styles from "./Client.module.css"
import Boxes from "./[Boxes]/Boxes"

export default function Client() {
  return (
    <div className={styles.container}>
       <div className={styles.head}>
        <h2>Our Happy Clients</h2>
        <Image
        className={styles.line}
        src={line}
        width={216}
        height={6.78}
        alt="line"
        />
      </div>
      <p className={styles.br}>We use only the best quality materials on the market in order to<br/>provide the best products to our patients.</p>
      <Boxes/>
    </div>
  )
}
