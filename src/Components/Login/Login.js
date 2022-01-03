import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import "./Login.css"

const Login = () => {
    // const {signInUsingGoogle} = useFirebase();
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home"

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div className='login-form'>
            <div>
                <h1 className="login-header">Login</h1>
                <form onSubmit="">
                    <input className='email' type="email" name="Email" id="" placeholder='Enter your email' />
                    <br />
                    <input className='password' type="password" name="password" id="" placeholder='enter your password' />
                    <br />
                    <input className='submit' type="submit" value="submit" />
                </form>
                <p className='p-tag'>New user? <Link to="/register" className='login-link'>Register</Link></p>

                <div className='or'>or</div>
                <button onClick={handleGoogleLogIn} className='signin-btn'><i class="fab fa-google"></i>Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;