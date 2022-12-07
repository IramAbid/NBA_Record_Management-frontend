import styles from "../../styles/dashboard.module.css"
import DasboardLeft from "../../component/DasboardLeft"
import { useUserContext } from "../../context/UserContext"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Dashboard = () => {
  const { user } = useUserContext()
  return (
    <div className={styles.dashboard_container}>
      <DasboardLeft />
      <div className={styles.right}>
        <h2>Student Dashboard</h2>
        <div className={styles.icon}>
          <AccountCircleIcon className={styles.icon} fontSize='large'/>
        </div>
        <div className={styles.dashbaord_text}>
          <p><span>Name: </span> {user?.user.first_name} {user?.user.last_name}</p>
          <p><span>Enrollment Number: </span> {user?.user.enrollment_no} </p>
          <p><span>Program: </span> {user?.user.program} </p>
          <p><span>Semester: </span> {user?.user.semester} </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard