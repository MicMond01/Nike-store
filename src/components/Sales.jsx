import React, { useState } from "react";
import Title from "./utils/Title";
import Item from "./utils/Item";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  // console.log(endpoint);

  const [planArr] = useState([]);
  // console.log(items);

  const saveItem = (id) => {
    const prevData = [...items];
    prevData.map((item) => {
      item.id === id ? console.log(item) : ""

    });
  };

  return (
    <div>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7  ${
            ifExists
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {items?.map((item, i) => (
            <Item {...item} saveItem={saveItem} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
