import styles from '../../styles/Login.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUserContext } from '../../context/UserContext'
import Head from 'next/head'
import notie from 'notie'
export default function Login() {
    const { admin } = useUserContext();
    const [error, setError] = useState(null)
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

        fetch("http://localhost:8081/admin/login", reqOptions)
            .then((response) => response.json())
            .then((response) => {
                if (response.error) {
                    console.log("Error :", response.message)
                    setError("wrong password or email")
                    notie.alert({
                        type: "error",
                        text: response.error.message,
                        position: "top",
                    })

                } else {
                    localStorage.setItem("admin", JSON.stringify(response.data))

                    // setToken(response.data.token.token)
                    // setUser(response.data.user)
                    notie.alert({
                        type: 'success',
                        text: "logged in successfully",
                        position: "top",
                    })
                    router.push("/admin/dashboard")

                }
            })

    }
    return (



        <div className={styles.login_page}>
            <Head>
                <link rel="stylesheet" type="text/css" href="https://unpkg.com/notie/dist/notie.min.css" />
            </Head>
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
