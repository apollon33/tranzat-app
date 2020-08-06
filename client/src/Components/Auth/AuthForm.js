import React from 'react';

import './AuthForm.css'

const AuthForm = () => {
    return (
        <div className="auth-form-wrapper">
            <form className="auth-form">
                <label>Your email address</label>
                <input type="email" placeholder="enter your email" />
            </form>
        </div>
    )
    
}

export default AuthForm;