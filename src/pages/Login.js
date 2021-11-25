import React from 'react'

const Login = () => {


    const submitHandler=(e)=>{
        e.preventDefault();
    }
    return (
        <section className='login'>
            <h1>Login into HeyWith Account</h1>
            <h2>Don't have an account? <span style={{color:'#150af0'}}>Create here</span></h2>

            <article className="login-center">
                <form action="#" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email">Email/Username</label>
                        <input  className='block input-login-style' type="text" id='email' placeholder='jenny@gmail.com'/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input  className='block input-login-style' type="text" id='password' placeholder='*********'/>
                    </div>
                    <div>
                        <input id='remember-me' type="checkbox"/>
                        <label style={{marginLeft:'0.5rem' ,color:'#6b7280'}} htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type='submit'>Login</button>
                    <p>Forgot Your Password?</p>
                </form>

            </article>
        </section>
    )
}

export default Login
