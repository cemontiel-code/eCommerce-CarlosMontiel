import React, { useState } from 'react'
import Item from './Item'


function ItemList() {
    const [ItemDb,setDbItem] = useState([
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
    ])

    return (
    <ul>
        {ItemDb.map( x =>
            <li>
                <Item pic={x.picUrl} name={x.title} pre={x.price} />
            </li>
        )}
        
    </ul>
  )
}

export default ItemList