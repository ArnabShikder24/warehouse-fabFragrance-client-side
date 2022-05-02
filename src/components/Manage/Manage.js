import React from 'react';
import {useParams} from 'react-router-dom';

const Manage = () => {
    const {manageId} = useParams();
    return (
        <div className='container my-5 pb-5'>
            <h2>Manage this: {manageId}</h2>
        </div>
    );
};

export default Manage;