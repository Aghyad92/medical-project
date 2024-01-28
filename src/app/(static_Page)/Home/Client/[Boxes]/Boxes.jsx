import Image from "next/image"
import styles from "./Boxes.module.css"
import one from "@/Images/Ellipse 3.png"
import two from "@/Images/Ellipse 3 (1).png"
import three from "@/Images/Ellipse 3 (2).png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"

export default function Boxes() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.content}>
        <Image
        className={styles.img}
        src={one}
        width={70}
        height={70}
        alt="one"
        />
          <div className={styles.rate}>
        <h3>Thomas daniel</h3>
        <div className={styles.star}>
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        </div>
        <p>Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.</p>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
        <Image
        className={styles.img}
        src={two}
        width={70}
        height={70}
        alt="two"
        />
         <div className={styles.rate}>
         <h3>Alena Alex</h3>
        <div className={styles.star}>
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
          </div>
          </div>
        </div>
        <p>Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.</p>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
        <Image
        className={styles.img}
        src={three}
        width={70}
        height={70}
        alt="three"
        />
        <div className={styles.rate}>
        <h3>Thomas Edison</h3>
        <div className={styles.star}>
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
           <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        </div>
        <p>Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.</p>
      </div>
    </div>
  )
}
