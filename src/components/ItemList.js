import React from "react";
import Item from "./Item";

function ItemList({ category }) {
  return (
    <div className="container w-full grid md:grid-cols-3 2xl:grid-cols-4 gap-5 ">
      {category &&
        category.map((x) => (
          <li key={x.id}>
            <Item key={x.id} product={x} />
          </li>
        ))}
    </div>
  );
}

export default ItemList;
