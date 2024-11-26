import React from 'react';

const caseStudiesData = [
  {
    id: 1,
    title: 'Project A',
    description: 'A brief description of Project A.',
    image: 'https://images.unsplash.com/photo-1727707185480-a50e6090b58c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Unsplash random technology image
  },
  {
    id: 2,
    title: 'Project B',
    description: 'A brief description of Project B.',
    image: 'https://images.unsplash.com/photo-1727707185480-a50e6090b58c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Unsplash random business image
  },
  {
    id: 3,
    title: 'Project C',
    description: 'A brief description of Project C.',
    image: 'https://images.unsplash.com/photo-1727707185480-a50e6090b58c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Unsplash random startup image
  },
];

function CaseStudiesLayout() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Project</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {caseStudiesData.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            <div className="relative group">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:text-yellow-300">
                <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
                <p className="text-sm">{caseStudy.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudiesLayout;
