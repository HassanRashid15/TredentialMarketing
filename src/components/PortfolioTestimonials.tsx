import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion'; 

const testimonials = [
  { name: 'John Doe', feedback: 'Amazing service and great design! Their team really understands customer needs and brings creativity into every project.', image: 'https://via.placeholder.com/150/0000FF/808080?Text=John+Doe' },
  { name: 'Jane Smith', feedback: 'The team exceeded my expectations! They handled every aspect of the project professionally and delivered outstanding results.', image: 'https://via.placeholder.com/150/0000FF/808080?Text=Jane+Smith' },
  { name: 'Sam Wilson', feedback: 'Highly recommend for branding needs. The final design was beyond what I envisioned, and their attention to detail was amazing.', image: 'https://via.placeholder.com/150/0000FF/808080?Text=Sam+Wilson' },
];

const Testimonials = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
  };

  return (
    <div className="py-10 bg-gray-900 rounded-tl-[30px] rounded-tr-[30px] text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
      <div className="max-w-4xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 flex flex-col items-center space-y-6 bg-transparent shadow-xl hover:shadow-2xl transition duration-500 ease-in-out rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 filter grayscale-50 hover:grayscale-0 transition duration-500 ease-in-out"
                />
              </motion.div>

              <motion.h4
                className="text-2xl font-semibold mb-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.3 }}
              >
                {testimonial.name}
              </motion.h4>
              <motion.p
                className="text-gray-400 italic text-lg text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                "{testimonial.feedback}"
              </motion.p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
