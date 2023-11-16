import {productaction } from "../slice/productslice";

export function addtocart(newitem){

return(dispatch,getState)=>{

    dispatch(productaction.addcart(newitem))
    const {product}=getState()
    localStorage.setItem("cartitem",JSON.stringify(product.cart))


}



}




export function removetocart(id){

    return(dispatch,getState)=>{
    
        dispatch(productaction.removeitem(id))
        const {product}=getState()
        localStorage.setItem("cartitem",JSON.stringify(product.cart))

    }
    
    
    
    }
    