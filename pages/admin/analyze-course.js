import styles from "../../styles/dashboard.module.css"
import AdminLeft from "../../component/AdminLeft"
import { useUserContext } from "../../context/UserContext"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getTitleList } from "../../constants/courses"
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Head from "next/head"
import { Chart } from "react-google-charts";




const AnalyzeCourse = () => {
  const router = useRouter()
  const { admin } = useUserContext()

  const [course, setCourse] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [feedbacks, setFeedbacks] = useState(null)
  const [counter, setCounter] = useState(null)

  const color= ["#b87333", "silver", "gold", "#e5e4e2", 'blue', 'red', 'green', 'yellow', 'orange', 'purple']
  const data = getData();

  function getData(){
    var data= [["Element", "Rating", { role: "style" }]]
    for(var i=0;i<feedbacks?.data[0].unit_feedback.length;i++){
      data.push([`CO${i+1}`, averageCO(i), color[i]])
    }
    return data
  }

  function averageCO(index){
    var sum=0;
    for(var i=0;i<feedbacks?.data.length;i++){
      sum+=feedbacks?.data[i].unit_feedback[index]
    }
    return sum/feedbacks?.data.length
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
        <div className={styles.data_table}>
          {loading ? <div className={styles.loading}><h1>Loadding Data ...</h1></div> :
            <>
              {feedbacks?.data ?
                <>
                  <Chart chartType="ColumnChart" width="700px" height="500px" data={data} />
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