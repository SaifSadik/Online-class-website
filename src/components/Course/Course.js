import React, { useState } from 'react';
import data from '../../data/data.json';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Course.css';

const Course = () => {
    const [course, setCourse] = useState(data);

    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    
    

    return (
        <div className="shop-container">
            <div className="course-container">
                {
                    course.map(product => <Product 
                        handleAddCourse = {handleAddCourse}
                        course={product}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>

        </div>
    );
};

export default Course;