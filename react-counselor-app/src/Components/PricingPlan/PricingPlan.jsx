import React from "react";
import PriceCard from "./PriceCard";

const PricePlan = [
  {
    id: 1,
    price: 49,
    type: "For Adults",
    plans: ["Individual Counseling", "Couples Therapy", "Family Therapy"],
    btn: "GET STARTED",
  },
  {
    id: 2,
    price: 79,
    type: "For Children",
    plans: [
      "Counseling for Children",
      "Behavioral Management",
      "Educational Counseling",
    ],
    btn: "GET STARTED",
  },
  {
    id: 3,
    price: 109,
    type: "For Business",
    plans: [
      "Consultancy Services",
      "Employee Counseling",
      "Psychological Assessment",
    ],
    btn: "GET STARTED",
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section py-5 text-center">
      <div className="container">
        <h6 className="text-success">PRICE & PLANS</h6>
        <h2 className="mb-5">Affordable Packages</h2>
        <div className="row justify-content-center">
          {PricePlan.map((plan) => (
            <PriceCard key={plan.id} data={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
