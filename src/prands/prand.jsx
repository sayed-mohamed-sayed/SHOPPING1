// @flow strict

import * as React from 'react';
import "./prand.css"
import  { prands } from "../data/prand"
function Prand() {
    return (
        <div>
            <div className="prands">
                    {
                        prands.map((p)=>(
                            <div className="prand" key={p.id}>
<h1>{p.name}</h1>
                </div>
                        ))
                    }
            </div>
        </div>
    );
};

export default Prand;