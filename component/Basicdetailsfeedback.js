

import styles from "../styles/Basicdetailsfeedback.module.css"
const Basicdetailsfeedback = () => {
    return(
        <div  className={styles.basicdetailscontainer1}>
            <div className={styles.basicdetailscontainer}>
              <h2>STUDENT SURVEY FORM</h2>
              <p>Your feedback will be used to identify strengths and weaknesses and to initiate appropriate corrective measures accordingly. Please spare some time to give your candid opinion. Your responses and comments will be treated confidentially and anonymously by the Department.</p>
              <p>Note:Give your feedback on a scale of 5(5 being the highest)</p>
            </div> 
            <div className={styles.co_container}>
            <h3>I. Indicate how well you feel this Course provides you with an opportunity to learn the following Course Outcomes (COs): I have an ability to: </h3>
            <form>
                <p>CO1. Describe computer and neywork security fundamental concepts and principles.</p>
    
            <label for="CO1">
            <input type="radio" value="1" name="CO1"/>1.
            </label>
            <label for="CO1">
            <input type="radio" value="2" name="CO1"/>2.
            </label>
            <label for="CO1">
            <input type="radio" value="3" name="CO1"/>3.
            </label>
            <label for="CO1">
            <input type="radio" value="4" name="CO1"/>4.
            </label>
            <label for="CO1">
            <input type="radio" value="5" name="CO1"/>5.
            </label>
            <p>CO2. Describe the inner workings of popular encryption algorithms, digital signatures, certificates and anti-cracking techniques.</p>
            <label for="CO2">
            <input type="radio" value="1" name="CO2"/>1.
            </label>
            <label for="CO2">
            <input type="radio" value="2" name="CO2"/>2.
            </label>
            <label for="CO2">
            <input type="radio" value="3" name="CO2"/>3.
            </label>
            <label for="CO2">
            <input type="radio" value="4" name="CO2"/>4.
            </label>
            <label for="CO2">
            <input type="radio" value="5" name="CO2"/>5.
            </label>
            <p>CO3. Demonstrate the ability to select among available network security technology and protocols such as Intrusion Detection, Intrusion Prevention, firewalls, etc.</p>
            <label for="CO3">
            <input type="radio" value="1" name="CO3"/>1.
            </label>
            <label for="CO3">
            <input type="radio" value="2" name="CO3"/>2.
            </label>
            <label for="CO3">
            <input type="radio" value="3" name="CO3"/>3.
            </label>
            <label for="CO3">
            <input type="radio" value="4" name="CO3"/>4.
            </label>
            <label for="CO3">
            <input type="radio" value="5" name="CO3"/>5.
            </label>
            <p>CO4. Describe system security models; security and methods for web application.</p>
            <label for="CO4">
            <input type="radio" value="1" name="CO4"/>1.
            </label>
            <label for="CO4">
            <input type="radio" value="2" name="CO4"/>2.
            </label>
            <label for="CO4">
            <input type="radio" value="3" name="CO4"/>3.
            </label>
            <label for="CO4">
            <input type="radio" value="4" name="CO4"/>4.
            </label>
            <label for="CO4">
            <input type="radio" value="5" name="CO4"/>5.
            </label>
            <p>CO5. Identify ethical, professional responsibilities, risks and liabilities in computer and network environment, and best practices to write a security policy.</p>
            <label for="CO5">
            <input type="radio" value="1" name="CO5"/>1.
            </label>
            <label for="CO5">
            <input type="radio" value="2" name="CO5"/>2.
            </label>
            <label for="CO5">
            <input type="radio" value="3" name="CO5"/>3.
            </label>
            <label for="CO5">
            <input type="radio" value="4" name="CO5"/>4.
            </label>
            <label for="CO5">
            <input type="radio" value="5" name="CO5"/>5.
            </label>
            </form> 
        </div>
         <div className={styles.commonfeedback_container}>
            <h3>II. Teaching, Learning and Evaluation:</h3>
            <form>
                <p>1. The teacher completes the entire syllabus in time.</p>
            <label for="CF1">
            <input type="radio" value="1" name="CF1"/>1.
            </label>
            <label for="CF1">
            <input type="radio" value="2" name="CF1"/>2.
            </label>
            <label for="CF1">
            <input type="radio" value="3" name="CF1"/>3.
            </label>
            <label for="CF1">
            <input type="radio" value="4" name="CF1"/>4.
            </label>
            <label for="CF1">
            <input type="radio" value="5" name="CF1"/>5.
            </label>
            <p>2. The teacher discusses topics and interacts in the class.</p>
            <label for="CF2">
            <input type="radio" value="1" name="CF2"/>1.
            </label>
            <label for="CF2">
            <input type="radio" value="2" name="CF2"/>2.
            </label>
            <label for="CF2">
            <input type="radio" value="3" name="CF2"/>3.
            </label>
            <label for="CF2">
            <input type="radio" value="4" name="CF2"/>4.
            </label>
            <label for="CF2">
            <input type="radio" value="5" name="CF2"/>5.
            </label>
            <p>3. The teacher communicates clearly and inspires me by his teaching.</p>
            <label for="CF3">
            <input type="radio" value="1" name="CF3"/>1.
            </label>
            <label for="CF3">
            <input type="radio" value="2" name="CF3"/>2.
            </label>
            <label for="CF3">
            <input type="radio" value="3" name="CF3"/>3.
            </label>
            <label for="CF3">
            <input type="radio" value="4" name="CF3"/>4.
            </label>
            <label for="CF3">
            <input type="radio" value="5" name="CF3"/>5.
            </label>
            <p>4. The teacher is punctual in the class.</p>
            <label for="CF4">
            <input type="radio" value="1" name="CF4"/>1.
            </label>
            <label for="CF4">
            <input type="radio" value="2" name="CF4"/>2.
            </label>
            <label for="CF4">
            <input type="radio" value="3" name="CF4"/>3.
            </label>
            <label for="CF4">
            <input type="radio" value="4" name="CF4"/>4.
            </label>
            <label for="CF4">
            <input type="radio" value="5" name="CF4"/>5.
            </label>
            <p>5. The teacher comes well prepared in the class.</p>
            <label for="CF5">
            <input type="radio" value="1" name="CF5"/>1.
            </label>
            <label for="CF5">
            <input type="radio" value="2" name="CF5"/>2.
            </label>
            <label for="CF5">
            <input type="radio" value="3" name="CF5"/>3.
            </label>
            <label for="CF5">
            <input type="radio" value="4" name="CF5"/>4.
            </label>
            <label for="CF5">
            <input type="radio" value="5" name="CF5"/>5.
            </label>
            <p>6. The teacher encourages participation and discussion in the class.</p>
            <label for="CF6">
            <input type="radio" value="1" name="CF6"/>1.
            </label>
            <label for="CF6">
            <input type="radio" value="2" name="CF6"/>2.
            </label>
            <label for="CF6">
            <input type="radio" value="3" name="CF6"/>3.
            </label>
            <label for="CF6">
            <input type="radio" value="4" name="CF6"/>4.
            </label>
            <label for="CF6">
            <input type="radio" value="5" name="CF6"/>5.
            </label>
            <p>7. The teacher uses modern teaching aids, handouts, suitable references, powerpoint presentation, web resources etc.</p>
            <label for="CF7">
            <input type="radio" value="1" name="CF7"/>1.
            </label>
            <label for="CF7">
            <input type="radio" value="2" name="CF7"/>2.
            </label>
            <label for="CF7">
            <input type="radio" value="3" name="CF7"/>3.
            </label>
            <label for="CF7">
            <input type="radio" value="4" name="CF7"/>4.
            </label>
            <label for="CF7">
            <input type="radio" value="5" name="CF7"/>5.
            </label>
            <p>8. The teacher attitude towards the students is friendly and helpful.</p>
            <label for="CF8">
            <input type="radio" value="1" name="CF8"/>1.
            </label>
            <label for="CF8">
            <input type="radio" value="2" name="CF8"/>2.
            </label>
            <label for="CF8">
            <input type="radio" value="3" name="CF8"/>3.
            </label>
            <label for="CF8">
            <input type="radio" value="4" name="CF8"/>4.
            </label>
            <label for="CF8">
            <input type="radio" value="5" name="CF8"/>5.
            </label>
            <p>9. The teacher is available and accessible in the Department</p>
            <label for="CF9">
            <input type="radio" value="1" name="CF9"/>1.
            </label>
            <label for="CF9">
            <input type="radio" value="2" name="CF9"/>2.
            </label>
            <label for="CF9">
            <input type="radio" value="3" name="CF9"/>3.
            </label>
            <label for="CF9">
            <input type="radio" value="4" name="CF9"/>4.
            </label>
            <label for="CF9">
            <input type="radio" value="5" name="CF9"/>5.
            </label>
            <p>10. The evaluation process is fair and unbiased</p>
            <label for="CF10">
            <input type="radio" value="1" name="CF10"/>1.
            </label>
            <label for="CF10">
            <input type="radio" value="2" name="CF10"/>2.
            </label>
            <label for="CF10">
            <input type="radio" value="3" name="CF10"/>3.
            </label>
            <label for="CF10">
            <input type="radio" value="4" name="CF10"/>4.
            </label>
            <label for="CF10">
            <input type="radio" value="5" name="CF10"/>5.
            </label>
            <p>11. Regular and timely feedback is given on our performance.</p>
            <label for="CF11">
            <input type="radio" value="1" name="CF11"/>1.
            </label>
            <label for="CF11">
            <input type="radio" value="2" name="CF11"/>2.
            </label>
            <label for="CF11">
            <input type="radio" value="3" name="CF11"/>3.
            </label>
            <label for="CF11">
            <input type="radio" value="4" name="CF11"/>4.
            </label>
            <label for="CF11">
            <input type="radio" value="5" name="CF11"/>5.
            </label>
            <p>12. Periodical assessments are conducted as per schedule.</p>
            <label for="CF12">
            <input type="radio" value="1" name="CF12"/>1.
            </label>
            <label for="CF12">
            <input type="radio" value="2" name="CF12"/>2.
            </label>
            <label for="CF12">
            <input type="radio" value="3" name="CF12"/>3.
            </label>
            <label for="CF12">
            <input type="radio" value="4" name="CF12"/>4.
            </label>
            <label for="CF12">
            <input type="radio" value="5" name="CF12"/>5.
            </label>
            <p>13. I have learnt and understood the subject material/s in this course.</p>
            <label for="CF13">
            <input type="radio" value="1" name="CF13"/>1.
            </label>
            <label for="CF13">
            <input type="radio" value="2" name="CF13"/>2.
            </label>
            <label for="CF13">
            <input type="radio" value="3" name="CF13"/>3.
            </label>
            <label for="CF13">
            <input type="radio" value="4" name="CF13"/>4.
            </label>
            <label for="CF13">
            <input type="radio" value="5" name="CF13"/>5.
            </label>
            <div className={styles.commentarea}>
             <h3>III.  Additional Coments:</h3>
             <label for="additionalcomment">
                <textarea id="additionalcomment" name="additionalcomment"/>
                <button type="submit">SUBMIT</button>
             </label>
            </div>
            </form> 
        </div>
        </div>
        
    )
}
export default Basicdetailsfeedback