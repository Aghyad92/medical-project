import Button from '@/app/Elements/Button/Button'
import ImageHome from '@/app/Elements/ImageHome/page'
import styles from "./page.module.css"

export default function Choese() {
  return (
    <div className={styles.container}>
        <ImageHome/>
      <Button label="Create Account As patient"/>
      <Button label="Create Account  As Provider"/>
    </div>
  )
}
