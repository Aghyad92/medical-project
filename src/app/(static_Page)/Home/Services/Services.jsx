import Tabler from "@/app/Elements/Tabler/Tabler"
import styles from "./Services.module.css"
import Product from './[product]/product'
import Image from 'next/image'
import logoSearch from"@/Images/majesticons_search.svg"
import logoSearch2 from"@/Images/solar_filter-bold-duotone.svg"


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
       <div className={styles.conatiner}>
       <input type='search' placeholder='Search' id='search2' />
       <Image className={styles.search}
            src={logoSearch}
            width={20}
            height={20}
            alt='Search'
            />
            <Image className={styles.log}
            src={logoSearch2}
            width={19}
            height={20}
            alt='Search'
            />
    </div>
    </din>
    </div>
  )
}
