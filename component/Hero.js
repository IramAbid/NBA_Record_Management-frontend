import styles from "../styles/hero.module.css"
import Link from 'next/link'
const Hero = () => {
    return (
        <div className={styles.hero_container}>
            <div className={styles.logo_container}>
                <img src="/logo.jpeg" alt="logo" />

            </div>
            <div className={styles.details}>
                <h1>NBA Record management system</h1>
                <p>NBA Record Management System is a web application for maintaining and automating the record of all courses that are taught in the class throughout the program.</p>
            </div>
            <div className={styles.button_container}>
                <div><Link href="/student/login">STUDENT</Link></div>
                <div><Link href="/teacher/login">TEACHER</Link></div>
                <div><Link href="/login">ADMIN</Link></div>
                <div><Link href="/feedback">FEEDBACK</Link></div>
            </div>

        </div>
    )
}

export default Hero