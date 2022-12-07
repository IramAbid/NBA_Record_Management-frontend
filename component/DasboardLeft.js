import styles from "../styles/dashboard.module.css"
import Link from "next/link"
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { useUserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import notie from 'notie'
import Head from "next/head";

const DasboardLeft = () => {
  const router = useRouter()
  const { user, setUser } = useUserContext()
  let body = {
    token: user?.token.token
  }
  const UserLogout = () => {
    // e.preventDefault();
    const reqOptions = {
      method: "POST",
      body: JSON.stringify(body)
    }

    fetch("http://localhost:8081/student/logout", reqOptions)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {

          notie.alert({
            type: 'error',
            text: response.error,
            position: "top",
          })
        } else {
          setUser(null)
          localStorage.removeItem("user")
          notie.alert({
            type: 1,
            text: "logged out successfully",
            position: "top",
          })
          router.push("/")

        }
      })


  }
  return (
    <>
      <div className={styles.left}>
        <Head>
          <link rel="stylesheet" type="text/css" href="https://unpkg.com/notie/dist/notie.min.css" />
        </Head>
        <div>
          <div className={styles.component}>
            <DashboardIcon />
            <Link href="/student/dashboard">Dashboard</Link>
          </div>

          <div className={styles.component}>
            <LibraryBooksIcon />
            <Link href="/student/registered-courses">Regsitered Courses</Link>
          </div>
          <div className={styles.component}>
            <FeedbackIcon />
            <Link href="/student/feedbacks">Feedbacks</Link>
          </div>
          <div className={styles.component}>
            <SettingsIcon />
            <Link href="/student/account-setting">Account Setting</Link>
          </div>
        </div>
        <div className={styles.component_last} onClick={() => UserLogout()}>
          <LogoutIcon />
          <p>Logout</p>
        </div>

      </div>
    </>
  )
}

export default DasboardLeft