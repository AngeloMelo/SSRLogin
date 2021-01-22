import styles from '../components/Login.module.css'
import { useRef, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const LoginPage = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const router = useRouter()

    const sendLogin = useCallback((e)  => {
        
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email: emailRef.current.value, password: passwordRef.current.value})
        }).then((resp)=>{
            
            if (resp.ok) router.push('/')
        })
    },[])

    useEffect(() => {
        router.prefetch('/')
    }, [])

    return (

        <div>
            <Head>
                <title>Server Side Rendering Authentication with JWT and Next.js</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.css" />
            </Head>
            <div className="container">
                <div className={styles.signin}>
                    <center><h1 className="h3 mb-3 fw-normal">Please sign in</h1></center>
                    <label className="visually-hidden">Email address</label>
                    <input type="email" id="inputEmail" ref={emailRef} className="form-control" placeholder="Email address" required/>
                    <label className="visually-hidden">Password</label>
                    <input type="password" id="inputPassword" ref={passwordRef} className="form-control" placeholder="Password" required/>
                    <div className="checkbox mb-3">
                        <label></label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="button" onClick={sendLogin}>Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage