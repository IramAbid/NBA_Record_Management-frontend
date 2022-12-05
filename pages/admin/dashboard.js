import styles from "../../styles/dashboard.module.css"
import AdminLeft from "../../component/DasboardLeft"
import { useUserContext } from "../../context/UserContext"
import { useEffect } from "react"
import { useRouter } from "next/router"


const Dashboard = () => {
  const router= useRouter()
  const {admin}= useUserContext()
  useEffect(()=>{
    if(admin){
      router.push("/admin/login")
    }
  },[])
  return (
    <div className={styles.dashboard_container}>
      <AdminLeft />
      <div className={styles.right}>
        Welcome {admin?.user.last_name}
      </div>
    </div>
  )
}

export default Dashboard