import styles from "../styles/hero.module.css"
import Link from 'next/link'
const Hero = () => {
    return (
        <div className={styles.hero_container}>
            <div className={styles.logo_container}>
               <img src="/amulogo.svg" alt="logo" />
            </div>
            <div>
                <h3 classname="styles.amu">
                    Zakir Husain College of Engineering and Technology
                </h3>
            </div>
            <div className={styles.details}>
               
                <h1 className="styles.systemheading" >NBA RECORD MANAGEMENT SYSTEM </h1>
                <p>NBA Record Management System is a web application for maintaining and automating the record of all courses that are taught in the class throughout the program.</p>
            </div>
            <div className={styles.button_container}>
                <div><Link href="/student/login">STUDENTS</Link></div>
                <div><Link href="/admin/login">ADMIN</Link></div>
                <div><Link href="/contact">HELPDESK</Link></div>
            </div>

        </div>
    )
}

export default Hero