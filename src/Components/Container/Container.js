import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Instructor from '../Instructor/Instructor';

import './Container.css'

const Container = () => {

    const [instructors,setInstructors]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
    fetch('./instructor.JSON')
    .then(res=>res.json())
    .then(data=>setInstructors(data));
},[]);
    const handleCart=(instructor)=>{
    console.log('clicked');
const newInstructor=[...cart,instructor];
setCart(newInstructor);

    }
    return (
        <div className="main-container">
              <div className="instructor-container">
                {
                     instructors.map(instructor=>
                     <Instructor
                        key={instructor.id}
                        instructor={instructor}
                        handleCart={handleCart} ></Instructor>)
                 }
                </div>
                 
            <div >
<Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Container;