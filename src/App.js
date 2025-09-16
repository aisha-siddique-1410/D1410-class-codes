import React, {useState} from 'react'
import Navbar from './Navbar';
import ItemList from "./ItemList.js";

function App(){
  const products = [
    {id:1, name:"Apple", price:50},
    {id:2, name: "Banana", price: 20},
    {id:3, name:"Mango", price: 80},
  ];

  const [cart, setCart]= useState({});

  const addToCart = (id) =>{   
    setCart((prev) => ({
      ...prev, [id]: (prev[id] || 0) +1,  
    }));
  };

  const removeFromCart = (id) => {  // {1:2, 2:4, 3:1}
    setCart((prev) => {
      if(!prev[id]) return prev;
      const updated = { ...prev, [id]: (prev[id]) -1, };
      if(updated[id] <=0) delete updated[id];
      return updated;
    });

  };

  const totalItems =Object.values(cart).reduce((a,b) => a +b, 0)
  const totalPrice = products.reduce((sum, p) => sum +(cart[p.id] || 0) *p.price, 0
);
  return (
   <div>
    <Navbar totalItems={totalItems} totalPrice={totalPrice}/>
    <ItemList products={products}
    cart={cart}
    addToCart={addToCart}
    removeFromCart={removeFromCart}/>
   </div>

  );
}

export default App;