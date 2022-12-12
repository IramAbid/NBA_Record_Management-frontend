import styles from '../../styles/Login.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUserContext } from '../../context/UserContext'
import notie from 'notie'
import Head from 'next/head'




export default function Login() {
  const {setAdmin,admin}= useUserContext();
  const [loading, setLoading] = useState(false)
  const [err, setErr]= useState(null)
  const router= useRouter(); 

  useEffect(()=>{
    if(admin){
      router.push('/admin/dashboard')
    }
  })

  const [values, setValues] = useState({
    email: "",
    password: "",
})

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
        ...values,
        [name]: value,
    });
}

  const UserLogin = (e) => {
    e.preventDefault();
    var reqOptions = {
      method: "POST",
      body: JSON.stringify(values)
    }

    fetch("http://localhost:8081/admin/login", reqOptions)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          console.log("Error :", response.message)
          setErr(response.message)
          notie.alert({
            type: 3,
            text: response.message,
            position:"top"
          })

        } else {
          setAdmin(response.data)
          localStorage.setItem("admin", JSON.stringify(response.data))
          notie.alert({
            type: 1,
            position:"top",
            text: "logged in successfully",
          })
          router.push("/admin/dashboard")

        }
    })

  }
  return (



    <div className={styles.login_page}>
      <Head>
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/notie/dist/notie.min.css"/>
      </Head>
      <div className={styles.login_container}>
        <form onSubmit={UserLogin} className={styles.login_box}>
          <p className={styles.adminText}>Admin Login</p>
          
          <div className={styles.logo}>
            <img src="/logo.jpeg" alt="logo" />
          </div>
          <div className={styles.login_component}>
            <input type="email" name='email' value={values.email} placeholder='email' onChange={handleInputChange} />
          </div>
          <div className={styles.login_component}>
            <input type="password" placeholder='password' value={values.password} onChange={handleInputChange} name="password" autoComplete=''/>
          </div >
          <div className={styles.login_component_button}>
            <input type='submit' value="Login" />
          </div>
          {err&&  <div className={styles.error_message}><p >{err}</p></div>}

        </form>
      </div>
    </div>

  )
}

