import React from 'react';
import './Item.css'

const Item = ({item}) => {
    const {title, discription, price, quantity, supplier, img} = item;
    return (
        <div className='item-card'>
            <img src={img} alt="" />
            <div className='item-info p-2'>
                <h3>{title}</h3>
                <p>{discription}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <h6>Supplier Name: {supplier}</h6>
                <button className='btn-update my-2'><span>stock update</span></button>
            </div>
        </div>
    );
};

export default Item;