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
import Comment from "../../component/Comment"

const ReadFeedback = () => {
  const router = useRouter()
  const { admin } = useUserContext()
  const [course, setCourse] = useState('')
  const [loading, setLoading] = useState(false)
  const [comment, setComment] = useState(null)
  const [counter, setCounter]= useState(false)

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
      await fetch("http://localhost:8081/admin/read-comments", reqOptions)
        .then((response) => response.json())
        .then((response) => {
          setComment(response.data)
          setLoading(false)
          setCounter(true)
        })
    } catch (err) {
      setErr("Unable to fetch data, please try again later")
      setLoading(false)
    }


  }


  return (
    <div className={styles.read_feedback_container}>
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
        <div className={styles.comments}>
          {loading ? <><h1>Loading Data ...</h1></> :
            <>

              {comment ?
                <>
                  <Comment comments={comment} />
                </> :
                <>
                  {counter && <h2>No data found</h2>}
                </>}
            </>}
        </div>
      </div>
    </div>
  )
}

export default ReadFeedback