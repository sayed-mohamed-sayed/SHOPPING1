// @flow strict

import * as React from 'react';
import { datap, produsts } from '../../data/product';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import "../singleproduct/singlpro.css"
import { icons } from 'react-icons';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../redux/apifolder/prouctapi';

function Singleproduct() {

    const dispatch=useDispatch()
    const [product,setproduct]=useState(undefined)
   
    const {id}=useParams()
    
    useEffect(()=>{
        const data=datap.find((i)=>i.id==id)
        setproduct(data)
window.scrollTo(0,0)
},[id])

const [qty,setqty]=useState(1)

const fetchshop=()=>{
dispatch(addtocart(
{    id:product&&product.id,
    quanty:qty,
    price:product&&product.price,
    title:product&&product.title,
    image:product&&product.image
}))
}
    return (
        <div>
<div className="productitem">
    <div className="proimg">

    <img src={product&&product.image} alt="" />
    </div>
    <div className="producttitle">
        <h3 className="title">{product&&product.title}</h3>
        <p>{ product&&product.reviews} تقييمات</p>
        <p>{ product&&product.rating}</p>
        <h5>{product&&product.price}$</h5>
    <div className="procart">
                <div>الكميه</div>
                <input value={qty} onChange={(e)=>setqty(e.target.value)} type="number" min="1" max="10" />
<button className="add"  onClick={fetchshop}>اضافه الي السله</button>

                </div>    
    </div>
</div>

        </div>
    );
};

export default Singleproduct;