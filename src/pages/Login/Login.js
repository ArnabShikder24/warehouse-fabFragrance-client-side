import axios from 'axios';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [ signInWithEmailAndPassword ,user, loading, error ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [resetEmail, setResetEmail] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if (user) {
       console.log(user);
    }
    if(userG) {
        navigate(from, {replace: true});
    }

    //login user with email password
    const logInHandle = async e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('http://localhost:5000/getToken', {email})
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, {replace: true});
    }

    //google signin
    const handleGoogleLogin = () => {
        signInWithGoogle()
    }

    //reset password and tostify
    const handleResetPassword = async () => {
        if(resetEmail) {
            toast('Sent email');
        }
        else {
            toast('Give me your Email')
            return;
        }
        await sendPasswordResetEmail(resetEmail);
    }
    return (
        <div className='login text-center my-5'>
            <div>
                <h2>Login</h2><div className='underline mb-4'></div>
                <form onSubmit={logInHandle}>
                    <input onBlur={e => setResetEmail(e.target.value)} className='custom-width mb-3 p-2' type="email" name='email' placeholder='Email' required/><br />
                    <input className='custom-width p-2 mb-3' type="password" name='password' placeholder='Password' required/><br />
                    <p className='text-danger'>{error && error.message}</p>
                    <p className='text-danger'>{errorG && errorG.message}</p>
                    <p>{loading && 'Loading...'}</p>
                    <p>{loadingG && 'Loading...'}</p>
                    <input className='w-25 p-2' type="submit" value="Login" />
                </form>
                <p className='my-2'>Forget Password? <button onClick={handleResetPassword} className='btn btn-link text-decoration-none'>Reset Password</button></p>
                <p className='m-0'>New in here? <Link className='text-decoration-none' to='/signup'>Create Account</Link></p>
                <div className='or'>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <button onClick={handleGoogleLogin} className='social-btn'><span>Login With Google</span></button>
            </div>
        </div>
    );
};

export default Login;