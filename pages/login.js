import styles from '../styles/Login.module.css'
const Login=()=>{
    return (
        <div>
      <div className={styles.login} id="studentlogin">
        <h2 className={styles.heading} >Students Login</h2>
        <hr/><hr/>
        <form action="">
          <div className={styles.input}>
            <label for="enrollmentnumber">Enrollment Number</label><br/>
            <input type="text" name="enrollmentnumber" id="enrollmentnumber" placeholder="Enrollment Number"/>
          </div>
          <div className={styles.input}>
            <label for="password">Password</label><br/>
            <input type="text" name="password" id="password1" placeholder="Password" />
          </div>
          <button type="submit" className={styles.btn}>Login</button>
          <hr/>
        </form>
        <div className={styles.containfooter}>
        <ul className={styles.list}>
          <li><a href="#">Forget Password</a></li>
          <li><a href="#">Register</a></li> 
        </ul>

      </div>
      </div>
    
    <div className={styles.login} id="teacherslogin">
    <h2 className={styles.heading} >Teacher Login</h2>
    <hr/><hr/>
    <form action="">
      <div className={styles.input}>
        <label for="userid">User Id</label><br/>
        <input type="text" name="userid" id="useridt" placeholder="User Id"/>
      </div>
      <div className={styles.input}>
        <label for="password">Password</label><br/>
        <input type="text" name="password" id="password2" placeholder="Password" />
      </div>
      <button type="submit" className={styles.btn}>Login</button>
      <hr/>
    </form>
    <div className={styles.containfooter}>
    <ul className={styles.list}>
      <li><a href="#">Forget Password</a></li>
      <li><a href="#">Register</a></li> 
    </ul>

  </div>
  </div>
  
    <div className={styles.login} id="adminlogin">
      <h2 className={styles.heading} >Admin Login</h2>
      <hr/><hr/>
      <form action="">
        <div className={styles.input}>
          <label for="userid">User Id</label><br/>
          <input type="text" name="userid" id="userida" placeholder="User Id"/>
        </div>
        <div className={styles.input}>
          <label for="password">Password</label><br/>
          <input type="text" name="password" id="password3" placeholder="Password" />
        </div>
        <button type="submit" className={styles.btn}>Login</button>
        <hr/>
      </form>
      <div className={styles.containfooter}>
      <ul className={styles.list}>
        <li><a href="#">Forget Password</a></li>
        <li><a href="#">Register</a></li> 
      </ul>

    </div>
    </div>
  </div>
    )
}
export default Login