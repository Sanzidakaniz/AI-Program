import React from 'react';
import './Instructor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,} from '@fortawesome/free-brands-svg-icons'


const Instructor = (props) => {
    
    const {name,qualification,image,university,salary,Subject,id}=props.instructor;
    return(

   



 <div className="card new-design"> 

<img src={image} alt="" />
    <h4>{name}</h4>
  <p>Qualification: <span>{qualification}</span></p>
  <p>University Name: <span>{university}</span></p>
  <p>Expert In: <span>{Subject}</span></p>
  <p>Salary: $<span>{salary}</span></p>
 <p>Instructor Id: <span>{id}</span></p>
  <button onClick={()=>props.handleCart(props.instructor)}><FontAwesomeIcon icon={faShoppingCart } /> add to cart</button>

  
 <div className="icon-margin">
    <FontAwesomeIcon icon={faLinkedin} />
 </div>

</div>
  

    );
};

export default Instructor;