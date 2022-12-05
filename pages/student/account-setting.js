import styles from "../../styles/dashboard.module.css"
import DasboardLeft from "../../component/DasboardLeft"
import { useUserContext } from "../../context/UserContext"

const AccountSetting = () => {
  const { user } = useUserContext()

  return (
    <div className={styles.setting_container}>
      <DasboardLeft />
      <div className={styles.right}>
        <h1>Account Setting</h1>
        Welcome {user?.user.last_name}
      </div>
    </div>
  )
}

export default AccountSetting