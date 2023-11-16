// @flow strict

import * as React from 'react';


function Pagtionsearcj({pages,num,setnum}) {

    const greatepages=[]
    for (let index = 1; index <pages; index++) {
greatepages.push([index])        
    }


    return (
        <div>

    
        <div className='pagtion'>            {
                greatepages.map((page,i)=>(
                    <div onClick={()=>setnum(page)} 
                    className={num=== page ? "pages active" :"pages"}
                     key={page}>
{page}
                    </div>
                ))
            }
        </div>
    
        </div>
    );
};

export default Pagtionsearcj;