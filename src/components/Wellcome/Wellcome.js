import React from 'react';
import './Wellcome.css';

const Wellcome = () => {
    return (
        <div className='wellcome'>
            <div>
                <span>Welcome to our Fab Fragrance</span>
            </div>
            <div>
                <span>English (USD)</span>
                <span className='part'>|</span>
                <span>SUBSCRIBE</span>
            </div>
        </div>
    );
};

export default Wellcome;