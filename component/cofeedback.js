import styles from "../styles/COfeedback.module.css"
const COfeedback=()=>{
    return(
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
    )
}
export default COfeedback