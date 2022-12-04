import styles from "../styles/notices.module.css"
import NoticeIcon from '@mui/icons-material/AnnouncementRounded';
export default function Notices(){
    return (
        <div className={styles.notices_container}>
            <div className={styles.box}>
                <div className={styles.notice_box}>
                    <NoticeIcon/>
                    <h3>Notice</h3>
                    <p>All students are requested to fill the feedback form of all registered courses by 31/12/22.</p>
                </div>
                <div className={styles.notice_box}>
                <NoticeIcon/>
                    <h3>Notice</h3>
                    <p>Students can contact admin in case of any query regarding marks updation.</p>
                </div>
                <div className={styles.notice_box}>
                <NoticeIcon/>
                    <h3>Notice</h3>
                    <p>Students can check their marks in registered courses on their profile after logging into their account.</p>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.notice_box}>
                <NoticeIcon/>
                    <h3>Notice</h3>
                    <p>Students can download the End Semester Examination Scheme from useful downloads page.</p>
                </div>
                <div className={styles.notice_box}>
                <NoticeIcon/>
                    <h3>Notice</h3>
                    <p>Studens are requested to submit their application in respective department for makeup examination.</p>
                </div>
                <div className={styles.notice_box}>
                <NoticeIcon/>
                    <h3>Notice</h3>
                    <p>Students can download Mid Semester Examination Scheme from useful downloads page.</p>
                </div>
            </div>
        </div>
    )
}