import React from 'react';
import './Inventory.css'
import useInventory from '../../hooks/useInventory';
import Item from '../Item/Item';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
    const [items] = useInventory();
    const navigate = useNavigate();

    const goNavigate = () => {
        navigate('/manage-inventory');
    }
    return (
        <div className='container my-5 py-4'>
            <h2 className='text-center'>Inventory</h2><div className='underline'></div>
            <div className='mt-5'>
                <div className='d-flex justify-content-center'>
                    <div className='items-grid'>
                        {
                            items.slice(0, 6).map(item => <Item 
                                key={item._id}
                                item={item}
                            ></Item>)
                        }
                    </div>
                </div>
                <div className='text-center'>
                <button onClick={goNavigate} className='btn-update mt-5'><span>Manage Inventories</span></button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;