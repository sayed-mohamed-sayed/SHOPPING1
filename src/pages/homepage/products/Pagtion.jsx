// @flow strict

import * as React from 'react';
import "./pagtion.css"
function Pagtion({pages ,current,setcurrent}) {
    const greatepage=[]
    for (let index = 1; index < pages; index++) {
greatepage.push([index])        
    }
    console.log(current);
    return (
        <div className='pagtion'>            {
                greatepage.map((page,i)=>(
                    <div onClick={()=>setcurrent(page)} 
                    className={current === page ? "pages active" :"pages"}
                     key={page}>
{page}
                    </div>
                ))
            }
        </div>
    );
};

export default Pagtion;