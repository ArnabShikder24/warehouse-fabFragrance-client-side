import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {useNavigate, useParams} from 'react-router-dom';
import useSingelItem from '../../hooks/useSingelItem';
import './Manage.css';

const Manage = () => {
    const {manageId} = useParams();
    const [item] = useSingelItem(manageId);
    const {_id, title, discription, price, quantity, supplier, img, sold} = item;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/manage-inventory');
    }

    const delivered = id => {
        const newQuantity = quantity - 1;
        axios.put(`https://damp-mesa-95348.herokuapp.com/inventory/${id}`, {
            quantity: newQuantity
        })
    }

    const reStock = e => {
        e.preventDefault();
        const stockUpdate = e.target.update.value;
        const reStock = parseInt(quantity) + parseInt(stockUpdate);
        axios.put(`https://damp-mesa-95348.herokuapp.com/restock/${_id}`, {
            quantity: reStock
        })
        e.target.reset();
    }
    return (
        <div className='container my-5 pb-5'>
            <div className='manage'>
                <Row>
                    <Col md='6'>
                        <img src={img} alt="" />
                    </Col>
                    <Col className='manage-info' md='6'>
                        <h4>product Id: {manageId}</h4>
                        <h5>Product Name: {title}</h5>
                        <p>{discription}</p>
                        <h5>Price: ${price}</h5>
                        <Row>
                            <Col md='6'>
                                <h5>Quantity: {quantity}</h5>
                            </Col>
                            <Col md='6'>
                                <form onSubmit={reStock} className='reStock'>
                                    <input className='px-1' type="number" name='update' placeholder='Restock' required/>
                                    <input type="submit" value="Restock" />
                                </form>
                            </Col>
                        </Row>
                        <h6>Sold: {sold}</h6>
                        <h6>Supplier Name: {supplier}</h6>
                        <button onClick={() => delivered(_id)} className='btn-update mt-5 me-5'><span>delivered</span></button>
                        <button onClick={handleNavigate} className='btn-update mt-5'><span>Manage Inventories</span></button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Manage;