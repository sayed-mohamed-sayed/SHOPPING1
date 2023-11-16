// @flow strict

import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Search({search ,setsearch}) {


  
    const[products,setproducts]=useState([])
    const[num,setnum]=useState(1)
    
    async function fetchpro(id){
        try {
            const fetchs= await fetch("http://localhost:5000/produsts");
            const data=await fetchs.json()
            setproducts(data)
        } catch (error) {
            console.log(error);
        }
        
        
    }
useEffect(()=>{
    fetchpro()
},[])

const delet=()=>{
    setsearch("")
}

    return (
         

<div className="contaner-product">

<div className="wraper-pro">
    <div className="pross">

    {search&&
        search.map((item)=>(
            <Link to={`/singleproduct/${item.id}`}>
            <div className="pro"  onClick={()=>delet()}>
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

export default Search;