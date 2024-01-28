import styles from "./FormProduct.module.css"

export default function FormProduct({label,Name,setName,Price,setPrice,Before,setBefore,After,setAfter,text,onSubmit}) {
  return (
      <form className={styles.box} onSubmit={onSubmit} >
        <div className={styles.Name}>
        <label htmlFor='Name'>Name</label>
        <input type='text' id='Name' value={Name} onChange={e=>setName(e.target.value)}/>
        </div>
        <div className={styles.Price}>
        <label htmlFor='Price'>Price</label>
        <input type='text' id='Price' value={Price} onChange={e=>setPrice(e.target.value)}/>
        </div>
        <div className={styles.Discount}>
        <label htmlFor='Discount'>Discount</label>
        <div className={styles.dir}>
        <input type='number' id='Before' value={Before} placeholder="Before" onChange={e=>setBefore(e.target.value)}/>
        <input type='number' id='After' value={After} placeholder="After" onChange={e=>setAfter(e.target.value)}/>
        </div>
        </div>
        <label htmlFor='AddPhotos'>Add Photos</label>
        <div className={styles.AddPhotos}>
          <div className={styles.custom}>
            <span>Upload  Photo</span>
          <input type="file" id='Photos' />
          </div>
          <div className={styles.custom}>
          <span>Upload  Photo</span>
            <input type="file" id='Photos' />
            </div>
        </div>
        <button type='submit' className={styles.btn}>{text}</button>
      </form>
  )
}
