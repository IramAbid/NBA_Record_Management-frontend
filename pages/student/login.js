import styles from '../../styles/Login.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUserContext } from '../../context/UserContext'
import notie from 'notie'
import Head from 'next/head'

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];


export default function Login() {
  const {setUser, user}= useUserContext();
  const [loading, setLoading] = useState(false)
  const router= useRouter(); 

  useEffect(()=>{
    if(user){
      router.push('/student/dashboard')
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

    fetch("http://localhost:8081/student/login", reqOptions)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          console.log("Error :", response.message)
          notie.alert({
            type: 3,
            text: response.error.message,
            position:"top"
          })

        } else {
          var sanitisedUser= {
            ...response.data,
            accessLevel: 1
        }
        console.log("sanitised user", sanitisedUser)
          setUser(sanitisedUser)
          localStorage.setItem("user", JSON.stringify(sanitisedUser))
          notie.alert({
            type: 1,
            position:"top",
            text: "logged in successfully",
          })


          router.push("/student/dashboard")

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
        </form>
      </div>
    </div>

  )
}
