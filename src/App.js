import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cart from "./routes/Cart"
import Home from "./routes/Home"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  );
}

export default App;
