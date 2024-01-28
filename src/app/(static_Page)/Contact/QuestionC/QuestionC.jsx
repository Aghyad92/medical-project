import styles from "./QuestionC.module.css"
import Image from "next/image"
import line from "@/Images/Group.svg"

export default function QuestionC() {
  return (
    <div className={styles.container}>
    <h2>Frequently Ask Question</h2>
    <Image 
      className={styles.line}
      src={line}
      width={426}
      height={53}
      alt='line'
      />
    <p>We use only the best quality materials on the market in order to<br/> provide the best products to our patients.</p>
      <div className={styles.box}>
          <ul>
              <li>Can I see who reads my email campaigns?</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.</p>
      </div>
      <ul>
          <li>Do you offer non-profit discounts?</li>
          <li>Can I see who reads my email campaigns?</li>
          <li>Can I see who reads my email campaigns?</li>
      </ul>
  </div>
)
}
