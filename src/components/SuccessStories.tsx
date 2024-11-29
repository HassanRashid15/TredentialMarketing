import React, { useState } from 'react';

function SuccessStories() {
  const [showAll, setShowAll] = useState(false); // State to track whether to show all cards or not

  const successStories = [
    { title: 'Project Title 1', description: 'A brief description of the case study and its impact.' },
    { title: 'Project Title 2', description: 'A brief description of the case study and its impact.' },
    { title: 'Project Title 3', description: 'A brief description of the case study and its impact.' },
    { title: 'Project Title 4', description: 'A brief description of the case study and its impact.' },
    { title: 'Project Title 5', description: 'A brief description of the case study and its impact.' },
    { title: 'Project Title 6', description: 'A brief description of the case study and its impact.' }
  ];

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="services-success-story">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800">
              Our Success Stories
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              See how we’ve helped businesses thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories
              .slice(0, showAll ? successStories.length : 3)
              .map((story, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative"
                >
                  <img
                    src="https://via.placeholder.com/400x200"
                    alt="Case Study Thumbnail"
                    className="w-full h-48 object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent"
                    style={{ bottom: "0" }}
                  />
                  <div className="p-6 relative">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{story.description}</p>
                    <a
                      href="#"
                      className="text-red-600 font-medium hover:underline"
                    >
                      View More &rarr;
                    </a>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleToggle}
              className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-red-800 transition duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
