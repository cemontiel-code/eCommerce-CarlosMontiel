import React, { useState } from 'react'

function BotonContador() {
    //let suma =0;
    const [cuenta,setCount]=useState(0);


    const Addhandler = () =>{
        console.log("suma");
        setCount(cuenta+1);

    }

    const SubHandler = () =>{
        console.log("resta");
        setCount(cuenta-1);
    }

    return (
        <div className='card p-2 bg-blue-500 text-white'>
            <h3 ><b>agregar al carrito</b></h3>
            <hr />
            <div className='flexx space-y-3.5  text-black text-xl'>
                <button className='bg-rose-300 w-6' onClick={SubHandler}>-</button>
                <strong className='bg-white p-1' > {cuenta} </strong>
                <button className='bg-emerald-300 w-6' onClick={Addhandler}>+</button>
            </div>
        </div>
  )
}

export default BotonContador