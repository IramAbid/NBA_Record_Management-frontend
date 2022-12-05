import styles from "../styles/usefuldownloads.module.css"
import Link from "next/link"
import DownloadIcon from '@mui/icons-material/Download';
export default function Notices(){
    return (
        <div className={styles.downloads_container}>
            <div className={styles.box}>
                <div className={styles.downloads_box}>
                    <DownloadIcon/>
                    <a href="/OE.pdf" download> <h3>Download</h3></a>
                    <Link href="/OE.pdf" >End Sementer Examination Scheme.</Link>
                </div>
                <div className={styles.downloads_box}>
                <DownloadIcon/>

                    <a href="/OE.pdf" download> <h3>Download</h3></a>
                    <Link href="/OE.pdf" download> Admit Card for End Semester Examination.</Link>
                </div>
                <div className={styles.downloads_box}>
                <DownloadIcon/>
                    <a href="/OE.pdf" download> <h3>Download</h3></a>
                    <Link href="/odd sem.pdf">Guidelines for students for NBA visit</Link>
                    </div>
            </div>
            <div className={styles.box}>
                <div className={styles.downloads_box}>
                <DownloadIcon/>
                    
                    <a href="/odd sem.pdf" download> <h3>Download</h3></a>
                    <Link href="odd sem.pdf#">Mid Semester Examination Scheme</Link>
                </div>
                <div className={styles.downloads_box}>
                <DownloadIcon/>
    
                    <a href="/odd sem.pdf" download> <h3>Download</h3></a>
                    <Link href="odd sem.pdf">Seating Arragngement for Mid Semester Examination</Link>
                    </div>
                <div className={styles.downloads_box}>
                <DownloadIcon/>
                    
                    <a href="/odd sem.pdf" download> <h3>Download</h3></a>
                    <Link href="/odd sem.pdf"> the registration card for odd semester.</Link>
                    </div>
            </div>
        </div>
    )
}