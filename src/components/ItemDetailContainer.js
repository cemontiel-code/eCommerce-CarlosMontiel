import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import { getItemsById } from "./firebase/FirebaseCon";
import Spinner from "./Spinner";

function ItemDetailContainer() {
  const [item, setItem] = useState({});

  // use state for load
  const [spinnerState, setSpiner] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getItemsById(id).then((data) => {
      setItem(data);
      setTimeout(setSpiner(false), 700);
    });
  }, [id]);

  const bgImg =
    "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=compress&&fit=crop&w=1241&q=10";

  return (
    <>
      {spinnerState ? (
        <Spinner></Spinner>
      ) : (
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className="hero w-screen flex flex-grow "
        >
          <div className="hero-overlay bg-opacity-60 py-4 ">
            <ItemDetails Item={item}></ItemDetails>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
