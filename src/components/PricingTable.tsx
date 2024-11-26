import React, { useState } from 'react';

const pricingPlans = [
  {
    title: "Basic",
    price: "$19/month",
    features: ["10 Projects", "Basic Support", "5 GB Storage"],
    buttonText: "Choose Plan",
    buttonColor: "bg-indigo-600",
    textColor: "text-gray-900",
    buttonTextColor: "text-white",
    bgColor: "bg-white",
    hoverBgColor: "hover:bg-indigo-700",
    hoverTextColor: "hover:text-white"
  },
  {
    title: "Standard",
    price: "$39/month",
    features: ["50 Projects", "Priority Support", "50 GB Storage"],
    buttonText: "Choose Plan",
    buttonColor: "bg-white",
    textColor: "text-white",
    buttonTextColor: "text-indigo-600",
    bgColor: "bg-indigo-600",
    hoverBgColor: "hover:bg-gray-100",
    hoverTextColor: "hover:text-indigo-600"
  },
  {
    title: "Premium",
    price: "$59/month",
    features: ["Unlimited Projects", "24/7 Support", "Unlimited Storage"],
    buttonText: "Choose Plan",
    buttonColor: "bg-indigo-600",
    textColor: "text-gray-900",
    buttonTextColor: "text-white",
    bgColor: "bg-white",
    hoverBgColor: "hover:bg-indigo-700",
    hoverTextColor: "hover:text-white"
  }
];

function PricingTable() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    // Toggle active state on click
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Choose Your Plan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`flex flex-col p-8 rounded-lg shadow-lg ${plan.bgColor} hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95
              ${activeIndex === index ? 'border-4 border-indigo-600' : ''}`} // Border color when active
            >
              <h3 className={`text-2xl font-semibold ${plan.textColor} mb-4`}>{plan.title}</h3>
              <p className={`text-4xl font-bold ${plan.textColor === "text-white" ? "text-white" : "text-indigo-600"} mb-4`}>
                {plan.price}
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button
                className={`py-2 px-4 rounded-lg ${plan.buttonColor} ${plan.buttonTextColor} ${plan.hoverBgColor} ${plan.hoverTextColor} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingTable;
