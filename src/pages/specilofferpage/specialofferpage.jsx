// @flow strict

import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {soffer}from "../../data/specialoffer"
import "../../pages/specilofferpage/special.css"
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../redux/apifolder/prouctapi';
import { useEffect } from 'react';

function Specialofferpage() {

    const Params=useParams()
    const product=soffer.find(p=>p.id===parseInt(Params.id))
    const [imgindex,setimgindex]=useState(0)
    console.log(product.image);
const dispatch=useDispatch()
    const carts=useSelector(state=>state.product.cart)
    const [qty,setqty]=useState(1)

    const fetchpro=()=>{
dispatch(addtocart({
    id:product.id,
    quanty:qty,
    price:product.price,
    title:product.title,
    image:product.image[imgindex]

}))

    }
useEffect(()=>{

window.scrollTo(0,0)
},[])

 return (
    <>
        <div className="special-offer">
            <div className="all">

            <div className="specialig">
                
                <img className='image' src={product.image.imgindex?product.image.imgindex:product.image[imgindex]} alt="" />

            </div>
<div className="imgall">
    {
    product.image.map((source,index)=>(
        <img key={index} onClick={()=>setimgindex(index)} src={source}/>
    ))
    }
</div>
            </div>


        <div className="specialinfo">
            <div className="title">
            <h3>{product.title}</h3>
            </div>
            <div className="price">
                <p>{product.price}$</p>
                <p className="discount">{product.price-(product.discount*product.price)/100}$</p>

            <div className="procart">
                <div>الكميه</div>
                <input  value={qty} onChange={(e)=>setqty(e.target.value)}  type="number" min="1" max="10" />
<button className="add" onClick={fetchpro}>اضافه الي السله</button>

                </div>    
            </div>

        </div>
        </div>

        
    </>
    );
};

export default Specialofferpage;