import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='container my-5 py-5'>
            <div className='about'>
                <div className='about-img'>
                    <img src="https://i.ibb.co/bFxhbr3/store.jpg" alt="store img" />
                </div>
                <div>
                    <h2>WELCOME TO <span className='text-danger'>Fab Fragrance</span></h2>
                    <p>Fab Fragrance provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete account of the system, and expound the actual teachings of the eat explorer.</p>

                    <h4 className='mt-3'>WE START AT 2022</h4>
                    <p>This is the best serivces. you can buy this product of stock.</p>
                </div>
            </div>
        </div>
    );
};

export default About;