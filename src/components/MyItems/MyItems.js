import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const getItems = async () => {
            const email = user?.email;
            try {
                const {data} = await axios.get(`http://localhost:5000/myItem?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyItems(data)
            }
            catch(error) {
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getItems()
    }, [user]);

    const handleDeleteItem = id => {
        const agree = window.confirm('Are You Sure?');
        if(agree) {
            axios.delete(`http://localhost:5000/inventory/${id}`)
            .then(res => {
                const rest = myItems.filter(item => item._id !== id);
                setMyItems(rest);
            })
        }
    }

    return (
        <div className='container my-5'>
            <h2 className='text-center'>My Items</h2><div className='underline mb-5'></div>
            <Table striped bordered>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Qantity</th>
                    <th>Sold</th>
                    <th>Supplier</th>
                    <th>stock Update</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myItems.map(item => <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.title}</td>
                            <td><img className='table-img' src={item.img} alt={item.title} /></td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.sold}</td>
                            <td>{item.supplier}</td>
                            <td><button onClick={() => navigate(`/inventory/manage/${item._id}`)} className='btn btn-success'>manage</button></td>
                            <td><button onClick={() => handleDeleteItem(item._id)} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyItems;