import styles from '../../styles/Login.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUserContext } from '../../context/UserContext'
export default function Login() {
    const { admin, setAdmin } = useUserContext();
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if (admin) {
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



        console.log("I am ran")
        fetch("http://localhost:8081/admin/login", reqOptions)
            .then((response) => response.json())
            .then((response) => {
                if (response.error) {
                    console.log("Error :", response.message)
                    setErr("wrong password or email")
                    // notie.alert({
                    //   type: "error",
                    //   message: response.error.message,
                    //   position: "bottom",
                    // })

                } else {
                    var sanitisedUser = {
                        ...response.data,
                        accessLevel: 2
                    }
                    console.log("sanitised user", sanitisedUser)
                    setUser(sanitisedUser)
                    localStorage.setItem("admin", JSON.stringify(sanitisedUser))
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

                    router.push("/admin/dashboard")

                }
            })

    }
    return (



        <div className={styles.login_page}>
            <div className={styles.login_container}>
                <form onSubmit={UserLogin} className={styles.login_box}>
                    <div className={styles.warning}>
                        <p>Admin only</p>
                    </div>
                    <div className={styles.logo}>
                        <img src="/logo.jpeg" alt="logo" />
                    </div>
                    <div className={styles.login_component}>
                        <input type="email" name='email' value={values.email} placeholder='email' onChange={handleInputChange} />
                    </div>
                    <div className={styles.login_component}>
                        <input type="password" placeholder='password' value={values.password} onChange={handleInputChange} name="password" autoComplete='' />
                    </div >
                    <div className={styles.login_component_button}>
                        <input type='submit' value="Login" />
                    </div>
                </form>
            </div>
        </div>

    )
}
