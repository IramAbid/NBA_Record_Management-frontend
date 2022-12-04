import styles from '../../styles/Login_teacher.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useUserContext } from '../../context/UserContext'
export default function Login() {
  const {setUser}= useUserContext();
  const [loading, setLoading] = useState(false)
  const router= useRouter();

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



    console.log("I am ran")
    fetch("http://localhost:8081/student/login", reqOptions)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          console.log("Error :", response.message)
          // notie.alert({
          //   type: "error",
          //   message: response.error.message,
          //   position: "bottom",
          // })

        } else {
          setUser(response.data)
          localStorage.setItem("user", JSON.stringify(response.data))
          console.log("your data is : ", response)
          // setToken(response.data.token.token)
          // setUser(response.data.user)
          // notie.alert({
          //   type: 'success',
          //   message: "logged in successfully",
          //   position: "bottom",
          // })

          // save info to cookie
          // let date = new Date();
          // let expDays = 1;
          // date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
          // const expires = "expires=" + date.toUTCString();

          // // set the cookie
          // document.cookie = "_site_data="
          //   + JSON.stringify(response.data)
          //   + "; "
          //   + expires
          //   + "; path=/; SameSite=strict; Secure;"

          router.push("/student/dashboard")

        }
    })

  }
  return (



    <div className={styles.login_page}>
      <div className={styles.image}>
        <img src='/admin.png' alt="admin image"></img>
      </div>
      <div className={styles.login_container}>
        <div className={styles.login_mainbox}>
          <form onSubmit={UserLogin} className={styles.login_box}>
            <div className={styles.logo}>
            <img src="/amulogo.svg" alt="logo" />
            <h5 className={styles.AMU_name}>ALIGARH MUSLIM UNIVERSITY</h5>
            </div>
            <div className={styles.login_component}>
            <h3>ADMIN LOGIN</h3>
            <h6>Enter your email</h6>
            <input type="email" name='email' value={values.email} placeholder='email' onChange={handleInputChange} />
            </div>
            <div className={styles.login_component}>
            <h6>Enter your password</h6>
            <input type="password" placeholder='password' value={values.password} onChange={handleInputChange} name="password" autoComplete=''/>
            <h5 className={styles.forgotpassword}>Forgot password?</h5>
            </div >
            <div className={styles.login_component_button}>
            <input type='submit' value="Login" />
            <h6 className={styles.Register} >Don't have an account?<strong> Register Here</strong></h6>
          </div>
        </form>
      </div>
      </div>
    </div>

  )
}
