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

      <div className="bg-gradient-to-br from-black via-gray-900 to-red-900 h-72">
        {/* Overlay and Content */}
        <div className="flex items-center justify-start h-full bg-black bg-opacity-50">
          <div className="text-start text-white px-4 user-case-studies-custom">
            <h1 className="text-5xl font-bold mb-4">Case Studies</h1>
          </div>
        </div>
      </div>
      <div className="services-content-custom flex items-center mb-8 px-4 relative">
        <h1 className="text-3xl font-bold">
          We Create Best <span>Products</span>
        </h1>
        <h2>Trendtial</h2>
        <p className="mt-4 text-gray-600">
          We’re on a mission to start a conversation with your customers in this
          fast connected world. Let’s discover, build and grow your digital
          business
        </p>
      </div>
      <SuccessStories />
      <CaseStudiesLayout />
      <CaseStudiesTestimonial />
      <PricingTable />
      <CaseStudiesFAQ />
      <Newsletter />
    </div>
  );
}

export default CaseStudies;
