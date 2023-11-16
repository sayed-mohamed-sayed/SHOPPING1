// @flow strict

import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Offer({offer ,key}) {


    
    const{ firstimage,title,price,discount,rating,listimage,id}=offer
    const [imgsrc,setimgsrc]=useState(firstimage)
    return (
        <div className='offers'>
            <div className="offer-image">

                <img src={imgsrc}  
                
                onMouseEnter={()=>setimgsrc(listimage)}
                onMouseLeave={()=>setimgsrc(firstimage)}
                
                alt={title}/>
            </div>
            <div className="offer-info">
    <p className='discover'>
        خصم 
    {discount}%

    </p>
                <h5>{title}</h5>
                <div className="rating">{rating }تقيمات  </div>
                <div className="price">

                <p>{price-(discount*price)/100}$</p>
                <p className='prices'>{price}$</p>
                </div>
                <Link to={`/specialpage/${id}`}>
                <div className="offer-se">
                    شاهد المزيد
                </div>
                </Link>
<div className="offer-discount">
</div>
            </div>
        </div>
    );
};

export default Offer;