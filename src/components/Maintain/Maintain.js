import React from 'react';
import { Table } from 'react-bootstrap';
import useInventory from '../../hooks/useInventory';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Maintain.css';

const Maintain = e => {
    const [items, setItems] = useInventory();
    const navigate = useNavigate();

    const handleDeleteItem = id => {
        const agree = window.confirm('Are You Sure?');
        if(agree) {
            axios.delete(`http://localhost:5000/inventory/${id}`)
            .then(res => {
                const rest = items.filter(item => item._id !== id);
                setItems(rest);
            })
        }
    }
    return (
        <div className='container pb-5 my-5'>
            <h2 className='text-center'>Manage Inventory</h2><div className='underline mb-5'></div>
            <h4 className='mb-5'>Add New Product Here <button onClick={() => navigate('/add-item')} className='btn-update'><span>Add New Item</span></button></h4>
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
                    <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.title}</td>
                            <td><img className='table-img' src={item.img} alt={item.title} /></td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.sold}</td>
                            <td>{item.supplier}</td>
                            <td><button onClick={() => handleDeleteItem(item._id)} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Maintain;