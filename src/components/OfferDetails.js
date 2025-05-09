import React from "react";

const OfferDetails = ({ offer }) => {
  return (
    <div className="flex flex-col space-y-4 w-full">
      {/* Offer Title */}
      <h3 className="text-lg md:text-xl font-bold text-green-800">
        {offer.title}
      </h3>
      
      {/* Offer Description */}
      <p className="text-sm md:text-base text-gray-600">
        {offer.description}
      </p>
      
      {/* Benefits List */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-green-700">Key Benefits:</h4>
        <ul className="space-y-1 ml-1">
          {offer.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start text-sm">
              <span className="text-green-600 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="192 176 127.99 136 64 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Offer Validity */}
      <div className="text-xs text-gray-500 italic">
        Valid till: {offer.validTill}
      </div>
      
      {/* Percent or Amount Saved */}
      {offer.savingsPercent && (
        <div className="bg-green-100 text-green-800 font-bold py-1 px-3 rounded-full text-sm inline-flex items-center w-fit">
          Save up to {offer.savingsPercent}%
        </div>
      )}
      
      {/* CTA Button */}
      <button 
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md font-medium transition-colors duration-200 mt-2 w-full md:w-auto"
        onClick={offer.onApply}
      >
        Apply Now
        <span className="ml-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 96 96 96 96 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="160" x2="96" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
        </span>
      </button>
      
      {/* Terms & Conditions */}
      <div className="text-xs text-gray-400 mt-2">
        *T&C Apply. Contact our customer support for more details.
      </div>
    </div>
  );
};

// Default props with sample data
OfferDetails.defaultProps = {
  offer: {
    title: "Festival Season Special Offer",
    description: "Celebrate this festive season with special interest rates and cashback on all TVS Credit loans.",
    benefits: [
      "Reduced interest rates starting at 7.99% p.a.",
      "Zero processing fees on select products",
      "Instant approval with minimal documentation",
      "Flexible repayment options up to 60 months"
    ],
    validTill: "December 31, 2023",
    savingsPercent: "25",
    onApply: () => console.log("Apply button clicked")
  }
};

export default OfferDetails;