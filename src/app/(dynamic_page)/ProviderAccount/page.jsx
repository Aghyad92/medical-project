import Add from "./Add/Add"
import styles from "./page.module.css"
import SidebarM from './Sidebar/SidebarM'


export default function ProductManagment() {
  return (
    <div className={styles.container} >
      <SidebarM/>
        <div className={styles.right}>
        <Add/>
      </div>
    </div>
  )
}
