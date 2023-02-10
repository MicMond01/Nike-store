import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  // const [clientSecret, setClientSecret] = useState("");
  console.log("hiiiiiiiiii");

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      // setStripePromise(loadStripe(publishableKey));
      console.log(publishableKey);
    });
  }, []);

  // useEffect(() => {
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     body: JSON.stringify({}),
  //   }).then(async (result) => {
  //     var { clientSecret } = await result.json();
  //     setClientSecret(clientSecret);
  //   });
  // }, []);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
    </>
  );
}

export default Payment;
