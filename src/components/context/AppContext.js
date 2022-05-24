import React, { createContext, useContext, useEffect, useState } from "react"
import { collection,getFirestore ,getDocs } from "firebase/firestore";

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const db = getFirestore();
		const itemColec = collection(db ,'items');
		const getItemRef = async ()=>{
		  const data = await getDocs(itemColec)
		  if (data.size ===0) {
			  console.log('sin resultados')
		  }
		  setProducts(data.docs.map((item)=>
			({...item.data(),id: item.id})
		  ))
		}
		getItemRef();
	
	})
	return (
		<AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
	)
}

export default AppContextProvider
