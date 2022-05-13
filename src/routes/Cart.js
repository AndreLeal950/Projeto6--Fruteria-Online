import CartPag from "../components/CartPag/CartPag";
import { useEffect, useState} from 'react'




function Cart() {

  const [fruitList, setFruitList] = useState([])
  
  useEffect(() => {
    const createList = () => {
      const selecCart = (key) => JSON.parse(localStorage.getItem(key))
      const keys = Object.keys(localStorage)
      setFruitList(keys.map((e) => selecCart(e) ))      
    }
    createList();
  },[])
  
  return (
    <div >
      {fruitList.map((e) => <CartPag
        image={e.image}
        name={e.name}
        price={e.price}
        quantity={e.quantity}
        value={e.value } />)}

    
     
    </div>
  )
}

export default Cart;
