import styles from "./Question.module.css"

export default function Question() {
  return (
    <div className={styles.container}>
      <h2>Frequently Ask Question</h2>
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
