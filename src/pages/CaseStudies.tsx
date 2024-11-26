import React from "react";
import "../Styling/casestudie.css"; // Keep custom styles if necessary
import SuccessStories from "../components/SuccessStories";
import CaseStudiesLayout from "../components/CaseStudiesLayout";
import CaseStudiesTestimonial from "../components/CaseStudiesTestimonial";
import CaseStudiesFAQ from "../components/CaseStudiesFAQ";
import PricingTable from "../components/PricingTable";
import Newsletter from "../components/Newsletter";

function CaseStudies() {
  return (
    <div className="casestudeies-parent-custom">
      {/* Background Section */}
      <div
        className="bg-gradient-to-br from-black via-gray-900 to-red-900 h-72"
      >
        {/* Overlay and Content */}
        <div className="flex items-center justify-start h-full bg-black bg-opacity-50">
          <div className="text-start text-white max-w-xl px-4">
            {/* Title */}
            <h1 className="text-5xl font-bold mb-4">Case Studies</h1>
          </div>
        </div>
      </div>
 <SuccessStories/>
<CaseStudiesLayout/>
<CaseStudiesTestimonial/>
<PricingTable/>
<CaseStudiesFAQ/>
<Newsletter/>
    </div>
  );
}

export default CaseStudies;
