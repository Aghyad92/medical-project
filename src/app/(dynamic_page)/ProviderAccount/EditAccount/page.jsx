import Image from 'next/image'
import SidebarM from '../Sidebar/SidebarM'
import FormProvider from '@/app/components/FormProvider/FormProvider'
import styles from "./page.module.css"
import person from "@/Images/personal.svg"

export default function EditAccount() {
  const[UserName,setUsername]=useState("")
  const[Email,setEmail]=useState("")
  const[Password,setPassword]=useState("")
  const[ConfirmPassword,setConfirmPassword]=useState("")
  const[BankName,setBankName]=useState("")
  const[Ibancode,setIbancode]=useState("")
    return (
        <div className={styles.container}> 
          <SidebarM/>
          <div className={styles.content}>
            <div className={styles.img}>
            <Image
            src={person}
            width={182}
            heighy={153}
            alt="person"
            />
            <span>Edit Photo </span>
            </div>
            <FormProvider
             UserName={UserName}
             setUsername={setUsername}
             Email={Email}
             setEmail={setEmail}
             Password={Password}
             setPassword={setPassword}
             ConfirmPassword={ConfirmPassword}
             setConfirmPassword={setConfirmPassword}
             BankName={BankName}
             setBankName={setBankName}
             Ibancode={Ibancode}
             setIbancode={setIbancode}
            text="Edit account"
            />
          </div>
        </div>
      )
}
