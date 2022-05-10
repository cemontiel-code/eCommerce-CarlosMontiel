import React from 'react'
import Item from './Item'

function ItemList({category}) {
    return (

        <div className="container mx-auto flex flex-wrap gap-4 justify-center">  
             { category && category.map( x =>
                    <li key={x.id}>
                        <Item key={x.id} product={x} />
                    </li>
                )
            }
        </div>
        )
}

export default ItemList