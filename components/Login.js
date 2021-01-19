import styles  from './Login.module.css'

const Login = () => {
    return (
        <div className={styles.signin}>
            <center><h1 className="h3 mb-3 fw-normal">Please sign in</h1></center>
            <label for="inputEmail" className="visually-hidden">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
            <label className="visually-hidden">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            <div className="checkbox mb-3">
            <label>
                
            </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
        </div>
    )
}

export default Login