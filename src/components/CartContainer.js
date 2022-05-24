import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './context/CartContext'

const CartContainer= () => {
    const { cart ,deleteFromCart ,deleteCart,calcCantidadFinal,
        CalcPrecioFinal ,CalcSubTotal} = useCartContext();

    const [ cartState ,SetCartState] = useState()


     useEffect(() => {
        if(cart.length<1){
            SetCartState(false)
        } else {
            SetCartState(true);
        }
        
     }, [cart] )
     

     const cantFinal   = calcCantidadFinal();
     const precioFinal = CalcPrecioFinal ();

  
    return (
      <>
        <div className='container xl mx-auto block md:flex gap-4 '>
            <div className='card my-5 md:w-8/12 h-full p-2 bg-gray-200 shadow-xl' >
                <h2 className='card-title'> Carrito </h2>
                <div className='card-body'>
                    {cartState ? (
                    <ul>{
                    cart.map( cartItem => 
                        <li key={cartItem.id}>
                            <div className='bg-white shadow-xl p-2 gap-2 m-4'> 
                                <div className='flex gap-3'>
                                    <img className='w-36' src={cartItem.picUrl} alt={cartItem.id}></img>
                                    <div>
                                        <h2> <b>{cartItem.title}</b></h2>
                                        <h2> $<b>{cartItem.price}</b></h2>
                                        <p> Cant.{cartItem.quantity}</p>
                                    </div>
                                </div>
                                <div className='card-actions justify-end'>
                                    <div> <b>Subtototal</b>{CalcSubTotal(cartItem.price,cartItem.quantity)} </div>
                                    <button  className='btn btn-warning ' onClick={()=>{deleteFromCart(cartItem)}}>eliminar item</button>
                                </div>
                            <div className='divider'></div>
                            </div>
                        </li>
                        
                    )
                }
                </ul>) : (
                    <div className='bg-white'>
                        carrito vacio
                    </div>
                )}
                </div>
                <div className='card-actions justify-end'>
                    {cartState ? (
                         <button className='btn gap-2 btn-sm btn-warning' onClick={()=>{deleteCart()}} >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                         borrar todo
                     </button>
                    ):(
                        <Link to='/' className='btn btn-sm'>volver a landing</Link>
                    )}
                   
                </div>
            </div>
            <div className='card my-5  h-full p-2 bg-slate-200 shadow-xl' >
                <h2 className='card-title'> SubTotal ( {cantFinal} articulos )  {precioFinal} $</h2>
                <Link to='/checkout' className='btn btn-success'>
                    finalizar compra
                </Link>
            </div>
        </div>
      </>
  )
}

export default CartContainer