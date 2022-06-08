import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt , faFaceFrown } from '@fortawesome/free-regular-svg-icons'



const CartContainer= () => {
    const { cart ,deleteFromCart ,deleteCart,getFprice,
        getFQuantity ,getSubTotal } = useCartContext();

    // check if cart is empty
    const [ cartState ,SetCartState] = useState()

    useEffect(() => {
        if(cart.length<1){
            SetCartState(false);
        } else {
            SetCartState(true);
        }
        
     }, [cart] )
     
     const cantFinal   = getFQuantity();
     const precioFinal = getFprice();

     const bgImg = 'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=compress&&fit=crop&w=1241&q=10'


    return (
    <div style={{backgroundImage: `url(${bgImg})`,backgroundSize:'cover'}} className='md:min-h-[93%] bg-opacity-50  backdrop-blur-md'>
        <div className='hero-overlay md:flex gap-5 '>
            <div className='card mx-auto md:w-8/12 md:h-[90%] md:mt-5 p-2 bg-gray-200 bg-opacity-50 backdrop-blur-xl' >
                <h2 className='card-title'> Carrito </h2>
                <div className='card-body '>
                    {cartState ? (
                    <ul>{
                    cart.map( cartItem => 
                        <li key={cartItem.id}>
                            <div className='bg-white bg-opacity-80 shadow-inner p-2 gap-2 m-4'> 
                                <div className='flex gap-3'>
                                    <img className='w-36' src={cartItem.picURL} alt={cartItem.id}></img>
                                    <div>
                                        <h2> <b>{cartItem.title}</b></h2>
                                        <h2> $<b>{cartItem.price}</b></h2>
                                        <p> Cant.{cartItem.quantity}</p>
                                    </div>
                                </div>
                                <div className='card-actions justify-end'>
                                    <div className='block '>
                                         <b>Subtotal</b>
                                         <br/>
                                        {getSubTotal(cartItem.price,cartItem.quantity)}$
                                     </div>
                                    <button  className='btn btn-warning text-xl' onClick={()=>{deleteFromCart(cartItem)}}>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                    </button>
                                </div>
                            <div className='divider'></div>
                            </div>
                        </li>
                        
                    )
                }
                </ul>) : (
                    <div className='bg-white bg-opacity-40 text-6xl text-center p-5 h-full rounded'>
                        <br/>
                        <FontAwesomeIcon className='text-9xl' icon={faFaceFrown} />
                        <br/>
                        <br/>
                        carrito vacio
                    </div>
                )} 
                </div>
                <div className='card-actions justify-end mt-auto'>
                    {cartState ? (
                    <>
                        <button className='btn gap-2 btn-sm btn-warning' onClick={()=>{deleteCart()}} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            borrar todo
                        </button>
                    </>
                    ):(
                        <Link to='/' className='btn btn-sm'>volver a landing</Link>
                    )}
                   
                </div>
            </div>
            <div className='card md:h-2/6 md:w-3/12 mt-5 mx-auto p-2 bg-slate-100 md:bg-opacity-80 ' >

                <div className='flex justify-between '>
                    <div> Cantidad de items </div>
                    <div>{cantFinal}</div>
                </div>
                
                <div className='divider' />
                
                <div className='flex justify-between '>
                    <div> Cargo de entrega </div>
                    <div>env&iacute;o gratis!</div>
                </div>
                <div className='divider' />
                
                <div className='flex justify-between '>
                    <div> <b> Total </b> </div>
                    <div> <b> {precioFinal}</b></div>
                </div>
                
                
                <Link to='/checkout' className='btn btn-success gap-2 mt-auto px-1'>
                    checkout
                    <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>
                </Link>
            </div>
        </div>
      </div>
  )
}

export default CartContainer