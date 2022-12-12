import styles from "../../../styles/dashboard.module.css"
import DasboardLeft from "../../../component/DasboardLeft"
import { useUserContext } from "../../../context/UserContext"
import Head from "next/head"
import { useState,useEffect } from "react"
import { getCourseByCode } from "../../../constants/courses"


const Feedback = () => {
  const { user } = useUserContext()
  const [feedbackData, setFeedbackData]= useState(null)
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)


const FetchData = async () => {
    var reqOptions = {
        method: "POST",
        body: JSON.stringify({
            enrollment_no: user?.user.enrollment_no
        })
    }

    try {
        setLoading(true)
        await fetch("http://localhost:8081/student/feedbacks", reqOptions)
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
    <div className={styles.feedback_container}>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </Head>
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
                                {feedbackData?.feedbacks.map((index,item) => {
                                    return (
                                        <>
                                            <tr key={item}>
                                                <td scope="row">{item+1}</td>
                                                <td>{index}</td>
                                                <td><a href={`/student/feedbacks/add/${index}`}> {getCourseByCode(index)?.course_title}</a></td>
                                            </tr>
                                        </>
                                    )
                                })}


                            </tbody>
                        </table>

                    </div>
      </div>
    </div>
  )
}
export default Feedback
