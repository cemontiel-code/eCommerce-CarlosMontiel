import React, { useEffect, useState } from 'react'
import Item from './Item'
import { DbList } from '../data/itemData'


function ItemList() {

   

    const [ItemDb,setDbItem] = useState([])

    useEffect(()=>{
        const task = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(DbList);
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
        ItemDb.map( x =>
            <li key={x.id}>
                <Item pic={x.picUrl} name={x.title} pre={x.price} stock={x.stock} />
            </li>
        )
  )
}

export default ItemList