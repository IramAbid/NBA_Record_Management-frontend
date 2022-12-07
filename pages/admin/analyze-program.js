import styles from "../../styles/dashboard.module.css"
import AdminLeft from "../../component/AdminLeft"
import { useUserContext } from "../../context/UserContext"
import { useEffect,useState } from "react"
import { useRouter } from "next/router"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const AnalyzeProgram = () => {
  const router = useRouter()
  const { admin } = useUserContext()

  const [course, setCourse] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [feedbacks, setFeedbacks] = useState(null)
  const [counter, setCounter] = useState(null)

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

              <MenuItem  value="B Tech">B Tech</MenuItem>
              <MenuItem  value="M Tech">M Tech</MenuItem>
              <MenuItem  value="BE">BE</MenuItem>

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
                  {JSON.stringify(feedbacks)}
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