import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';

const Banner = () => {
    return (
        <Container className='my-3'>
        <div className='banner'>
            <div>
            <Carousel fade variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100 rounded-3"
                src={slider1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Spring Summer Collection</h3>
                <p>Sale up to 40% off!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded-3"
                src={slider2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Up to 25% Off order now</h3>
                <p>Take A perfume</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded-3"
                src={slider3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3> A range of perfume</h3>
                <p>Stelina Best Collection</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>
            <div className='side-grid'>
                <div className='side-banner'>
                <Carousel variant="dark">
                    <Carousel.Item>
                    <img
                    className="d-block w-100 rounded-3"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Pick Your Items</h3>
                    <p>Sale up to 30% off!</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div className='sidemargin side-banner'>
                <Carousel variant="dark">
                    <Carousel.Item>
                    <img
                    className="d-block w-100 rounded-3"
                    src={banner2}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Best Of</h3>
                    <h3>Products</h3>
                    <p>New Products.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div> 
        </div>
        </Container>
    );
};

export default Banner;