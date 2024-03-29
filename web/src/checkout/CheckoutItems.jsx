import React from "react";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, quantity, sumPrice },
  subTotal,
}) => {
  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-2">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="w-16 h-auto object-fill lg:w-28"
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
              ${price}
            </div>
          </div>
          <div className="grid items-center gap-2">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-sm text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-xs text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex w-full ">
              <div className="bg-theme-cart rounded text-white font-medium lg:text-xs text-[0.7rem] w-4 h-4 lg:h-5 lg:w-6 flex items-center justify-center">
                x{quantity > 1 ? quantity : 1}
              </div>
              <div className="ml-[20%]">
                <h1 className="text-lg lg:text-base text-slate-900 text-[0.8rem] font-medium ">
                  ${quantity > 1 ? sumPrice : price}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
