import styles from "../../styles/dashboard.module.css"
import AdminLeft from "../../component/AdminLeft"
import { useUserContext } from "../../context/UserContext"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Chart } from "react-google-charts";




const AnalyzeProgram = () => {
  const router = useRouter()
  const { admin } = useUserContext()

  const [course, setCourse] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [feedbacks, setFeedbacks] = useState(null)
  const [counter, setCounter] = useState(null)

  const color = ["#b87333", "silver", "gold", "#e5e4e2", 'purple', 'red', 'green', 'yellow', 'orange', 'purple', "silver", "gold", "#e5e4e2", 'purple']

  function getData(){
    const allCourses = [
      {
        courseCode: "COC3080",
        average: getAverage("COC3080"),
      },
      {
        courseCode: "COC3090",
        average: getAverage("COC3090"),
      },
      {
        courseCode: "COC3100",
        average: getAverage("COC3100"),
      },
      {
        courseCode: "COC3930",
        average: getAverage("COC3930"),
      },
      {
        courseCode: "COC3950",
        average: getAverage("COC3950"),
      },
      {
        courseCode: "ELA3400",
        average: getAverage("ELA3400"),
      },
      {
        courseCode: "MEH3450",
        average: getAverage("MEH3450"),
      },
    ]
    return  allCourses
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
        program: course
      })
    }

    try {
      setLoading(true)
      await fetch("http://localhost:8081/admin/feedback-data-program", reqOptions)
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

  function getAverage(id) {
    var av1 = 0;
    var av2 = 0;
    var sum1 = 0;
    var sum2 = 0;
    var courseData = feedbacks.data.filter((course) => course.course_code === id);

    if (courseData.length === 0) {
      return 1;
    } else {
      for (var i = 0; i < courseData.length; i++) {

        for (var j = 0; j < courseData[i].unit_feedback.length; j++) {
          sum1 += courseData[i].unit_feedback[j];
        }
        for (var j = 0; j < 13; j++) {
          sum2 += courseData[i].general_feedback[j];
        }

      }

      av1 = sum1 / (courseData[0].unit_feedback.length * courseData.length);
      av2 = sum2 / (13 * courseData.length);

      return (av1 + av2) / 2;
    }
  }

  function getRating() {
    var data = [["Element", "Rating", { role: "style" }]]
    for (var i = 0; i < 7; i++) {
      data.push([`S${i + 1}`, getData()?.average, color[i]])
    }
    return data

  }

  return (
    <div className={styles.analyze_program_container}>
      <AdminLeft />
      <div className={styles.right}>
        <div className={styles.search_bar}>
          <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Program</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={course}
              onChange={handleChange}
              autoWidth
              label="Program"
            >

              <MenuItem value="B Tech">B Tech</MenuItem>
              <MenuItem value="M Tech">M Tech</MenuItem>
              <MenuItem value="BE">BE</MenuItem>

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
                  <div className={styles.bargraph_content}>
                    <div className={styles.bargraph_right}>
                      <Chart chartType="ColumnChart" width="500px" height="300px" data={getRating()} />
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

export default AnalyzeProgram