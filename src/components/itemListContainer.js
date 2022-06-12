import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "./firebase/FirebaseCon";
import ItemList from "./ItemList";
import Spinner from "./Spinner";

const ListaContendor = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState();

  const [bg, setBG] = useState();

  // use state for load
  const [spinnerState, setSpiner] = useState(true);

  // changes background elements dynamically
  const getBgContext = (id) => {
    switch (id) {
      case "part":
        return {
          title: "Respuestos y Partes",
          bgImg:
            "https://images.pexels.com/photos/1476318/pexels-photo-1476318.jpeg?auto=compress&&fit=crop&w=1241&q=2",
        };

      case "car":
        return {
          title: "Compra de Vehiculos",
          bgImg:
            "https://images.pexels.com/photos/3849555/pexels-photo-3849555.jpeg?&auto=format&fit=crop&w=1241&q=2",
        };

      case "misc":
        return {
          title: "Accesorios para Vehiculos",
          bgImg:
            "https://images.pexels.com/photos/4987540/pexels-photo-4987540.jpeg?&auto=format&fit=crop&w=1241&q=2",
        };

      default:
        return {
          title: "Bienvenidos",
          bgImg:
            "https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg?auto=compress&&fit=crop&w=1241&q=2",
        };
    }
  };

  // get Items data
  useEffect(() => {
    const getItemsData = async () => {
      setSpiner(true);
      const itemsCollection = categoryId
        ? query(collection(db, "items"), where("category", "==", categoryId))
        : collection(db, "items");

      const querySnapshot = await getDocs(itemsCollection);

      setItems(
        querySnapshot.docs.map((i) => {
          const obj = { ...i.data(), id: i.id };
          return obj;
        })
      );
    };

    getItemsData().then(setTimeout(setSpiner(false), 500));
    setBG(getBgContext(categoryId));
  }, [categoryId]);

  return (
    <>
      {spinnerState ? (
        <Spinner>hola</Spinner>
      ) : (
        <>
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${bg.bgImg})` }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{bg.title} </h1>
                <span></span>
                <p className="mb-5"></p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="w-full text-secondary-content bg-slate-50">
            <div className="card-body ">
              <h2 className="card-title">ARTICULOS DISPONIBLES</h2>
              <div className="divider"></div>
              <ul className="mx-auto">
                <ItemList className="m-5 p-5 " category={items} />
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ListaContendor;
