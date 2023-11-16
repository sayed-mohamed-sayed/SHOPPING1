// @flow strict

import * as React from 'react';
import "./specialoffer.css"
import {soffer} from "../data/specialoffer"
import Offer from './Offer';
function Specialoffer() {
    return (
       <div className="offer">
<h1 className="title">عروض كبيره لليوم
<i>24 ساعه فقط</i>

</h1>
<div className="offer-waper">

{
    soffer.map(offer=><Offer key={offer.id} offer={offer}/>)
}
</div>
       </div>
    );
};

export default Specialoffer;