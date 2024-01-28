import styles from "./FormServices.module.css"

export default function FormServices({label,Name,setName,Price,setPrice,Before,setBefore,After,setAfter,Dentist,Nurse,PlasticSurgery,MedicalxRay,Nutiritions,Ophthalmologist,dis,onSubmit}) {
  return (
    <form className={styles.box} onSubmit={onSubmit}>
        <label htmlFor="Section">Section</label>
      <div className={styles.left}>
        <div className={styles.Dentist}>
        <input type="checkbox" id='Dentist' value={Dentist} />    
        <label htmlFor='Dentist'>Dentist</label>
        </div>
        <div className={styles.Nurse}>
        <input type="checkbox" id='Nurse' value={Nurse} />    
        <label htmlFor='Nurse'>Nurse</label>
        </div>
        <div className={styles.PlasticSurgery}>
        <input type="checkbox" id='PlasticSurgery' value={PlasticSurgery} />    
        <label htmlFor='Plastic Surgery'>Plastic Surgery</label>
        </div>
        <div className={styles.Medical}>
        <input type="checkbox" id='Medical' value={MedicalxRay} />    
        <label htmlFor='Medical x Ray'>Medical x Ray</label>
        </div>
        <div className={styles.Nutiritions}>
        <input type="checkbox" id='Nutiritions' value={Nutiritions} />    
        <label htmlFor='Nutiritions'>Nutiritions</label>
        </div>
        <div className={styles.Ophthalmologist}>
        <input type="checkbox" id='Ophthalmologist' value={Ophthalmologist} />    
        <label htmlFor='Ophthalmologist'>Ophthalmologist</label>
        </div>
        </div>
        <div className={styles.right}>
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
        <button className={styles.btn}>{dis}</button>
        </div>
    </form>
  )
}
