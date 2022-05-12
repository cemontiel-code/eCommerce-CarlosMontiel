import React from 'react'
import { useCartContext } from './context/CartContext'

const CartContainer= () => {

    const { cart ,deleteFromCart ,deleteCart } = useCartContext();

    console.log(cart)
  
    return (
      <>
        <div className='container xl mx-auto  '>
            <div className='card my-5  h-full p-2 bg-slate-200 shadow-xl' >
                <h2 className='card-title'> Carrito </h2>
                <button className='btn btn-primary' onClick={()=>{deleteFromCart(cartItem)}} >borrar todo</button>
                <div className='grid grid-cols-1'>
                    <ul>{
                    cart.map( cartItem => 
                        <li key={cartItem.id}>
                        <div className='outline-2'> 
                            <img className='w-36' src={cartItem.picUrl} alt={cartItem.id}></img>
                            <h2> <b>{cartItem.title}</b></h2>
                            <h2> $<b>{cartItem.price}</b></h2>
                            <p> cnt.{cartItem.quantity}</p>
                            <button  className='btn btn-warning ' onClick={()=>{deleteFromCart(cartItem)}}>eliminar item</button>
                        </div>
                        </li>
                    )
                }
                </ul>
                </div>
            </div>
        </div>
      </>
  )
}

export default CartContainer