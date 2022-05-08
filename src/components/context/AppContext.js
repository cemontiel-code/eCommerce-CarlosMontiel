import React, { createContext, useContext, useEffect, useState } from "react";
import { getItem } from "../../data/itemData";

const AppContext = createContext();

export const useAppContext = () =>{
    useContext(AppContext)
}

const AppContextProvider = ( { children } ) =>{
     const [ items, setItems ] = useState([]); 

     useEffect(()=>{
         getItem().then((response)=>{  setItems(response) })
     })

     return (
         <AppContext.Provider value={ {items} }>
             {children}
         </AppContext.Provider>
     )
}

export default AppContextProvider;
