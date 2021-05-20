import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Isg3RAwZQpuc2HcmvnBwKdHfHaEL9ctQQlwCAagEOmuaN7jV6RsNBaFauSA4IVk3K1Gcs0JqxhiJCEoiUDM5iiK00Rsjc8NM0";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;