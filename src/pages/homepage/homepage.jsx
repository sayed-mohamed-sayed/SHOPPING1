// @flow strict

import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Banner from "../../banner/banner";
import Category from "../../category/catergoy";
import Prand from "../../prands/prand";
import Sliderlaptop from "../../slider/sliderlaptop";
import Slider from "../../slider/slidermobil";
import Specialoffer from "../../speciloffer/specialoffers";
import {datap} from "../../data/product"
function Homepage() {

    const [products,setproduct]=useState([])

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
console.log(products);
},[])

    return (
        <>
         <Banner/>
<Category/>
<Specialoffer/>
<Sliderlaptop  products={datap}/>
<Slider products={datap}/>
<Prand/>   
        </>
    );
};

export default Homepage;