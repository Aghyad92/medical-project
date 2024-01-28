import Button from '@/app/Elements/Button/Button'
import ImageHome from '@/app/Elements/ImageHome/page'
import styles from "./page.module.css"

export default function ServicesLogin() {
  return (
    <div className={styles.container}>
        <ImageHome/>
      <Button label="Patient"/>
      <Button label="Provider"/>
    </div>
  )
}
