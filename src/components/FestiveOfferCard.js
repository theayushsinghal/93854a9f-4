import React from "react";
import OfferDetails from "./OfferDetails";
import "../styles/FestiveOfferCard.css";

const FestiveOfferCard = ({ offer }) => {
  return (
    <div className="w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
      {/* Card Header with Gradient */}
      <div className="h-16 bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-between px-6">
        <div className="flex items-center">
          {/* TVS Credit Logo */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="30" height="30"><rect width="256" height="256" fill="none"/><circle cx="68" cy="128" r="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><ellipse cx="184" cy="128" rx="24" ry="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="244" y1="72" x2="244" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </div>
          <h2 className="text-white font-bold text-xl">TVS Credit</h2>
        </div>
        <div className="bg-yellow-400 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Festive Offer
        </div>
      </div>

      {/* Card Banner Image */}
      <div className="relative h-48 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1523951778169-4cb35545bfa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxGZXN0aXZlJTJCY2VsZWJyYXRpb24lMkJ3aXRoJTJCVFZTJTJCQ3JlZGl0JTJCYmFubmVyJTJCc2hvd2luZyUyQmhhcHB5JTJCZmFtaWx5JTJCd2l0aCUyQnR3by13aGVlbGVyfGVufDB8fHx8MTc0Njc2NDE2MHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Festive celebration with TVS Credit banner showing happy family with two-wheeler" />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent h-24 flex items-end">
          <div className="px-6 pb-4">
            <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-md font-semibold">
              Limited Time Offer
            </span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Offer Tag */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            Two-Wheelers
          </span>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            Personal Loans
          </span>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            Used Cars
          </span>
        </div>
        
        {/* Offer Details Component */}
        <OfferDetails offer={offer} />
      </div>

      {/* Card Footer */}
      <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-t border-gray-200">
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><path d="M96.44,156c2.54,11.35,15.7,20,31.56,20,17.67,0,32-10.75,32-24,0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M214,146.69A48,48,0,0,1,146.69,214,88.07,88.07,0,0,1,42,109.31,48,48,0,0,1,109.31,42,88.07,88.07,0,0,1,214,146.69Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </span>
          <span>1800-103-5005</span>
        </div>
        <div className="flex space-x-3">
          <a href="#" className="text-green-700 hover:text-green-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><path d="M152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L98.65,121.6l1.65,4a56.47,56.47,0,0,0,30.15,30.15l4,1.65,18.17-12.12,23,11.48A24,24,0,0,1,152,176Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </a>
          <a href="#" className="text-green-700 hover:text-green-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><polyline points="176 152 224 104 176 56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="192 216 32 216 32 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M72,176a96,96,0,0,1,93-72h59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// Default props with sample data
FestiveOfferCard.defaultProps = {
  offer: {
    title: "Diwali Special Finance Scheme",
    description: "Celebrate Diwali with TVS Credit's special financing options at lowest-ever interest rates and exciting cashback offers.",
    benefits: [
      "Interest rates starting at just 6.99% p.a.",
      "Zero down payment on select models",
      "100% on-road funding available",
      "Quick approval within 3 hours"
    ],
    validTill: "November 30, 2023",
    savingsPercent: "30",
    onApply: () => console.log("Apply button clicked")
  }
};

export default FestiveOfferCard;