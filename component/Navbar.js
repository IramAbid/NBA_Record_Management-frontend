import styles from "../styles/navbar.module.css"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className={styles.my_navbar}>
            <div>
                <Link href="/"><h3>ALIGARH MUSLIM UNIVERSITY</h3></Link>
            </div>
            <div className={styles.menubar}>
                <div>
                    <Link href="/about">About</Link>
                </div>
                <div>
                    <Link href="/useful-downloads">Useful Downloads</Link>
                </div>
                <div>
                    <Link href="/notices">Notices</Link>
                </div>
                <div>
                    <Link href="/contactus">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar