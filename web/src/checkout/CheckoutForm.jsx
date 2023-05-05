import { PaymentElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
// import CartItem from "./../components/cart/CartItem";
import CheckoutItems from "../checkout/CheckoutItems";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const [localItem, setLocalItem] = useState([]);
  const [localTotal, setLocalTotal] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("filteredArray") || null;
    cartItems && setLocalItem(JSON.parse(cartItems));

    const cartTotal = localStorage.getItem("total") || null;
    cartTotal && setLocalTotal(JSON.parse(cartTotal));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <div className="w-screen h-screen lg:grid lg:h-full flex items-center justify-center content-center gap-x-5 mt-8">
      <div>
        <p className="font-medium text-lg text-slate-900 ">Cart Item</p>
        {localItem?.length === 0 ? (
          <p>Select an item to add to cart</p>
        ) : (
          <div>
            <div className="flex items-start justify-start flex-col gap-y-1 lg:gap-y-5 overflow-y-scroll h-[81vh] lg:h-full scroll-smooth scroll-hidden py-3">
              {localItem?.map((item, i) => (
                <CheckoutItems
                  key={i}
                  item={item}
                  // incrementItem={incrementItem}
                  // decrementItem={decrementItem}
                  // deleteCartItem={deleteCartItem}
                  // subTotal={subTotal}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <form
        className="flex items-start justify-start flex-col gap-y-1 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3"
        id="payment-form"
        onSubmit={handleSubmit}
      >
        <PaymentElement id="payment-element" />
        <button
          className="bg-theme-cart rounded text-white font-medium lg:text-xs text-[0.7rem] w-full h-7 lg:h-8 lg:w-full flex items-center justify-center"
          disabled={isProcessing || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isProcessing ? "Processing ... " : "Pay now"} ${localTotal}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
