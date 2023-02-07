import React, { useEffect, useState } from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import toast from "react-hot-toast";

const Cart = ({ showCart, openAndCloseCart }) => {
  const [localItem, setLocalItem] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);

  useEffect(() => {
    const cartItems = localStorage.getItem("filteredArray") || [];
    cartItems && setLocalItem(JSON.parse(cartItems));
  }, []);

  const incrementItem = (id) => {
    const getItem = localStorage.getItem("filteredArray");
    const parseItem = getItem ? JSON.parse(getItem) : [];

    parseItem.map((item) => {
      if (item.id === id) {
        item.sumPrice = Number(item.price) * (item.quantity + 1);
        return (item.quantity = item.quantity + 1);
      } else {
        return item;
      }
    });
    localStorage.setItem("filteredArray", JSON.stringify(parseItem));
    setLocalItem(parseItem);
    toast.success(`Item QTY Increased`);
  };

  const decrementItem = (id) => {
    const getItem = localStorage.getItem("filteredArray");
    const parseItem = getItem ? JSON.parse(getItem) : [];

    parseItem.map((item) => {
      if (item.id === id) {
        item.sumPrice = Number(item.price) * (item.quantity + 1);
        return (item.quantity = item.quantity - 1);
      } else {
        return item;
      }
    });
    localStorage.setItem("filteredArray", JSON.stringify(parseItem));
    setLocalItem(parseItem);
    toast.success(`Item QTY Decreased`);
  };

  // To delete just a specific item in the CART
  const deleteCartItem = (id) => {
    const getItem = localStorage.getItem("filteredArray");
    const parseItem = getItem ? JSON.parse(getItem) : [];

    const index = parseItem.findIndex((item) => item.id === id);

    if (index > -1) {
      parseItem.splice(index, 1);
      localStorage.setItem("filteredArray", JSON.stringify(parseItem));
      setLocalItem(parseItem);
    }

    toast.success(`Item removed From Cart`);
    // subTotal();
  };

  // To delete All the items in the CART
  const deleteAllCartItem = () => {
    const getItem = localStorage.getItem("filteredArray");

    const parseItem = getItem ? JSON.parse(getItem) : [];
    const clear = parseItem.splice();

    localStorage.setItem("filteredArray", JSON.stringify(clear));
    setLocalItem(clear);
    toast.success(`Cart Cleared`);
  };

  const subTotal = () => {
    const getItem = localStorage.getItem("filteredArray");
    const parseItem = getItem ? JSON.parse(getItem) : [];

    const sumOfPrice = parseItem.map(
      (item) => Number(item.price) * item.quantity
    );
    const result = sumOfPrice.reduce((sum, num) => sum + num, 0);

    localStorage.setItem("total", JSON.stringify(result));
    setSumTotal(result);
  };

  return (
    <>
      {showCart && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
            showCart
              ? "opacity-100 visible translate-x-0 "
              : "opacity-0 invisible translate-x-8"
          } `}
        >
          <div
            className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0   ${
              showCart
                ? "opacity-100 visible translate-x-0 "
                : "opacity-0 invisible translate-x-8"
            }`}
          >
            <CartCount
              openAndCloseCart={openAndCloseCart}
              deleteAllCartItem={deleteAllCartItem}
              subTotal={subTotal}
            />
            {localItem?.length === 0 ? (
              <CartEmpty openAndCloseCart={openAndCloseCart} />
            ) : (
              <div>
                <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                  {localItem?.map((item, i) => (
                    <CartItem
                      key={i}
                      item={item}
                      incrementItem={incrementItem}
                      decrementItem={decrementItem}
                      deleteCartItem={deleteCartItem}
                      subTotal={subTotal}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                  {sumTotal}
                </h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">
                  Taxes and Shipping Will Calculate At Shipping
                </p>
                <button
                  onClick={subTotal}
                  type="button"
                  className="button-theme bg-theme-cart text-white"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

{
  /* {cartItems?.length === 0 ? <CartEmpty /> : <div>
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div> */
}

// ${
//   ifCartState
//     ? "opacity-100 visible translate-x-0"
//     : "opacity-0 invisible translate-x-8"
// }

// ${
//   ifCartState
//     ? "opacity-100 visible translate-x-0"
//     : "opacity-0 invisible translate-x-8"
// }
