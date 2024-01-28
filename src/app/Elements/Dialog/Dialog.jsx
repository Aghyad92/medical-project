import styles from "./Dialog.module.css"

export default function Dialog({message,onDialog}) {
  return (
    <div className={styles.container}>
      <h2>{message}</h2>
      <div className={styles.content}>
      <button onClick={()=>onDialog(true)} className={styles.btn}>Yes</button>
      <button onClick={()=>onDialog(false)} className={styles.btn}>No</button>
      </div>
    </div>
  )
}
