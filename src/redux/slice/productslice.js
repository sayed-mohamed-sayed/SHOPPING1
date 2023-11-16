import  {createSlice} from "@reduxjs/toolkit"




const productSlice=createSlice({

    name:"product",
    initialState:{
        cart:localStorage.getItem("cartitem")?
        JSON.parse(localStorage.getItem("cartitem")):[]
        ,
        product:null,
        loading:false

    },
    reducers:{
    addcart(state,action){
const newitem=action.payload    
const isitemcart=state.cart.find(cartitem=>cartitem.id===newitem.id)
if (isitemcart) {
    state.cart=state.cart.map((item)=>item.id===newitem.id?newitem:item)
}
else{
    state.cart=[...state.cart,newitem]
}

},
        removeitem(state,action){
    
state.cart=state.cart.filter((remove)=>remove.id!==action.payload)

                    }
    }
})


const productaction=productSlice.actions
const productreducers=productSlice.reducer

export {productaction,productreducers}