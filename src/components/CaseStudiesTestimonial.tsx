import React, { useState } from 'react';

const CaseStudiesTestimonialdata = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, Company A',
    text: '"This company helped us achieve our goals efficiently. Highly recommended!"',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'CTO, Company B',
    text: '"Their team is incredibly professional and delivered great results."',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    title: 'Product Manager, Company C',
    text: '"I am very impressed with their ability to meet tight deadlines while maintaining quality."',
    image: 'https://via.placeholder.com/100',
  },
];

function CaseStudiesTestimonial() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % CaseStudiesTestimonialdata.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? CaseStudiesTestimonialdata.length - 1 : prev - 1
    );
  };

  return (
    <div className="mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">What Our Clients Say</h2>
      <div className="relative">
        <div className="overflow-hidden rounded-lg shadow-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeTestimonial * 100}%)`,
            }}
          >
            {CaseStudiesTestimonialdata.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full p-6 text-center bg-gray-100 border rounded-lg shadow-md"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                />
                <p className="text-lg italic mb-4">{testimonial.text}</p>
                <p className="font-bold text-xl">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevTestimonial}
          className="absolute  text-white bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-800" style={{top:"-50px" , right :"40px"}}
        >
          &#8592;
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute text-white bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-800" style={{top:"-50px" , right :"0px"}}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default CaseStudiesTestimonial;
