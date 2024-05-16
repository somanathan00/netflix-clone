import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signUp } from '../../firebase.js'
import nerflix_spinner from '../../assets/netflix_spinner.gif'
const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signState, setSignState] = useState("Sign In")
    const [loading, setLoading] = useState(false)
    const userAuth = async (event) => {
        setLoading(true)
        event.preventDefault()
        if (signState === "Sign In") {
            await login(email, password)
        } else {
            await signUp(name, email, password)
        }
        setLoading(false)
    }
    return (
        loading ? <div className="login-spinner">
            <img src={nerflix_spinner} alt="" />
        </div> :
            <div className='login'>
                <img src={logo} className='login-logo' alt="" />
                <div className="login-form">
                    <h1>{signState}</h1>
                    <form action="">
                        {signState === "Sign Up" ? <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='your name' /> : <></>}

                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='email' />
                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='password' />
                        <button onClick={userAuth} type='submit'>{signState}</button>
                        <div className="form-help">
                            <div className="remember">
                                <input type="checkbox" />
                                <label htmlFor="">Remember Me</label>
                            </div>
                            <p>Need Help?</p>
                        </div>
                    </form>
                    <div className="form-switch">
                        {signState === "Sign In"
                            ? <p>New to Netflix? <span onClick={() => { setSignState("Sign Up") }}>Sign Up Now</span></p>
                            : <p>Already have account? <span onClick={() => { setSignState("Sign In") }}>Sign In Now</span></p>
                        }
                    </div>
                </div>
            </div>
    )
}

export default Login