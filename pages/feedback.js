import styles from "../styles/Feedback.module.css"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Basicdetailsfeedback from "../component/Basicdetailsfeedback"
import COfeedback from "../component/cofeedback"
import Commonfeedback from "../component/commonfeedback"
const Feedback = () => {
  return(
      <div>
        <Navbar/>
        
        <Basicdetailsfeedback/>
        <COfeedback/>
        <Commonfeedback/>
        <Footer/>
      </div>
  )
}
export default Feedback