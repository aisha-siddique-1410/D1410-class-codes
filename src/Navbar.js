import React from 'react'
import "./Navbar.css";


function Navbar({totalItems, totalPrice}) {
  return (
    <>
<nav className='navbar'>

<h2 className='logo'>My Shop</h2>
<div className='cart-info'>
     Items:  {totalItems} |  Total: ₹{totalPrice}
</div>
</nav>
    </>
  )
} 

export default Navbar
