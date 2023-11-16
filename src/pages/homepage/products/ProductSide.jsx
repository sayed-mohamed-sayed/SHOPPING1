// @flow strict

import * as React from 'react';

function ProductSide({filter,setfilter ,setfilterprice,filterprice}) {

    const changefilter=(e)=>{
        setfilter(e.target.id)
    }

    const changefilterprice=(e)=>{
        setfilterprice(e.target.id)
    }


    return (
        
            <div className="product-fillter">
                <div className="all-group">
            <div className="form-group">
                <div className="h3">فلتر حسب السلعه</div>
    <input onChange={changefilter}  type="radio" name="fillter" id="all" />
    <label htmlFor="all">بدون فلتر</label>
</div><div className="form-group">
    <input onChange={changefilter}  type="radio" name="fillter" id="laptop" />
    <label htmlFor="all">لابتوب</label>
</div><div className="form-group">
    <input onChange={changefilter} type="radio" name="fillter" id="mopil" />
    <label htmlFor="all">موبايل</label>
</div>
</div>
<div className="all-group">
    
    <div className="form-group">
                <div className="h3">ترتيب حسب السعر</div>
    <input value={filterprice} onChange={changefilterprice}  type="radio" name="fillter" id="select" />
    <label htmlFor="all">بدون ترتيب</label>
</div><div className="form-group">
    <input  value={filterprice}  onChange={changefilterprice} type="radio" name="fillter" id="low" />
    <label htmlFor="all">من الاقل الي الاعلي</label>
</div><div className="form-group">
    <input value={filterprice}  onChange={changefilterprice} type="radio" name="fillter" id="high" />
    <label htmlFor="all">من الاعلي الي الاقل</label>
</div>
            </div>
            </div>
        
    );
};

export default ProductSide;