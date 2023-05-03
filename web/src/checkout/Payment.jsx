import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { globalfetch } from "./../config";

export default function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const getClientSecret = async () => {
    const res = await globalfetch("/create-payment-intent", "POST", {});
    const { clientSecret } = res;
    if (clientSecret) setClientSecret(clientSecret);
  };

  const getConfig = async () => {
    const res = await globalfetch("/config", "GET");
    console.log(res);
    const { publishableKey } = res;
    if (publishableKey) {
      const load = loadStripe(publishableKey);
      console.log(load);
      setStripePromise(load);
    }
  };

  useEffect(() => {
    getClientSecret();
    getConfig();
  }, []);

  return (
    <>
      {/* <h1>React Stripe and the Payment Element</h1> */}
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

// export default Payment;
