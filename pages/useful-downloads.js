import styles from "../styles/usefuldownloads.module.css"
import Link from "next/link"
import DownloadIcon from '@mui/icons-material/Download';
export default function Notices(){
    return (
        <div className={styles.downloads_container}>
            <div className={styles.box}>
                <div className={styles.downloads_box}>
                    <DownloadIcon/>
                    <h3>Download</h3>
                    <Link href="#">Download the End Sementer Examination Scheme.</Link>
                </div>
                <div className={styles.downloads_box}>
                <DownloadIcon/>
                    <h3>Download</h3>
                    <Link href="#">Download Admit Card for End Semester Examination.</Link>
                </div>
                <div className={styles.downloads_box}>
                <DownloadIcon/>
                    <h3>Download</h3>
                    <Link href="#">Guidelines for students for NBA visit</Link>
                    </div>
            </div>
            <div className={styles.box}>
                <div className={styles.downloads_box}>
                <DownloadIcon/>
                    <h3>Download</h3>
                    <Link href="#">Download Mid Semester Examination Scheme</Link>
                </div>
                <div className={styles.downloads_box}>
                <DownloadIcon/>
                    <h3>Download</h3>
                    <Link href="#">Seating Arragngement for Mid Semester Examination</Link>
                    </div>
                <div className={styles.downloads_box}>
                <DownloadIcon/>
                    <h3>Download</h3>
                    <Link href="#">Download the registration card for odd semester.</Link>
                    </div>
            </div>
        </div>
    )
}