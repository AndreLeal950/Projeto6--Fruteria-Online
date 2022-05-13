import React from "react";
import { Routes, Route } from "react-router-dom";
import  Cart from "./routes/Cart";
import Layout from "./components/Layout/Layout";
import Home from "./routes/Home"


function App() {
  return (
    <Routes>
       <Route element={<Layout/>}>
     <Route path="/" element={<Home/>}/>
     <Route path="/cart" element={<Cart/>}/>
           
     </Route>
     
    </Routes>
  );
}

export default App;
