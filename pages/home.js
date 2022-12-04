import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Home.module.css"
export default function Layout({ children }) {
    return (
        <>
        <div className={styles.background}>
            <Navbar />
            {children}
            <Footer />
            </div>
        </>
    );
}