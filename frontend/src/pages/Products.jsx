import React from 'react'

const Products = () => {
    const products = [
  { id: 1, name: "Burger", price: 200 },
  { id: 2, name: "Pizza", price: 500 },
  { id: 3, name: "Pasta", price: 350 }
];
  return (
    <div className='wrappercards'>
    {products.map((item)=>(
        <div className='card'>
        <h5>No.{item.id}</h5>
        <h1>{item.name}</h1>
        <p>Rs: {item.price}</p>
        <button>Add to cart</button>
        </div>
    ))}
    </div>
  )
}

export default Products
