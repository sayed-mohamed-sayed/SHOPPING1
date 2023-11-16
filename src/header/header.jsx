// @flow strict

import * as React from 'react';
import { useState } from 'react';
import "./header.css"
import { Link, NavLink } from 'react-router-dom';
import {BsCartDash,BsJustify} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Search from '../search/search';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {BrowserRouter,Route ,Redirect, Routes } from "react-router-dom"

function Header() {



    const[products,setproducts]=useState([])
    const[num,setnum]=useState(1)
    const[push,setpush]=useState("")
    
    async function fetchpro(id){
        try {
            const fetchs= await fetch("http://localhost:5000/produsts");
            const data=await fetchs.json()
            setproducts(data)
        } catch (error) {
            console.log(error);
        }
        
        
    }
    const product=products.filter(pp=>pp.type===false)
const dispatch=useDispatch()
useEffect(()=>{
    fetchpro()
},[])








    
    const carts=useSelector(state=>state.product.cart)

    const [toggle ,settoggle]=useState(false)
    const [search ,setsearch]=useState("")
    
    const ssearch=()=>{
        if (search!=="") {
            
            const kl=products.filter(k=>k.title.includes(search))
            // console.log(products.map(i=>i.title.includes(search)));
setpush(kl)

        }
        
    }
    
    useEffect(()=>{
        // const kl=products.filter(k=>k.title.includes(search))
        // setpush(kl)
        
        if (search==="") {
            setpush("")
        }
      
    },[search])


    
    return (
    <>
    
    
    
        <div className='header'>
            <div className="headers">
            <i className="toggle" onClick={()=>settoggle(true)}><BsJustify/></i>
          <div className='name'>مصر</div>  
          <div className='send-hello'>مرحبا بكم</div>  
          <div className='phone'>3492897</div>  

            </div>
            <div className="shoping">
                <div className="search">
                    <input  value={search} onChange={(e)=>setsearch(e.target.value)} type="text" placeholder='ماذا تريد؟'/>
                    <NavLink to="/search">

                    <button onClick={()=>ssearch()} className='button-search'>ابحث</button>
                    </NavLink>
                </div>
                <div className="shop">
                <p className='numper-product'>{carts.length}</p>
                    <i><BsCartDash/></i>
                    <i class="fa-brands fa-google"></i>                           
                    <Link to="/cart">سلة التسوق </Link>
                </div>
            </div>
            <div  className="middle-heade">
                <div >
                </div>
                <nav className="navbar">
                    <ul style={{right:toggle&&"0"}} className={"navbar-links"}>
                    <i style={{right:toggle&&"210px" }} onClick={()=>settoggle(false)}  className="navclose">x</i>
                <div className="login">
                    <NavLink to="/login">
                    <h6>تسجيل الدخول</h6>

                    </NavLink>
                   
                </div>
                        <Link to="/">
                    <li  onClick={()=>settoggle(false)}  className="navbar-link">الصفحه الرئيسيه</li>
                        </Link>
                        <Link to="/product">
                        
                    <li onClick={()=>settoggle(false)}  className="navbar-link">الاكترونيات والموبيلات</li>
                        </Link>
                        <NavLink to="/chair">

                    <li onClick={()=>settoggle(false)}  className="navbar-link">المنزل والمطبخ</li>
                        </NavLink>
                    <li onClick={()=>settoggle(false)}  className="navbar-link">رجالي</li>
                    <li onClick={()=>settoggle(false)}  className="navbar-link">نسائي</li>

                    </ul>
                </nav>
            </div>
            
        </div>
        <div className="dello">

        <Search search={push}  setsearch={setpush}/>
        </div>
    </>
    );
};

export default Header;