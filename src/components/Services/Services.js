import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    return (
        <div className='text-center services py-4 my-5'>
            <Container>
                <Row>
                    <Col md='4'>
                        <h4>EU FREE DELIVERY</h4>
                        <p>Free Delivery on all order from EU with price more than $90.00</p>
                    </Col>
                    <Col md='4'>
                        <h4>MONEY GUARANTEE</h4>
                        <p>30 Days money back guarantee no question asked!</p>
                    </Col>
                    <Col md='4'>
                        <h4>ONLINE SUPPORT 24/7</h4>
                        <p>We're here to support to you. Let's shopping now!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;