// @flow strict

import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signin() {
    const [email ,setemail]=useState("")
    const [pass ,setpass]=useState("")
    const [name ,setname]=useState("")

const handells=()=>{
    if (email==="") {
        return(
            alert("no data")
        )
        
    }
    if (pass==="") {
        return(
            alert("no data")
        )
        
    }
    if (name==="") {
        return(
            alert("no data")
        )
        
    }
    console.log("fffffffffff");
}


    return (
        <div className="form-wraber">
        <form action="" onSubmit={(e)=>e.preventDefault()} className="form">
        <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder='ادخل الاسم ' name="" id="" />
            <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" name="" placeholder='ادخل الايميل ' id="" />
            <input  value={pass} onChange={(e)=>setpass(e.target.value)} type="password" name="" placeholder='ادخل كبمة السر ' id="" />
            <button className="button" onClick={()=>handells()}>انشـــاء حساب </button>
            <Link to="/login">
            <p>لدي  حساب بالفعل <span className='sp'>تسجيل الدخول </span></p>
            </Link>
        </form>
       </div>
    );
};

export default Signin;