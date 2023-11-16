// @flow strict

import * as React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { removetocart } from '../../redux/apifolder/prouctapi';
import "./cart.css"

function Cart() {


const carts=useSelector(state=>state.product.cart)

const dispatch=useDispatch()


    return (
carts.length<1?
<div className='empty' style={{fontWeight:"bolder" ,marginTop:"50px" ,marginBottom:"50px" ,textAlign:"center"}}>
    <h1>
السلة فارغه ....
    </h1>
</div>:



        <div className="cart">
    <h1 className="car-ttitle">سله التسوق</h1>
    <div className="cartwarber">
        <div className='cart-all'>
        {carts.map(item=>(
                <div className="cartitem">
                    <div className="cartimage">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="cartitem-info">
                        <div className="carttitle">{item.title}</div>
                        <div className="item quantity">
                            الكمية:
                            <span>{item.quanty}</span>
                        </div>
                        <div className="cartprice">
                            السعر:
                            <span>{item.price*item.quanty}</span>
                        </div>
                    <div className="delet">

                    <button onClick={()=>dispatch(removetocart(item.id))} className='delet'>حذف</button>
                    </div>

                    </div>
                </div>
            ))
        }
        </div> 
        </div>
        <div className="buypro">

        <button>شراء</button>
        </div>
        </div>           
    );
};

export default Cart;