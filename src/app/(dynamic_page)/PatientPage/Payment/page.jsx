import Product from '@/app/(static_Page)/Home/Services/[product]/product'
import Sidebar from '@/app/Elements/Sidebar/Sidebar'
import styles from "./page.module.css"

export default function Payment() {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <div className={styles.right}>
        <div className={styles.box} >
            <Product/>
            <p>Payed</p>
        </div>
        <div className={styles.box} >
            <Product/>
            <p>Payed</p>
        </div>
      </div>
    </div>
  )
}
