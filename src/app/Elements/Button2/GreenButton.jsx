import styles from "./GreenButton.module.css"

export default function GreenButton({label}) {
  return (
    <div>
        <button className={styles.btn} >{label}</button>
    </div>
  )
}
