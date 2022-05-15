import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../data/itemData";
import ItemList from "./ItemList";

const ListaContendor =()=> {  

  const [ category, setCategory ] = useState();
  const {categoryId} = useParams();

  useEffect(()=>{
    if ( categoryId === undefined ) {
       getItem().then((resp)=>{ setCategory(resp) }) 
      }
    else { 
      getItem().then((resp)=> 
      {  
        setCategory(resp.filter((product) => product.category === categoryId));
      })
    }
  },[categoryId])

  const checkTitle = () => {
      switch (categoryId) {
        case 'part':
            return 'Respuestos y Partes'
      
        case 'car':
            return 'Compra de Vehiculos'
      
        case 'misc':
            return 'Accesorios para Vehiculos'
      
        default:
          return 'Bienvenidos'
      }
  }

  const checkBg = () => {
      switch (categoryId) {
        case 'part':
            return 'https://images.pexels.com/photos/1476318/pexels-photo-1476318.jpeg?auto=compress&&fit=crop&w=1241&q=2'
      
        case 'car':
            return 'https://images.pexels.com/photos/3849555/pexels-photo-3849555.jpeg?&auto=format&fit=crop&w=1241&q=2'
      
        case 'misc':
            return 'https://images.pexels.com/photos/4987540/pexels-photo-4987540.jpeg?&auto=format&fit=crop&w=1241&q=2'
      
        default:
          return 'https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg?auto=compress&&fit=crop&w=1241&q=2'
      }
  }

  const bgimg = checkBg();
  const heroTitle = checkTitle();
  
  return (<>
    <div className="hero min-h-screen" style={{backgroundImage: `url(${bgimg})`,
    }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{heroTitle} </h1>
          <span> 

          </span>
          <p className="mb-5"></p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>



    <div className='card card-compact w-11/12 mx-auto my-5 text-secondary-content rounded-lg bg-secondary shadow-xl flex'>
        <div className="card-body">
            <h2 className="card-title">
                ARTICULOS DISPONIBLES
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