import styles from "../styles/navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.my_navbar}>
        <div>
            ALIGARH MUSLIM UNIVERSITY
        </div>
        <div className={styles.menubar}>
            <div>
                <a href="#"> ABOUT </a>
            </div>
            <div>
                <a href="#"> USEFUL DOWNLOADS</a>
            </div>
            <div>
                <a href="#"> CONTACT US</a>
            </div>
            <div>
                <a href="#"> NOTICES</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar