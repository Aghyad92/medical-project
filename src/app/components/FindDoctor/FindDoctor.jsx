import Image from "next/image"
import { photo } from "@/app/(static_Page)/Home/SectionTwo/data"
import styles from "./FindDoctor.module.css"

export default function FindDoctor() {
  return (
    <div className={styles.container}>
      {photo.map((img)=>(
          <div className={styles.box} key={img.id}>
        <Image
        className={styles.Do}
        src={img.src}
        width={305}
        height={340}
        alt={img.name}/>
        <div className={styles.op}>
        <p>{img.name}</p>
        <span>{img.job}</span>
        </div>
        </div>
      ))}
    </div>
  )
}
