import styles from "../styles/about.module.css"
export default function About () {
    return (
        <div className={styles.about_container}>
            <div className={styles.box}>
                <div className={styles.img_box}>
                   
                </div>
                <div className={styles.text_box}>
                    <p>NBA Record Management system is a web application for maintaing and automating the record of all the courses that are taught in the class throughout the program. This software will analyze the course achievement and student's performance on the basis of course outcomes, program outcomes, course specific outcomes and marks gained in each outcome based section. </p>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.text_box}>
                    <p> The goal of this software is to facilitate institutes to keep records, analyze it and later use it for finding areas of improvement. This system keeps the record and achievements of every student registered for a particular course. This system also analyzes the feedback given to teachers by each student.</p>
                </div>
                <div className={styles.img_box}>
                     
                </div>
            </div>
        </div>
    )
}