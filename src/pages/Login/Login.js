import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login text-center my-5'>
            <div>
                <h2>Login</h2><div className='underline mb-4'></div>
                <form>
                    <input className='w-25 mb-3 p-2' type="email" name='email' placeholder='Email' required/><br />
                    <input className='w-25 p-2 mb-3' type="password" name='password' placeholder='Password' required/><br />
                    <input className='w-25 p-2' type="submit" value="Login" />
                </form>
                <div className='or'>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <button className='social-btn'><span>Login With Google</span></button>
            </div>
        </div>
    );
};

export default Login;