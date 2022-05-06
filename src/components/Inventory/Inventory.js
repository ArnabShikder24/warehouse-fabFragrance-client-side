import React from 'react';
import './Inventory.css'
import useInventory from '../../hooks/useInventory';
import Item from '../Item/Item';

const Inventory = () => {
    const [items] = useInventory();
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
            </div>
        </div>
    );
};

export default Inventory;