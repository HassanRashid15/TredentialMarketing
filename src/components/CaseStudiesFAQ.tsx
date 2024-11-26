import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'What is React?',
    answer:
      'React is a JavaScript library for building user interfaces, developed by Facebook.',
  },
  {
    id: 2,
    question: 'How do I install React?',
    answer:
      'You can install React via npm or yarn by running `npm install react` or `yarn add react`.',
  },
  {
    id: 3,
    question: 'What are props in React?',
    answer:
      'Props are short for properties. They are used to pass data to components.',
  },
];

const CaseStudiesFAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq) => (
          <div key={faq.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div
              onClick={() => toggle(faq.id)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span
                className={`transform transition-transform duration-300 ${
                  open === faq.id ? 'rotate-180' : ''
                }`}
              >
                &#9660;
              </span>
            </div>
            {open === faq.id && (
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesFAQ;
