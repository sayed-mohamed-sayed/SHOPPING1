// @flow strict

import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { produsts } from '../data/product';
import "./slider.css"
import {BsChevronRight,BsChevronLeft} from 'react-icons/bs';

function Sliderlaptop({products}) {
    const laptop=products.filter(p=>p.islaptop==false)
    const [slide,steslide]=useState(0)
const handelclick=(direction)=>{
    if (direction==="left") {
        steslide(slide-1)
        console.log(laptop.length);
    }else{
        steslide(slide+1)
    }
}
    return (
        <div>
            <h1 style={{textAlign:"center"}}>كل ما هو حديد من اجهزه الابتوب</h1>
            
            <div className="slider-contaner">
            <button disabled={slide==-8} onClick={()=>handelclick("left")} className="iconleft"><BsChevronLeft/></button>
            <div style={{transform:`translate(${slide*-250}px)`}} className="slider-wraper">
                {
                    laptop.map((item)=>(
<Link to={`/singleproduct/${item.id}`}>
                        <div className="slide">
                            <img src={item.image} alt={item.title}/>
                            <h3 className="slidetitle">{item.title}</h3>
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
            <button disabled={slide===1} onClick={()=>handelclick("right")} className="iconright"><BsChevronRight/></button>
        </div>
            
        </div>
    );
};

export default Sliderlaptop;