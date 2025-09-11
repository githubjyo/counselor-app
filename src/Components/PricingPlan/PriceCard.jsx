import React from "react";

const PriceCard = ({ data }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h3 className="card-price text-success mt-4 mb-4">
            ${data.price} <small>/mo</small>
          </h3>
          <h5 className="card-title mb-4">{data.type}</h5>
          <hr />
          <ul className="list-unstyled mt-4 mb-4">
            {data.plans.map((plan, index) => (
              <li key={index} className="mt-4 mb-4">✔ {plan}</li>
            ))}
          </ul>
          <button className="btn btn-success price-button w-100 mt-4 mb-4">{data.btn}</button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
