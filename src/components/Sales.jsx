import React, { useEffect, useState } from "react";
import Title from "./utils/Title";
import Item from "./utils/Item";
import toast from "react-hot-toast";

const Sales = ({
  ifExists,
  endpoint: { title, items },
  setCartCount,
  openAndCloseCart,
}) => {
  const saveItem = (id) => {
    const getItem = localStorage.getItem("filteredArray");

    const parseItem = getItem ? JSON.parse(getItem) : [];

    const index = parseItem.findIndex((item) => item.id === id);

    if (index === -1) {
      const item = items.find((inbond) => inbond.id === id);
      item.quantity = 1;
      parseItem.push(item);
      localStorage.setItem("filteredArray", JSON.stringify(parseItem));
      setCartCount(parseItem.length);
    } else {
      parseItem.map((item) => {
        if (item.id === id) {
          item.sumPrice = Number(item.price) * (item.quantity + 1);
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      localStorage.setItem("filteredArray", JSON.stringify(parseItem));
      setCartCount(parseItem.length);

      toast.success(`Item added to Cart`);
    }
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
            <Item
              {...item}
              saveItem={saveItem}
              key={i}
              ifExists={ifExists}
              openAndCloseCart={openAndCloseCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
