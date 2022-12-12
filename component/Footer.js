import styles from "../styles/footer.module.css"
import Link from "next/link"
const Footer = () => {
    return (
        <footer className={styles.my_footer}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img src="/logo.jpeg" alt="logo" />
                </div>
                <p>Zakir Hussain College of Engineering & Technology</p>
                <p>Aligarh Muslim University, Aligarh</p>
            </div>
            <div className={styles.middle}>
                <div>
                    <Link href="/">Home</Link>
                </div>
                <div>
                    <Link href="/about">About</Link>
                </div>
                <div>
                    <Link href="/notices">Notices</Link>
                </div>
            </div>
            <div className={styles.right}>
                
                <div>
                    <Link href="/useful-downloads">Useful Downloads</Link>
                </div>
                <div>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer