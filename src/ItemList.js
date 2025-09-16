import React from 'react'
import "./ItemList.css";

function ItemList({products, cart, addToCart, removeFromCart}) {
  return (
    <div className='item-list'>
      <h3>Available Products</h3>
      {products.map((p) => (
        <div key={p.id} className='item-card'>
            <span>
                {p.name} - ₹{p.price}
            </span>
            <div className='item-controls'>
                <button onClick={() =>removeFromCart(p.id)}>-</button>
                <span className='item-qty'>{cart[p.id] || 0}</span>
                <button onClick={() =>addToCart(p.id)}>+</button>
            </div>
            </div>
      ))}
    </div>
  )
}

export default ItemList;
