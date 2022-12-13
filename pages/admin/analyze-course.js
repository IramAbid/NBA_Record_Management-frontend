import styles from "../../styles/dashboard.module.css"
import AdminLeft from "../../component/AdminLeft"
import { useUserContext } from "../../context/UserContext"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getTitleList, getCourseByCode } from "../../constants/courses"
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Head from "next/head"
import { Chart } from "react-google-charts";


const GeneralRating = [
  "The teacher completes the entire syllabus in time.",
  "The teacher discusses topics and interacts in the class.",
  "The teacher communicates clearly and inspires me by his teaching.",
  "The teacher is punctual in the class.",
  "The teacher comes well prepared in the class.",
  "The teacher encourages participation and discussion in the class.",
  "The teacher uses modern teaching aids, handouts, suitable references, power point presentation, web resources etc.",
  "The teacher’s attitude towards the students is friendly and helpful.",
  "The teacher is available and accessible in the Department.",
  "The evaluation process is fair and unbiased.",
  "Regular and timely feedback is given on our performance.",
  "Periodical assessments are conducted as per schedule.",
  "I have learnt and understood the subject material/s in this course."
]


const AnalyzeCourse = () => {
  const router = useRouter()
  const { admin } = useUserContext()

  const [course, setCourse] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [feedbacks, setFeedbacks] = useState(null)
  const [counter, setCounter] = useState(null)

  const color = ["#b87333", "silver", "gold", "#e5e4e2", 'purple', 'red', 'green', 'yellow', 'orange', 'purple', "silver", "gold", "#e5e4e2", 'purple']


  function averageCO(index) {
    var sum = 0;
    for (var i = 0; i < feedbacks?.data.length; i++) {
      sum += feedbacks?.data[i].unit_feedback[index]
    }
    return sum / feedbacks?.data.length
  }

  function getData() {
    var data = [["Element", "Rating", { role: "style" }]]
    for (var i = 0; i < feedbacks?.data[0].unit_feedback.length; i++) {
      data.push([`CO${i + 1}`, averageCO(i), color[i]])
    }
    return data
  }


  function averageRating(index) {
    var sum = 0;
    for (var i = 0; i < feedbacks?.data.length; i++) {
      sum += feedbacks?.data[i].general_feedback[index]
    }
    return sum / feedbacks?.data.length
  }

  function getRating() {
    var data = [["Element", "Rating", { role: "style" }]]
    for (var i = 0; i < 13; i++) {
      data.push([`S${i + 1}`, averageRating(i), color[i]])
    }
    return data

  }


  const handleChange = (event) => {
    setCourse(event.target.value);
    console.log(event.target.value)
  }

  const FetchData = async (e) => {

    e.preventDefault()
    var reqOptions = {
      method: "POST",
      body: JSON.stringify({
        course_code: course
      })
    }

    try {
      setFeedbacks(null)
      setLoading(true)
      await fetch("http://localhost:8081/admin/feedback-data-course", reqOptions)
        .then((response) => response.json())
        .then((response) => {
          setFeedbacks(response.data)
          setCounter(true)

          setLoading(false)
        })
    } catch (err) {
      setError("Unable to fetch data, please try again later")
      setLoading(false)
    }
  }








  return (
    <div className={styles.anaylyze_course_container}>
      <Head>

      </Head>
      <AdminLeft />
      <div className={styles.right}>
        <div className={styles.search_bar}>
          <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Course</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={course}
              onChange={handleChange}
              autoWidth
              label="Course"
            >
              {getTitleList()?.map((course) => {
                return <MenuItem key={course} value={course}>{course}</MenuItem>
              })}
            </Select>
          </FormControl>
          <div>
            <Button variant="contained" size="large" onClick={FetchData} disabled={loading}>
              {loading ? <> Fetching <CircularProgress size={24} /></> : "Fetch Data"}
            </Button>
          </div>
        </div>
        <div className={styles.bar_graph}>

          {loading ? <div className={styles.loading}><h1>Loadding Data ...</h1></div> :
            <>
              {feedbacks?.data ?
                <>
                  <div className={styles.bargraph_header}>
                    <div>
                      <p><strong>Course code:</strong> {course}</p>
                      <p> <strong>Registered Students:</strong> 60</p>
                    </div>
                    <div>
                      <p><strong>Course Title:</strong> {getCourseByCode(course).course_title}</p>
                      <p> <strong>Feedbacks filled:</strong> {feedbacks?.data.length}</p>
                      </div>
                  </div>
                  <div className={styles.bargraph_content}>
                    <div className={styles.bargraph_left}>
                      {getCourseByCode(course)?.COS.map((item, index) => {
                        return (
                          <div key={index} className={styles.course_list}>
                              <p key={index} className={styles.course_list}> <strong>CO{index + 1} </strong> : {item}</p>

                          </div>
                        )
                      })}
                    </div>
                    <div className={styles.bargraph_right}>
                      <Chart chartType="ColumnChart" width="500px" height="300px" data={getData()} />
                    </div>

                  </div>
                  <div className={styles.bargraph_content}>
                    <div className={styles.bargraph_left}>
                      {GeneralRating?.map((item, index) => {
                        return (
                          <div  key={index} className={styles.course_list_i} >
                            <p><strong>S{index + 1}</strong> : {item}</p>
                          </div>
                        )
                      })}
                    </div>
                    <div className={styles.bargraph_right}>
                      <Chart chartType="ColumnChart" width="500px" height="400px" data={getRating()} />
                    </div>

                  </div>
                </> :
                <>
                  {counter && <h2>No data found</h2>}

                </>}
            </>
          }


        </div>
      </div>
    </div>
  )
}

export default AnalyzeCourse