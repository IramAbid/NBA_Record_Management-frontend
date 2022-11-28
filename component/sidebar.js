import React from "react"
import styles from "../styles/Sidebar.module.css"
const SideBar=()=>{
    return (
       <div className={styles.navcontainer}>
        <div className={styles.wrapper}>
            
                <div><a href="#">Profile</a></div>
                <div><a href="#">Registered Courses</a></div>
                <div><a href="#">Feedback</a></div>
                <div><a href="#">Logout</a></div>
            
        </div>

       </div>
    )
}
export default SideBar;