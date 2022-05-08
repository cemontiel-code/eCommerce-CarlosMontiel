import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../data/itemData";
import ItemList from "./ItemList";


const style = {
    margin:'2%',
    width:'95vw'
}

const ListaContendor =({CatName})=> {  

  const [category, setCategory ] = useState();
  const {categoryID} = useParams();

  useEffect(()=>{
    if ( categoryID === undefined ) {
       getItem().then((resp)=>{ setCategory(resp) }) 
      }
    else { 
      getItem().then((resp)=> 
      {  
        setCategory(resp.filter((product) => product.category === categoryID));
      })
    }
  },[categoryID])


  return (
    <div style={style} className='card text-black bg-blue-200 card-compact shadow-xl flex'>
        <div className="card-body">
            <h2 className="card-title">
               {CatName}
            </h2>
            <hr/>
            <ul className="flex flex-wrap" >
              <ItemList className="m-5 p-5" category={category} />
            </ul>
        </div>        
    </div>
  )
};

export default ListaContendor;