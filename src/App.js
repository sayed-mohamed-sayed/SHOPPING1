
import {BrowserRouter,Route ,Redirect, Routes } from "react-router-dom"

import Foter from "./fotter/foter";
import Header from "./header/header";
import Cart from "./pages/cart/Cart";
import Home from "./pages/homepage/homepage"
import Product from "./pages/homepage/product";
import Singleproduct from "./pages/singleproduct/Singleproduct";
import Specialofferpage from "./pages/specilofferpage/specialofferpage";
import Loginpage from "./register/loginpage";
import Signin from "./register/signin";
import Chair from "./pages/chair/chair";
import Searchinput from "./search/searchinput";
function App() {
  return (
    <div>



 <BrowserRouter>
<Header/>
<Routes>
<Route  path="/login" element={<Loginpage/>}/>
<Route path="/signin"  element={<Signin/>}/>/
<Route  path="/" element={<Home/>}/>
<Route  path="/cart" element={<Cart/>}/>
<Route  path="/product" element={<Product/>}/>
<Route  path="/singleproduct/:id" element={<Singleproduct/>}/>
<Route  path="/specialpage/:id" element={<Specialofferpage/>}/>
<Route path="/chair" element={<Chair/>} />
<Route path="/search" element={<Searchinput/>}/>
</Routes>
<Foter/>
</BrowserRouter> 

    </div>
  );
}

export default App;
