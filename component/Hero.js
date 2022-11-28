import styles from "../styles/hero.module.css"
import Link from 'next/link'
const Hero = () => {
    return (
        <div className={styles.hero_container}>
            <div className={styles.logo_container}>
                <img src="/logo.jpeg" alt="logo"  />
                
            </div>
            <div className={styles.details}>
                <h1>NBA Record management system</h1>
                <h3>NBA Record Management System is a web application for maintaining and automating the record of all courses that are taught in the class throughout the program. This software analyzes the course outcomes, program outcomes, course specific outcomes and marks gained in each outcome based section. It also analyzes the achievements of the students in their graduation and after graduation in this program on the basis of research papers published, internships, projects and placement.</h3>
            </div>
            <div className={styles.button_container}>
                <div><Link  href="/login"><button>STUDENT</button></Link></div>
                <div><Link  href="/login"><button>TEACHER</button></Link></div>
                <div><Link  href="/login"><button>ADMIN</button></Link></div>
                <div><Link  href="/feedback"><button>FEEDBACK</button></Link></div>
            </div>

        </div>
    )
}

export default Hero