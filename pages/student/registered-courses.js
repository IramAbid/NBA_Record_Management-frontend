import styles from "../../styles/dashboard.module.css"
import DasboardLeft from "../../component/DasboardLeft"
import { useUserContext } from "../../context/UserContext"
import { useEffect, useState } from "react"
import Head from "next/head"

const Profile = () => {
    const { user, feedbackData, setFeedbackData } = useUserContext()
    console.log("Feedback user", user?.user.last_name)
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(false)

    const sanitisedData = {

    }
    const FetchData = async () => {
        var reqOptions = {
            method: "POST",
            body: JSON.stringify({
                enrollment_no: user?.user.enrollment_no
            })
        }

        try {
            setLoading(true)
            await fetch("http://localhost:8081/student/registered-courses", reqOptions)
                .then((response) => response.json())
                .then((response) => {
                    setFeedbackData(response.data)
                    setLoading(false)
                })
        } catch (err) {
            setErr("Unable to fetch data, please try again later")
            setLoading(false)
        }
    }

    useEffect(() => {
        FetchData();
    }, [])

    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
                <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </Head>
            <div className={styles.course_container}>
                <DasboardLeft />
                <div className={styles.right}>

                    <div className={styles.data_grid}>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">s.no</th>
                                    <th scope="col">course code</th>
                                    <th scope="col">course title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feedbackData?.registered_courses.map((index,item) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{item+1}</th>
                                                <td>{index}</td>
                                                <td>Otto</td>
                                            </tr>
                                        </>
                                    )
                                })}


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile