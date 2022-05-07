import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/inventory', data)
        .then(res => {
            console.log(res.data)
            toast('Product Add Successful')
        })
    };
    
    return (
        <div className='container text-center my-5'>
            <h2 className='text-center'>Add New Item</h2><div className='underline mb-5'></div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input className='w-50 mb-4 add-item' placeholder='Name of Product' {...register("title")} required/> <br />
            <textarea className='w-50 mb-4 text-area' placeholder='Description' {...register("discription")} required/><br />
            <input className='w-50 mb-4 add-item' type='email' value={user?.email} placeholder='Email' {...register("email")} required readOnly/> <br />
            <input className='w-50 mb-4 add-item' placeholder='Image Address Link' {...register("img")} required/><br />
            <input className='w-50 mb-4 add-item' type='number' placeholder='Price' {...register("price")} required/><br />
            <input className='w-50 mb-4 add-item' type='number' placeholder='Quantity' {...register("quantity")} required/><br />
            <input className='w-50 mb-4 add-item' type='number' placeholder='Sold' {...register("sold")} required/><br />
            <input className='w-50 mb-4 add-item' placeholder='Supplier Name' {...register("supplier")} required/><br />
            <input className='py-2 px-2' type="submit" value='Add New Item'/>
            </form>
        </div>
    );
};

export default AddItem;