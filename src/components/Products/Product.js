import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = (props) => {
    console.log(props.course);
    const { id, name, teacher, price } = props.course;
    return (
        <div className="product">
            <h3>Course No: {id}</h3 >
            <h1>{name}</h1>
            <h5>by: {teacher}</h5>
            <h5>${price}</h5>
            <>
            <Button
                variant="success" onClick={() => props.handleAddCourse(props.course)}>
                <FontAwesomeIcon icon={faShoppingCart} /> Enroll Now
                </Button>
                </>
        </div>
    );
};

export default Product;