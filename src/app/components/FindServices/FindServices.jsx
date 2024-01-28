import Product from '@/app/(static_Page)/Home/Services/[product]/product'
import styles from "./FindServices.module.css"

export default function FindServices() {
  return (
      <div className={styles.content}>
      <Product/>
      <Product/>
      <Product/>
    </div>
  )
}
