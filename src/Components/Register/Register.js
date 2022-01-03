import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"

const Register = () => {
    return (
        <div className='register-form'>
            <div>
                <h1 className="login-header">Register</h1>
                <form onSubmit="">
                    <input className='email' type="email" name="email" id="" placeholder='enter email' />
                    <br />
                    <input className='password' type="password" name="password" id="" placeholder='enter password' />
                    <br />
                    <input className='password' type="password" name="password" id="" placeholder='Re-enter password' />
                    <br />
                    <input className='submit' type="submit" value="submit" />
                </form>
                <p>Already register? <Link to="/login" className='login-link'>login</Link></p>
            </div>
        </div>
    );
};

export default Register;