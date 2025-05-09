import React, { useState } from "react";
import FestiveOfferCard from "./components/FestiveOfferCard";
import Navbar from "./components/Navbar";
import "./styles/FestiveOfferCard.css";
import "./styles/Navbar.css";

function App() {
  // Sample offer data for the TVS Credit festive offer
  const festiveOffer = {
    title: "Diwali Dhamaka Finance Offer",
    description: "Celebrate this festive season with TVS Credit's special financing options tailored for your needs. Enjoy exclusive benefits and hassle-free approvals.",
    benefits: [
      "Interest rates starting at just 6.99% p.a.",
      "Zero processing fee for limited period",
      "Instant approval within 3 hours",
      "Extended repayment tenure options"
    ],
    validTill: "November 30, 2023",
    savingsPercent: "25",
    onApply: () => console.log("Festive offer application initiated")
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="text-green-600">TVS Credit</span> Festive Offers
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-gray-500 sm:text-lg">
              Exclusive deals to celebrate the festive season with India's leading NBFC.
            </p>
          </div>
          
          <div className="flex justify-center">
            <FestiveOfferCard offer={festiveOffer} />
          </div>
          
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>
              TVS Credit Services Ltd. - A leading Non-Banking Finance Company in India
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} TVS Credit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;