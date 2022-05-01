import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../components/Loading/Loading';

const SignUp = () => {
    const [ createUserWithEmailAndPassword, user, loading, error ] = useCreateUserWithEmailAndPassword(auth);
    const [match, setMatch] = useState('')

    // if(user) {
    //     console.log(user)
    // }

    const signUphandle = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm = e.target.confirm.value;
        if(password !== confirm) {
            setMatch('Password Not Match! Please try again');
            return
        }
        setMatch('');
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='login text-center my-5'>
            <div>
                <h2>Sign Up</h2><div className='underline mb-4'></div>
                <form onSubmit={signUphandle}>
                    <input className='w-25 mb-3 p-2' type="text" name='name' placeholder='Name' required/><br />
                    <input className='w-25 mb-3 p-2' type="email" name='email' placeholder='Email' required/><br />
                    <input className='w-25 p-2 mb-3' type="password" name='password' placeholder='Password' required/><br />
                    <input className='w-25 p-2 mb-2' type="password" name='confirm' placeholder='Confirm Password' required/><br />
                    <p className='text-danger'>{match}</p>
                    <p className='text-danger'>{error && error.message}</p>
                    <p>{loading && 'Loading...'}</p>
                    <p className='text-success'>{user && 'Signup Successfull'}</p>
                    <input className='w-25 p-2' type="submit" value="Sign Up" />
                </form>
                <div className='or'>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <button className='social-btn'><span>SignUp With Google</span></button>
            </div>
        </div>
    );
};

export default SignUp;