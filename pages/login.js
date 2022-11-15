import styles from '../styles/Login.module.css'
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Link from 'next/link'
export default function Login() {
    return (
      
        <div>
          <Navbar/>
          <div className={styles.login_container}>
          <h2>NBA Record Management System Welcomes You</h2>
          
          <form className={styles.login_form}>
          
          <label for="email">Email address</label>
          <input type="email" name="email" id="email" placeholder="Enter email address" required/>
          <label for="password">Password</label>
          <input type="password" name="email" id="email" placeholder="Enter password" required/>
          <Link href="#">Forget Password</Link>
          <button type="submit">LOG IN</button>
          
          
          
          <h5>Don't have an account?</h5>
          <Link href="#">Register here</Link>
          </form>
          

          </div>
          <Footer/>
        </div>
     
    )
}
