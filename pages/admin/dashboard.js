import styles from "../../styles/dashboard.module.css"
import AdminLeft from "../../component/AdminLeft"
import { useUserContext } from "../../context/UserContext"
import { useRouter } from "next/router"


const Dashboard = () => {
  const router= useRouter()
  const {admin}= useUserContext()
  return (
    <div className={styles.dashboard_container}>
      <AdminLeft />
      <div className={styles.right}>
       <h1>Welcome</h1>
        <p>User : {admin?.user.email}</p>
      </div>
    </div>
  )
}

export default Dashboard