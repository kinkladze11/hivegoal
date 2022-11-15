import { useState } from "react";
import Router from "next/router";
import axios from "axios";

import Layout from "@components/organisms/Layout";

import plans from "../config/plans.json";
import { ActionTypes, useGlobalState } from "../global_state";
import { updateUser } from "../helpers/firebase";
import getStripe from "../helpers/stripe";
const Subscription = () => {
  const [loading, setLoading] = useState(false);
  const [{ user }, dispatch] = useGlobalState();
  async function handlePurchase(amount, subscriptionName) {
    setLoading(true);

    if (!user) {
      Router.push("/signup");
    } else {
      const response = await axios.post("/api/checkout_sessions", {
        amount,
        subscriptionName,
        userEmail: user.email,
      });
      // Redirect to Checkout.
      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: response.data.id,
      });
    }
  }
  const active =
    user?.premium && new Date().getTime() < new Date(user?.premium).getTime();
  return (
    <Layout>
      <div className="mx-auto my-5 w-full bg-[url('/foo.jpg')] bg-cover py-5 text-center xl:w-2/5">
        <h2 className="mt-10 text-3xl text-white">
          WIN PREDICTIONS WITH PREMIUM TOOLS
        </h2>
        {active && (
          <div className={"mt-8 text-2xl font-bold text-white"}>
            Membership ends on : {new Date(user.premium).toLocaleDateString()}
          </div>
        )}
        {!active && (
          <div className={"mt-8 text-2xl font-bold text-white"}>
            No Active membership
          </div>
        )}
        <div
          className={
            "my-9 mx-8 flex flex-wrap justify-center gap-8 md:flex-nowrap"
          }
        >
          {plans.plans.map((plan) => (
            <div className={"w-full rounded-lg bg-white p-6 shadow-lg"}>
              <div className={"text-lg font-bold"}> {plan.name} </div>
              <div className={"mt-3"}>{plan.duration} days</div>
              <div className={"mt-3 font-bold"}>€{plan.amount}</div>
              <button
                onClick={() => handlePurchase(plan.amount, plan.name)}
                disabled={loading}
                className="my-4 rounded-lg bg-red-700 p-3 text-white"
              >
                PURCHASE
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Subscription;
