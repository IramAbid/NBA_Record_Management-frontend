import { useRouter } from "next/router"
import { useUserContext } from "../../../../context/UserContext"
import styles from "../../../../styles/feedbackForm1.module.css"
import Rating from '@mui/material/Rating';
import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import { getCourseByCode } from "../../../../constants/courses";
import { useEffect } from "react";
import notie from 'notie'
import Head from "next/head";

// const labels = {
//     1: '1',
//     2: '2',
//     3: '3',
//     4: '4',
//     5: '5',
// };


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

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


const AddFeedback = () => {

    const router = useRouter()
    const { code } = router.query
    const course = getCourseByCode(code)
    const { user } = useUserContext()
    const [rating, setRating] = useState(new Array(13).fill(1))
    const [cos, setCos] = useState(new Array(getCourseByCode(code)?.COS.length).fill(1))
    const [hover, setHover] = useState(-1);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [comment, setComment] = useState("")
    const [sanitisedRating, setSanitisedRating] = useState(new Array(13).fill(5))
    const [sanitisedCOS, setSanitisedCOS] = useState(new Array(getCourseByCode(code)?.COS.length).fill(5))



    useEffect(() => {
        console.log("rating", sanitisedRating)
        console.log("COS", sanitisedCOS)

    }, [sanitisedRating, rating])

    const SubmitForm = (e) => {
        e.preventDefault()
        const body = {
            course_code: code,
            course_title: course.course_title,
            enrollment_no: user?.user.enrollment_no,
            semester: user?.user.semester,
            program: user?.user.program,
            branch: course.department,
            unit_feedback: sanitisedCOS,
            general_feedback: sanitisedRating,
            additional_comment: comment,

        }
        var reqOptions = {
            method: "POST",
            body: JSON.stringify(body)
        }



        setLoading(true)
        fetch("http://localhost:8081/student/feedback/add", reqOptions)
            .then((response) => response.json())
            .then((response) => {
                if (response.error) {
                    setError("Enable to submit feedback");
                    notie.alert({
                        type: 'success',
                        text: "Feedback submitted successfully",
                        position: "top",
                    })
                    setLoading(false)
                } else {
                    setLoading(false)
                    router.push("/student/dashboard")
                    notie.alert({
                        type: 'success',
                        text: "Feedback submitted successfully",
                        position: "top",
                    })
                }
            })

    }


    return (
        <div className={styles.container}>
            <Head>
                <link rel="stylesheet" type="text/css" href="https://unpkg.com/notie/dist/notie.min.css" />
            </Head>
            <div className={styles.top}>
                <p>Student Feedback Form</p>
                <div className={styles.info}>
                    <p ><strong>Course Code:</strong> {code}</p>
                    <p><strong>Course Title:</strong> {course?.course_title}</p>
                </div>
                <div className={styles.info}>
                    <p><strong>Department:</strong> {course?.department}</p>
                    <p><strong>Semester: </strong> {user?.user.semester}</p>
                </div>
            </div>
            <form onSubmit={SubmitForm} className={styles.form_container}>
                <div className={styles.header}>
                    <div className={styles.header_mid}>
                        <p><strong>Questions</strong></p>
                    </div>
                    <div className={styles.header_right}>
                        <p><strong>Ratings</strong></p>
                    </div>

                </div>
                <div className={styles.section}>
                    <div className={styles.section_left}>
                        <p><strong>Indicate how well you feel this Course provides you with an opportunity to learn the following Course
                            Outcomes (COs):I have an ability to:</strong></p>
                    </div>
                    <div className={styles.section_right}>
                        <p><strong>1</strong></p>
                        <p><strong>2</strong></p>
                        <p><strong>3</strong></p>
                        <p><strong>4</strong></p>
                        <p><strong>5</strong></p>
                    </div>

                </div>

                {course?.COS.map((co, index) => {
                    return (
                        <>
                            <div className={styles.component} key={index}>
                                <div className={styles.left}>
                                    <p>CO {index + 1} : {co}</p>
                                </div>
                                <div className={styles.right}>
                                    <Rating
                                        required
                                        // getLabelText={getLabelText}
                                        name="hover-feedback controlled"
                                        value={cos[index]}
                                        onChange={(event, newValue) => {
                                            setCos(prev => {
                                                prev[index] = newValue
                                                return prev
                                            });
                                            console.log("index", index)
                                            setSanitisedCOS((prev) => {
                                                prev[index] = newValue
                                                return prev
                                            })

                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                </div>
                            </div>
                        </>
                    )
                })}
                <div className={styles.section}>
                    <div className={styles.section_left}>
                        <p><strong>Teaching, Learning and Evaluation::</strong></p>
                    </div>
                    <div className={styles.section_right}>

                    </div>

                </div>
                {GeneralRating?.map((co, index) => {
                    return (
                        <>
                            <div className={styles.component} key={index}>
                                <div className={styles.left}>
                                    <p>{index + 1} . {co} </p>
                                </div>
                                <div className={styles.right}>
                                    <Rating
                                        required
                                        name="hover-feedback controlled"
                                        value={rating[index]}
                                        onChange={(event, newValue) => {
                                            setRating(prev => {
                                                prev[index] = newValue
                                                return prev
                                            });
                                            setSanitisedRating((prev) => {
                                                prev[index] = newValue
                                                return prev
                                            })

                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                </div>
                            </div>
                        </>
                    )
                })}
                <div className={styles.additional_comment}>
                    <div className={styles.comment_left}>
                        <p>Additional Comments:</p>
                    </div>
                    <div className={styles.comment_right}>
                        <textarea name="addtionalComment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Additional Comment"></textarea>
                    </div>
                </div>
                <div className={styles.submit}>
                    <input type="submit" value={loading ? "Submitting..." : "Submit"} />
                </div>
            </form>

        </div>
    )
}

export default AddFeedback