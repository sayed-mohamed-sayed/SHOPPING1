// @flow strict

import * as React from 'react';
import { Link } from 'react-router-dom';
import "./product.css"
function Productlist({products}) {





    
    return (
        

<div className="contaner-product">

<div className="wraper-pro">
    <div className="pross">

    {
        products.map((item)=>(
            <Link to={`/singleproduct/${item.id}`}>
            <div className="pro" >
                <img src={item.image} alt={item.title}/>
                <h3 className="protitletitle">{item.title}</h3>
                <div className="rate">
<p className='rating'>تقيمات {item.rating}</p>
<p className='review'>{item.reviews}</p>

                </div>
<div className="slide-price price">{item.price}$</div>
            </div>
    </Link> 
        ))
    }

    </div>
</div>
</div> 
        
    );
};

export default Productlist;