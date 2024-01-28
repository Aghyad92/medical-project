import Image from "next/image"
import arrow from "@/Images/Vector.svg"
import styles from "./Tabler.module.css"

export default function Tabler() {
  return (
    <>
      <button className={styles.btn}><Image
      src={arrow}
      width={16.67}
      height={29.17}
      alt="Arrow"
      /></button>
    </>
  )
}
