import React from 'react'

import './Auth.css';

const Login = () =>{
    return (
        <React.Fragment>
            <div className="auth-wrapper">
                <section className="content-box">
                    <div className="container">
                    heloo1
                    <div className="form-wrapper">
                        <form>
                            <div className="input-control">
                            <label>Your Email</label>
                            <input type="email" placeholder="Enter your email" />
                            </div>
                            <div className="input-control">
                            <label>Your Password</label>
                            <input type="email" placeholder="Enter your email" />
                            </div>
                        </form>
                    </div>
                    </div>
                </section>
                <section className="plain-box">
helo 2
                </section>
            </div>
        </React.Fragment>
    )
}

export default Login;