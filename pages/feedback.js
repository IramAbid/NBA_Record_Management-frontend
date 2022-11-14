import styles from '../../styles/Feedback.module.css'
const feedback=()=>{
  return(
    <div>
      <div className={styles.form}>
        <div clssName={styles.feedinstruction}>
          Your feedback will be used to identify strengths and weaknesses and to initiate appropriate corrective measures accordingly. Please spare some time to give your candid opinion. Your responses and comments will be treated confidentially and anonymously by the Department.</div>
          <h1 className={styles.heading}> Winter Semester 2021-22</h1>
          <form action="">
            <div className={styles.basicdetails}>
            <div className={styles.input}>
            <label for="course">Course:</label>
            <input type="text" name="course" id="course" placeholder="Course"/>
            </div>
            <div className={styles.input}>
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" id="date" placeholder="date"/>
            </div></div>
            <div className={styles.basicdetails}>
            <div className={styles.input}>
            <label htmlFor="dapartment">Department:</label>
            <input type="text" name="department" id="department" placeholder="Department"/>
            </div>
            <div className={styles.input}>
            <label htmlFor="teacherincharge">Teacher Incharge:</label>
            <input type="text" name="teacherincharge" id="teacherincharge" placeholder="Teacher Incharge"/>
            </div>
            </div>
            <div className={styles.note}>Note: Give your feedback on a scale of 5(5 being the highest)</div>
            <div class={styles.cobox}>
              <h3 className={styles.heading3}>I. Indicate how well you feel this course provide you with an opportunity to learn the following course outcomes(CO): I have an ability to:</h3>
              <div class={styles.innerbox}>
                <div className={styles.innerboxdetail}>CO1. Describe computer and network security fundamental concepts and principles.</div>
              <div className={styles.radiobox}>
              <div className={styles.radio1}>
              
              <input type="radio" value="1" id="rate1"/>
              <label>1.</label>
              </div>
              <div className={styles.radio2}>
              
              <input type="radio" value="2" id="rate2"/>
             
              <label>2.</label>
              </div>
              <div className={styles.radio3}>
              
              <input type="radio" value="3" id="rate3"/>
              <label>3.</label>
              </div>
              <div className={styles.radio4}>
              
              <input type="radio" value="4" id="rate4"/>
               
              <label>4.</label>
              </div>
              <div className={styles.radio5}>
              
              <input type="radio" value="5" id="rate5"/>
             
              <label>5.</label>
              </div>
              </div>
            </div>
            <div class={styles.innerbox}>
            <div class={styles.innerboxdetail}>CO2. Describe computer and network security fundamental concepts and principles.</div>
              <div className={styles.radiobox}>
              <div className={styles.radio1}>
              
              <input type="radio" value="1" id="rate1"/>
              
              <label>1.</label>
              </div>
              <div className={styles.radio2}>
              
              <input type="radio" value="2" id="rate2"/>
               
              <label>2.</label>
              </div>
              <div className={styles.radio3}>
             
              <input type="radio" value="3" id="rate3"/>
              
              <label>3.</label>
              </div>
              <div className={styles.radio4}>
              
              <input type="radio" value="4" id="rate4"/>
               
              <label>4.</label>
              </div>
              <div className={styles.radio5}>
              
              <input type="radio" value="5" id="rate5"/>
              
              <label>5.</label>
              </div>
              </div>
            </div>
            <div className={styles.innerbox}>
            <div class={styles.innerboxdetail}>CO2. Describe computer and network security fundamental concepts and principles.</div>
              <div className={styles.radiobox}>
              <div className={styles.radio1}>
              
              <input type="radio" value="1" id="rate1"/>
             
              <label>1.</label>
              </div>
              <div className={styles.radio2}>
              
              <input type="radio" value="2" id="rate2"/>
              
              <label>2.</label>
              </div>
              <div className={styles.radio3}>
              
              <input type="radio" value="3" id="rate3"/>
              
              <label>3.</label>
              </div>
              <div className={styles.radio4}>
              
              <input type="radio" value="4" id="rate4"/>
               
              <label>4.</label>
              </div>
              <div className={styles.radio5}>
              
              <input type="radio" value="5" id="rate5"/>
              
                <label>5.</label>
              </div>
              </div>
            </div>
            <div className={styles.innerbox}>
            <div class={stylesinnerboxdetail}>CO3. Describe computer and network security fundamental concepts and principles.</div>
              <div className={styles.radiobox}>
              <div className={styles.radio1}>
              
              <input type="radio" value="1" id="rate1"/>
              
              
              <label>1.</label>
              </div>
              <div className={styles.radio2}>
              
              <input type="radio" value="2" id="rate2"/>
              
              <label>2.</label>
              </div>
              <div className={styles.radio3}>
              
              <input type="radio" value="3" id="rate3"/>
               
              <label>3.</label>
              </div>
              <div className={styles.radio4}>
              
              <input type="radio" value="4" id="rate4"/>
              
              <label>4.</label>
              </div>
              <div className={styles.radio5}>
             
              <input type="radio" value="5" id="rate5"/>
              
              <label>5.</label>
              </div>
              </div>
            </div>
            <div className={styles.innerbox}>
            <div class={styles.innerboxdetail}>CO4. Describe computer and network security fundamental concepts and principles.</div>
              <div className={styles.radiobox}>
              <div className={styles.radio1}>
              
              <input type="radio" value="1" id="rate1"/>
              
              <label>1.</label>
              </div>
              <div className={styles.radio2}>
              
              <input type="radio" value="2" id="rate2"/>
              
              <label>2.</label>
              </div>
              <div className={styles.radio3}>
              
              <input type="radio" value="3" id="rate3"/>
              
              <label>3.</label>
              </div>
              <div className={styles.radio4}>
              
              <input type="radio" value="4" id="rate4"/>
              
              <label>4.</label>
              </div>
              <div className={styles.radio5}>
              
              <input type="radio" value="5" id="rate5"/>
               
              <label>5.</label>
              </div>
              </div>
            </div>
            </div>
            <div className={styles.box2}>
              <h3 className={styles.heading3}>II. Teaching, Learing and Evaluation</h3>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>1. the teacher completes the entire syllabus in time.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

              </div>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>2. The teacher discusses topics and interacts in the class.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

                
              </div>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>3. The teacher communicates clearly and inspires me by his teaching.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

                
              </div>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>4. The teacher is punctual in the class.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

                
              </div>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>5. The teacher comes well prepared in the class.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

              </div>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>6. The teacher encourages participants and discussion in the class.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

                
              </div>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>7. The teacher uses modern teaching aids, handouts, suitable references, power point presentation, web resources etc.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

                
              </div>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>8. The teacher's attitude towards the students is friendly and helpful.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

                
              </div>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>9. The teacher is available and accessible in the Department.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

                
              </div>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>10. The evaluation process is fair and unbiased.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

                
              </div>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>11. Regular and timely feedback is given to our performance.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

                
              </div>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>12. Periodical assessments are conducted as per schedule.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

                
              </div>
              <div className={styles.innerbox}>
                <div className={styles.innerboxdetail}>13. I have learnt and understood the subject materail/s in this course.</div>
                <div className={styles.radiobox}>
                  <div className={styles.radio}>
                    <input type="radio" value="1" id="rate1"/>
                    <label>1.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="2" id="rate2"/>
                    <label>2.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="3" id="rate3"/>
                    <label>3.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="4" id="rate4"/>
                    <label>4.</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" value="5" id="rate5"/>
                    <label>5.</label>
                  </div>
                </div>

                
              </div>
            </div>
            <div className={styles.box3}>
              <label for="additionalcomments">Additional Comments</label>
              <textarea id="additiionalcomments" name="additionalcomments"></textarea>
              
            </div>
            <button type="submit" className={styles.btn}>Submit</button>
           
            

          </form>
        
      </div>
    </div>
  )
}

