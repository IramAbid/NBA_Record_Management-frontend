import styles from "../styles/contact.module.css"
import AddressIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/ContactPhone';
import WebsiteIcon from '@mui/icons-material/Laptop';

export default function ContactUs() {
    return (
        <div className={styles.contactus_container}>
            <div className={styles.contactus_form}>
                <div className={styles.contactus_form_content}>
                <h5>Get in touch</h5>
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
                <input type="submit" value="Send "/>
                </div>
                </form>
                </div>
            </div>
            <div className={styles.contactus}>
             <h4>Contact Us</h4>
             <div className={styles.component}>
                <AddressIcon/>
                <p> <strong>Address:</strong> ZHCET, AMU, Aligarh</p>
             </div>
             <div className={styles.component}>
             <PhoneIcon/>
                <p> <strong>Phone  :</strong> 9838352836</p>
             </div >
             <div className={styles.component} >
                <EmailIcon/>
                <p><strong>Email   :</strong> nbamail@gmail.com</p>
             </div>
             <div className={styles.component}>
                <WebsiteIcon/>
                <p> <strong>Website  :</strong> nba.zhcet.com</p>
             </div>
            </div>


        </div>
    )
}