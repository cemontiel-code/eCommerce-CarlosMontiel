import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
	// Logica
	const [cart, setCart] = useState([])

	// Validar si está el item en el carrito
	const isInCart = (id) => cart.find((producto) => producto.id === id)

	// Agregar item al carrito
	const addToCart = (producto, cantidad) => {
		const newCart = [...cart]

		const productoIsInCart = isInCart(producto.id)

		if (productoIsInCart) {
			newCart[
				newCart.findIndex((prod) => prod.id === productoIsInCart.id)
			].quantity += cantidad
			setCart(newCart)
			return
		}

		producto.quantity = cantidad

		setCart([...newCart, producto])
	}

	const deleteFromCart = (producto) => {
		const newCart = [...cart]

		const productIsInCart = isInCart(producto.id)

		if (!productIsInCart) {
			return
		}

		const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

		setCart(deleteProduct)
	}

	const deleteCart = () => setCart([])

	const getSubTotal =(precio, cantidad) =>{
		let Subtotal = 0;
		Subtotal = Subtotal +(precio*cantidad)
		return Number(Subtotal);
	}

	const getFprice =() =>{
		let fPrice = 0 ;
	   cart.forEach(x =>{
		   let itemFull = x.price * x.quantity;
		   fPrice = fPrice +itemFull;       
	   })         

	   return fPrice;
	}

	const getFQuantity = () =>{
		let Quantity = 0;
		cart.forEach(x=>{
			Quantity = Quantity + x.quantity;
		})
		return Quantity;

	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				deleteFromCart,
				deleteCart,
				setCart,
				getFprice,
				getFQuantity,
				getSubTotal
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
