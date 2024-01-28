import Tabler from "@/app/Elements/Tabler/Tabler"
import styles from "./Services.module.css"
import Product from './[product]/product'
import Search from "@/app/Elements/Search/Search"

export default function Services() {
  return (
    <div className={styles.container} id="services">
      <h2>Services</h2>
      <p className={styles.p}>We use only the best quality materials on the market in<br/>order to provide the best products to our patients.</p>
    <div className={styles.content}>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
    <div className={styles.tab}> <Tabler/>
    <div className={styles.tabler}> <Tabler/></div>
    </div>
    <din className={styles.find}>
      <h4>Find service</h4>
      <Search/>
    </din>
   

    </div>
  )
}
