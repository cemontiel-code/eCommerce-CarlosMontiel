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
            <div className='flex items-center justify-center text-black text-xl'>
                    <button className=' bg-rose-300 w-6 rounded-l inline-block' onClick={SubHandler}>-</button>
                    <strong className=' btn-square bg-white p-1' > {cuenta} </strong>
                    <button className='bg-emerald-300 w-6 rounded-r inline-block' onClick={Addhandler}>+</button>
            </div>
        </div>
  )
}

export default BotonContador