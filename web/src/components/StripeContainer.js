import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51MYjoPBMILLyJ3FV8n52OhswnYfWt3S4yq0xEG4YsdzXXsiD2So62Tkj6IBfIwxgXK0Jjtzd1jGh6bI5N5iuxGRc00Su7nZ74J";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return <Elements stripe={stripeTestPromise}>
  <PaymentForm />
  </Elements>;
};

export default StripeContainer;
