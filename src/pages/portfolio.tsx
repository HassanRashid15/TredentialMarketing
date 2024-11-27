import React from 'react'
import PortfolioGallery from "../components/PortfolioGallery"
import PortfolioServices from "../components/PortfolioServices"
import PortfolioTestimonials from "../components/PortfolioTestimonials"
import Newsletter from '../components/Newsletter'
import PricingTable from '../components/PricingTable'
import CaseStudiesLayout from '../components/CaseStudiesLayout'
function Portfolio() {
  return (
    <div className="bg-gray-100">
         <div
        className="bg-gradient-to-br from-black via-gray-900 to-red-900 h-72"
      >
      
        <div className="flex items-center justify-start h-full bg-black bg-opacity-50">
          <div className="text-start text-white max-w-xl px-4">
        
            <h1 className="text-5xl font-bold mb-4">Portfolio</h1>
          </div>
        </div>
      </div>
      <PortfolioGallery />
      <CaseStudiesLayout/>
      <PortfolioServices />
      <PortfolioTestimonials />
      <PricingTable/>
      <Newsletter/>
    </div>
  )
}

export default Portfolio

