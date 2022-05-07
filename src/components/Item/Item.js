import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({item}) => {
    const {_id, title, discription, price, quantity, supplier, img} = item;
    const navigate = useNavigate();
    const handleUpadate = () => {
        navigate(`/inventory/manage/${_id}`)
    }
    return (
        <div className='item-card'>
            <img src={img} alt="" />
            <div className='item-info p-2'>
                <h3>{title}</h3>
                <p>{discription.slice(0, 150)}...</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <h6>Supplier Name: {supplier}</h6>
                <button onClick={handleUpadate} className='btn-update my-2'><span>stock update</span></button>
            </div>
        </div>
    );
};

export default Item;