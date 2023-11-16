// @flow strict

import * as React from 'react';
import { category } from '../data/category';
import "./category.css"
function Category() {
    return (
        <div className='category'>
            {
                category.map((category)=>(
                    <div className="category-item" key={category.id}>
<img src={category.image}/>
<div className="title">

<b>{category.title}</b>              
</div>

      </div>
                ))
            }
        </div>
    );
};

export default Category;