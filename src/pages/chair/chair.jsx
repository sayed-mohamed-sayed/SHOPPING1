// @flow strict

import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./chair.css"
import Pagtion from '../homepage/products/Pagtion';
import Pagtionsearcj from '../../search/pagtionsearcj';
function Chair() {
    
    const[productpro,setproductpro]=useState([])
    const[num,setnum]=useState(1)
    
    async function fetchpro(id){
        try {
            const fetchs= await fetch("http://localhost:5000/produsts");
            const data=await fetchs.json()
            setproductpro(data)
        } catch (error) {
            console.log(error);
        }
        
        
    }
    const product=productpro.filter(pp=>pp.type===false)
const dispatch=useDispatch()
useEffect(()=>{
    fetchpro()
},[])


const productnumpage=4;
const pages=Math.ceil(product.length / productnumpage)


const startindex=(num-1)*productnumpage
const finshindex=num* productnumpage
const order=product.slice(startindex,finshindex)


const numpage=[]
for (let index = 0; index < pages; index++) {
numpage.push([index])    
}

// {
//     num.map((u,i)=>(
//       <button key={u}>{u}</button>
//     ))
// }

return (
          

<div className="contaner-products">

<div className="wraper-pros">
    <div className="pross">

    {
        order.map((item)=>(
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
    <div className="num">
    </div>
</div>
<Pagtionsearcj pages={pages} num={num} setnum={setnum} />
</div> 
    );
};

export default Chair;