import React, { useEffect, useState } from "react";
import Title from "./utils/Title";
import Item from "./utils/Item";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  const itemArr = [];

  // const [itemArr, setItemArr] = useState([]);

  const saveItem = (id) => {
    items.map((item) => {
      item.cartQuantity = 0;

      if (item.id === id) {
        itemArr.push(item);
        item.cartQuantity += 1; //itemArr.length;
      } else {
        return item;
      }
    });

    const filteredArray = itemArr.filter((element, index) => {
      return itemArr.indexOf(element) === index;
    });

    localStorage.setItem("filteredArray", JSON.stringify(filteredArray));
    // console.log(fillme);
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
