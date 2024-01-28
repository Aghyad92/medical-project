
import Sidebar from '@/app/Elements/Sidebar/Sidebar'
import styles from "./page.module.css"
import RightSection from './RightSection/RightSection'


export default function Cart() {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <div className={styles.right}>
        <div className={styles.box}>
        <RightSection/>
        <button className={styles.btng}>delivered</button>
        </div>
        <div className={styles.box}>
        <RightSection/>
        <button className={styles.btnb}>in progress</button>
        </div>
        <div className={styles.box}>
        <RightSection/>
        <button className={styles.btnr}>Canceled</button>
        </div>
      
        </div>
        </div>

  )
}
