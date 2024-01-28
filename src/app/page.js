
import styles from "./components/Navbar/Navbar.module.css"
import ImageHome from './Elements/ImageHome/page'
import SectionOne from './(static_Page)/Home/sectionOne/SectionOne'
import SectionTwo from './(static_Page)/Home/SectionTwo/page'
import Services from './(static_Page)/Home/Services/Services'
import Client from './(static_Page)/Home/Client/Client'
import Question from './(static_Page)/Home/Question/Question'

export default function Auth() {
  return (
    <main className={styles.Auth}>
      <SectionOne/>
      <SectionTwo/>
      <Services/>
      <Client/>
      <Question/>
    </main>
  )
}
