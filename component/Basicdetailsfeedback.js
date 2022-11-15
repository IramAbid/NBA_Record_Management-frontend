import styles from "../styles/Basicdetailsfeedback.module.css"
const Basicdetailsfeedback = () => {
    return(
        <div  className={styles.basicdetailscontainer}>
            <h2>STUDENT SURVEY FORM</h2>
            <p>Your feedback will be used to identify strengths and weaknesses and to initiate appropriate corrective measures accordingly. Please spare some time to give your candid opinion. Your responses and comments will be treated confidentially and anonymously by the Department.</p>
            <h4>Autumn Semester 2018-19</h4>
            <div className={styles.coursedetail}>
            <label for="course">Course:
                <input type="text" name="course" id="course" placeholder="Course" required/>
                </label>
                
                <label for="date">Date:
                <input type="date" name="date" id="date" placeholder="Date" required/>
                </label>
            </div>
            <div className={styles.coursedetail}>
                <label for="department">Department:
                <input type="text" name="department" id="department" placeholder="Department" required/>
                </label>
                
                <label for="teacherincharge">Teacher Incharge:
                <input type="text" name="teacherincharge" id="teacherincharge" placeholder="Teacher Incharge" required/>
                </label>
            </div>
            <p>Note:Give your feedback on a scale of 5(5 being the highest)</p>
        </div>
    )
}
export default Basicdetailsfeedback