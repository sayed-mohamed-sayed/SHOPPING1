// @flow strict

import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Productlist from './products/Productlist';
import ProductSide from './products/ProductSide';
import Pagtion from './products/Pagtion';
import { datap } from '../../data/product';

function Product() {


    
    const [products,setproduct]=useState([])
    const [filter,setfilter]=useState("all")
    const [filterprice,setfilterprice]=useState("select")
    const [current,setcurrent]=useState(1)
    
async function fetchpro(){
    try {
        const fetchs= await fetch("http://localhost:5000/produsts");
const data=await fetchs.json()
setproduct(data)
    } catch (error) {
        console.log(error);
    }


}
const dispatch=useDispatch()
useEffect(()=>{
fetchpro()
},[])

const profilter=datap.filter((o)=>
filter==="laptop"?
o.islaptop===false:
filter==="mopil"?
o.islaptop===true:
o
)

const proprice=filterprice==="low"?
profilter.sort((a,b)=>a.price-b.price):
filterprice==="high"?profilter.sort((a,b)=>b.price-a.price):
profilter.sort((a,b)=>(a.title>b.tilte?1:-1))

const productnumpage=3;
const pages=Math.ceil(proprice.length / productnumpage)


const startindex=(current-1)*productnumpage
const finshindex=current* productnumpage
const order=proprice.slice(startindex,finshindex)


    return (
        <>
        <div className='allpro'>
        <ProductSide filter={filter}  setfilter={setfilter} filterprice={setfilterprice} setfilterprice={setfilterprice}/>
        <Productlist products={order}/>

        </div>
        <div className="pagtion">
            <Pagtion pages={pages} current={current} setcurrent={setcurrent}/>
            
        </div>
        </>
    );
};

export default Product;