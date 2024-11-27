import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
const Header = () => {
    const allImages = [
        { id: 1, src: 'https://via.placeholder.com/200?text=Image+1', category: 'Web' },
        { id: 2, src: 'https://via.placeholder.com/200?text=Image+2', category: 'Design' },
        { id: 3, src: 'https://via.placeholder.com/200?text=Image+3', category: 'Blog' },
        { id: 4, src: 'https://via.placeholder.com/200?text=Image+4', category: 'Web' },
        { id: 5, src: 'https://via.placeholder.com/200?text=Image+5', category: 'Design' },
        { id: 6, src: 'https://via.placeholder.com/200?text=Image+6', category: 'Blog' },
        { id: 7, src: 'https://via.placeholder.com/200?text=Image+7', category: 'Web' },
        { id: 8, src: 'https://via.placeholder.com/200?text=Image+8', category: 'Design' },
        { id: 9, src: 'https://via.placeholder.com/200?text=Image+9', category: 'Blog' },
        { id: 10, src: 'https://via.placeholder.com/200?text=Image+10', category: 'Web' },
      
      ];
      const [imagesToShow, setImagesToShow] = useState(allImages.slice(0, 6)); 
      const [filter, setFilter] = useState('All'); 
      const [isExpanded, setIsExpanded] = useState(false);  
    
    
      const filteredImages = filter === 'All'
        ? allImages
        : allImages.filter(image => image.category === filter);
    
   
      const handleShowMore = () => {
        const nextImages = filteredImages.slice(imagesToShow.length, imagesToShow.length + 3);
        setImagesToShow([...imagesToShow, ...nextImages]);  
        setIsExpanded(true); 
      };
    
  
      const handleShowLess = () => {
        setImagesToShow(filteredImages.slice(0, 6));  
        setIsExpanded(false);  
      };
  return (
    <>
   
   <div className="flex justify-center gap-4 py-6">
        {['All', 'Web', 'Design', 'Blog'].map((category) => (
          <button
            key={category}
            onClick={() => {
              setFilter(category);   
              setImagesToShow(filteredImages.slice(0, 6));  
            }}
            className="px-4 py-2 bg-[rgb(197,35,35)] text-white rounded hover:bg-[rgb(129,29,29)] transition"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {imagesToShow.map((image, index) => (
          <div
            key={index}
            className="relative group"
            style={{ height: '200px', width: '100%' }}
          >
            <img
              src={image.src}
              alt={`Gallery ${image.id}`}
              className="w-full h-full object-cover rounded-md group-hover:opacity-50 transition"
            />
            <div className="absolute rounded inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
              <FaSearch className="text-white text-3" />
            </div>
          </div>
        ))}
      </div>

   
      <div className="flex justify-center py-4">
        {!isExpanded ? (
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-[rgb(197,35,35)] text-white rounded hover:bg-[rgb(129,29,29)] transition"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="px-6 py-2 bg-[rgb(197,35,35)] text-white rounded hover:bg-[rgb(129,29,29)] transition"
          >
            Show Less
          </button>
        )}
      </div>
  </>
  );
};

export default Header;
