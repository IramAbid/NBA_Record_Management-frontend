import styles from '../styles/Register.module.css'
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
export default function Register() {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  
  const HandleSubmit=(email, password)=>{
    const router=useRouter();
    router.push("login.js");
    console.log("account created");
  }
    return (
     

      
        <div>
          <Navbar/>
          <div className={styles.register_container}>
          <h2>NBA Record Management System Welcomes You</h2>
          
           <form className={styles.register_form} onSubmit={HandleSubmit("email", "password")}>
          
          <label htmlFor="email"> Enter email address</label>
          <input type="email" value={email} name="email" id="email" placeholder="Enter email address" onChange={(e)=>setEmail(e.target.value)}  required/>
          <label htmlFor="password">Create password</label>
          <input type="password" value={password} name="password" id="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} required/>
         
          <button type="submit">CREATE ACCOUNT</button>
          
          
          
          
          </form>
          

          </div>
          <Footer/>
        </div>
     
    )
}
