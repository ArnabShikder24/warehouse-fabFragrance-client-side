import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import useSingelItem from '../../hooks/useSingelItem';
import './Manage.css';

const Manage = () => {
    const {manageId} = useParams();
    const [item] = useSingelItem(manageId);
    const { title, discription, price, quantity, supplier, img, sold} = item;
    return (
        <div className='container my-5 pb-5'>
            <div className='manage'>
                <Row>
                    <Col>
                        <img src={img} alt="" />
                    </Col>
                    <Col className='manage-info'>
                        <h4>product Id: {manageId}</h4>
                        <h5>Product Name: {title}</h5>
                        <p>{discription}</p>
                        <h5>Price: ${price}</h5>
                        <Row>
                            <Col>
                                <h5>Quantity: {quantity}</h5>
                            </Col>
                            <Col>
                                <form className='reStock'>
                                    <input className='px-1' type="number" name='Update' placeholder='Restock'/>
                                    <input type="submit" value="Restock" />
                                </form>
                            </Col>
                        </Row>
                        <h6>Sold: {sold}</h6>
                        <h6>Supplier Name: {supplier}</h6>
                        <button className='btn-update mt-5 me-5'><span>delivered</span></button>
                        <button className='btn-update mt-5'><span>Manage Inventories</span></button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Manage;