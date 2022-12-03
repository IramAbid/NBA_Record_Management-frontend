import styles from "../../styles/dashboard.module.css"
import DasboardLeft from "../../component/DasboardLeft"
import { useUserContext } from "../../context/UserContext"
import { useEffect } from "react"


const Dashboard = () => {
  const { user } = useUserContext()
  console.log("user from ", user?.user.first_name)
  return (
    <div className={styles.dashboard_container}>
      <DasboardLeft />
      <div className={styles.right}>
        Welcome {user?.user.last_name}
      </div>
    </div>
  )
}

export default Dashboard