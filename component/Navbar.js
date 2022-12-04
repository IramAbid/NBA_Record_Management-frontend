import styles from "../styles/navbar.module.css"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className={styles.my_navbar}>
            <div class="logo">
                <Link href="/"><h3>ALIGARH MUSLIM UNIVERSITY</h3></Link>
            </div>
            <div className={styles.menubar}>
                <div>
                    <Link href="/notices">NOTICES AND CIRCULARS</Link>
                </div>
                <div>
                    <Link href="/useful-downloads">USEFUL DOWNLOADS</Link>
                </div>
                <div>
                    <Link href="/about">ABOUT US</Link>
                </div>
                <div>
                    <Link href="/contactus">CONTACT</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar