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

	const CalcSubTotal =(precio, cantidad) =>{
		let Subtotal = 0;
		Subtotal = Subtotal +(precio*cantidad)
		return Number(Subtotal);
	}

	const CalcPrecioFinal =() =>{
		let precio = 0 ;
	   cart.forEach(x =>{
		   let itemFull = x.price * x.quantity;
		   precio = precio +itemFull;       
	   })         

	   return precio;
	}

	const calcCantidadFinal = () =>{
		let cantidad = 0;
		cart.forEach(x=>{
			cantidad = cantidad + x.quantity;
		})
		return cantidad;

	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				deleteFromCart,
				deleteCart,
				setCart,
				calcCantidadFinal,
				CalcPrecioFinal,
				CalcSubTotal
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
