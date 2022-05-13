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


  return (<>
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Bienvenidos </h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>



    <div style={style} className='card text-black bg-slate-100 card-compact shadow-xl flex'>
        <div className="card-body">
            <h2 className="card-title">
               {CatName}
            </h2>
            <div className="divider"></div>
            <ul className="flex flex-wrap" >
              <ItemList className="m-5 p-5" category={category} />
            </ul>
        </div>        
    </div>
  </>
  )
};

export default ListaContendor;