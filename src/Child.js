import React from 'react'

function Child({count, setCount}) {
  return (
    <div>
      <h2> Child Component</h2>
      <p>Child sees count: {count}</p>
      <button onClick={ () => setCount(count + 1)}>
         Increase Count</button>
         
    </div>
  )
}

export default Child;
