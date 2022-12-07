import styles from "../../styles/dashboard.module.css"
import AdminLeft from "../../component/AdminLeft"
import { useUserContext } from "../../context/UserContext"
import { useEffect } from "react"
import { useRouter } from "next/router"

const AddUser = () => {
  const router= useRouter()
  const {admin}= useUserContext()
  return (
    <div className={styles.add_user_container}>
      <AdminLeft />
      <div className={styles.right}>
       <h1>Welcome</h1>
        <p>User : {admin?.email}</p>
      </div>
    </div>
  )
}

export default AddUser