import styles from "../styles/dashboard.module.css"
import Link from "next/link"
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { useUserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import { useState } from "react";
import notie from 'notie'
import Head from "next/head";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PieChartIcon from '@mui/icons-material/PieChart';

const DasboardLeft = () => {
  const router = useRouter()
  const [error, setError] = useState(null)
  const { admin, setAdmin } = useUserContext()
  let body = {
    token: admin?.token.token
  }
  const UserLogout = () => {
    const reqOptions = {
      method: "POST",
      body: JSON.stringify(body)
    }

    fetch("http://localhost:8081/admin/logout", reqOptions)
      .then((response) => response.json())
      .then((response) => {
        if (response.err) {
          notie.alert({
            type: 'error',
            text: response.err,
            position: "top",
          })
        } else {
          localStorage.removeItem("admin")
          notie.alert({
            type: 'success',
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
            <Link href="/admin/dashboard">Dashboard</Link>
          </div>

          <div className={styles.component}>
            <AnalyticsIcon />
            <Link href="/admin/analyze-course">Analyse Course</Link>
          </div>
          <div className={styles.component}>
            <PieChartIcon />
            <Link href="/admin/analyze-program">Analyze Program</Link>
          </div>
          <div className={styles.component}>
            <FeedbackIcon />
            <Link href="/admin/read-feedbacks">Read Feedbacks</Link>
          </div>
          <div className={styles.component}>
          <GroupAddIcon />
            <Link href="/admin/add-users">Add Users</Link>
          </div>
        </div>
        <div className={styles.component_last} onClick={() => UserLogout()}>
          <LogoutIcon />
          <Link href="#">Logout</Link>
        </div>

      </div>
    </>
  )
}

export default DasboardLeft