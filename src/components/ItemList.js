import React, { useEffect, useState } from 'react'
import Item from './Item'


function ItemList() {

    const DbList =[
        {
            id:1  ,
            title : "vehiculo",
            price : 20000,
            desc  : 'carro economico',
            picUrl: "https://api.lorem.space/image/car?0" 
        },{
            id:2 ,
            title : "carro",
            price : 28500,
            desc  : 'carro bonito',
            picUrl: "https://api.lorem.space/image/car?23" 
        },{
            id:3 ,
            title : "automobil",
            price : 32500,
            desc  : 'carro veloz',
            picUrl: "https://api.lorem.space/image/car?4" 
        }
    ]

    const [ItemDb,setDbItem] = useState([])

    useEffect(()=>{
        const task = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (ItemDb.length<1) {
                    resolve(DbList);
                    
                } else{
                    reject('Rechazado')
                }
            },2000)
        })

        task
        .then(
            res =>{
                setDbItem(res);
                console.log('archivos cargados')
            }
        )
        .catch(
            eRR => {
                console.log(eRR,'Carga de datos fallada')
            }
        );
    })

    return (
        <ul>
        
        {ItemDb.map( x =>
            <li key={x.id}>
                <Item pic={x.picUrl} name={x.title} pre={x.price} />
            </li>
        )}
        
    </ul>
  )
}

export default ItemList