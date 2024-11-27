import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Building modern and responsive websites.',
    image: 'https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg',
  },
  {
    title: 'Brand Design',
    description: 'Crafting unique brand identities and logos.',
    image: 'https://cdn.logojoy.com/wp-content/uploads/20201117163031/mississppi_ricks_banner-1-scaled.jpg',
  },
  {
    title: 'Marketing Strategy',
    description: 'Creating effective marketing campaigns.',
    image: 'https://i0.wp.com/virtualsnipers.com/blog/wp-content/uploads/2023/01/Developing-a-Comprehensive-Marketing-Strategy-in-2023.jpg',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving website visibility and rankings.',
    image: 'https://cdn.shopify.com/s/files/1/0840/8370/3830/articles/1603954182-seo-article-header.png?v=1714646999',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Building online stores for businesses.',
    image: 'https://unlimitedexposure.com/images/articles/e-commerce-solutions-toronto.jpg',
  },
  {
    title: 'App Development',
    description: 'Creating mobile apps for various platforms.',
    image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg',
  },
];

const OurServices = () => {

  const [visibleServices, setVisibleServices] = useState(3);


  const toggleServices = () => {
    if (visibleServices === 3) {
      setVisibleServices(services.length); 
    } else {
      setVisibleServices(3); 
    }
  };

  return (
    <div className="text-center py-10 px-4">
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {services.slice(0, visibleServices).map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
   
            <div className="mb-4 h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
       
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
         
            <p className="text-gray-400 mb-4">{service.description}</p>
      
            <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
 
      <button
        onClick={toggleServices}
        className="mt-6 px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
      >
        {visibleServices === 3 ? 'Show More' : 'Show Less'}
      </button>
    </div>
  );
};

export default OurServices;
