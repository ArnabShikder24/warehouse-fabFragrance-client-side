import React from 'react';
import './Perfect.css';

const Perfect = () => {
    return (
        <div className='container my-5 py-5 perfect'>
            <div className='grid-perfect'>
                <div className='w-75  perfect-margin'>
                    <img src='https://i.ibb.co/XLzmpW4/slider-blog-thumb-4.jpg' alt="pioki1" />
                </div>
                <div>
                    <p>The Perfect Match</p>
                    <h2>CALVIN KLEIN <br /> ETERNITY <br /> FRAGRANCES</h2>
                    <p>Eternity for Calvin Klein for men and women was created to celebrate the eternal elements of love and family that are found in a marriage. Launched in the early 90s, this fragrance continues to be a top seller from the CK collection. The long-lasting fragrance makes for a perfect refreshing every day scent that can be worn all year around.</p>
                </div>
            </div>

            <div className='grid-perfect'>
                <div>
                    <p>great FRAGRANCES</p>
                    <h2>CALVIN KLEIN <br /> ETERNITY <br /> FRAGRANCES</h2>
                    <p>Eternity for Calvin Klein for men and women was created to celebrate the eternal elements of love and family that are found in a marriage. Launched in the early 90s, this fragrance continues to be a top seller from the CK collection. The long-lasting fragrance makes for a perfect refreshing every day scent that can be worn all year around.</p>
                </div>
                <div className='w-75 perfect-margin'>
                    <img src='https://i.ibb.co/JzXhDk2/slider-blog-thumb-2.jpg' alt="pioki1" />
                </div>
            </div>
        </div>
    );
};

export default Perfect;