import React from 'react';


function Potato({food,img,rating}){ // Potato({food}) = Potato.food
    return (
        <div><h3>I love {food}</h3>  
        <h4><img src={img} alt={food} /></h4>
        <span>{rating}/5.0</span>
        </div>
    )    
}


export default Potato; //-> have to be packed in one parent element