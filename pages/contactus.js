import styles from "../styles/contact.module.css"
import AddressIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/ContactPhone';
import WebsiteIcon from '@mui/icons-material/Laptop';

export default function ContactUs() {
    return (
        <div className={styles.contactus_container}>
            <div className={styles.contactus_form}>
                <p>Get in touch</p>
                <form>
                <div className={styles.contactus_component}>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div className={styles.contactus_component}>
                    <input type="email" name="email" placeholder="Email" />
                </div>
                <div className={styles.contactus_component}>
                    <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className={styles.contactus_component}>
                    <textarea name="message" placeholder="Message"/>
                </div>
                <div className={styles.contactus_component_button}>
                <input type="submit" value="Send Message"/>
                </div>
                </form>

            </div>
            <div className={styles.contactus}>
             <p>Contact Us</p>
             <div className={styles.component}>
                <AddressIcon/>
                <h4>Address:</h4><p>ZHCET, AMU Aligarh</p>
             </div>
             
             <div className={styles.component}>
             <PhoneIcon/>
                <h4>Phone:</h4><p>1234567896</p>
             </div>
             <div className={styles.component}>
                <EmailIcon/>
                <h4>Email:</h4><p>mail@gmail.com</p>
             </div>
             <div className={styles.component}>
                <WebsiteIcon/>
                <h4>Website:</h4><p>nba.com</p>
             </div>
            </div>


        </div>
    )
}