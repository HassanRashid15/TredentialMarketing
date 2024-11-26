import React from 'react';
import { useInView } from 'react-intersection-observer';

// Masonry items with Unsplash image links
const masonryItems = [
  { id: 1, content: 'Item 1', image: 'https://plus.unsplash.com/premium_photo-1661938316795-02d427070b15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFya2V0aW5nJTIwYWdlbmN5fGVufDB8fDB8fHww' },
  { id: 2, content: 'Item 2', image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nJTIwYWdlbmN5fGVufDB8fDB8fHww' },
  { id: 3, content: 'Item 3', image: 'https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFya2V0aW5nJTIwYWdlbmN5fGVufDB8fDB8fHww' },
  { id: 4, content: 'Item 4', image: 'https://source.unsplash.com/300x500/?nature,sky' },
  { id: 5, content: 'Item 5', image: 'https://source.unsplash.com/300x300/?nature,landscape' },
  { id: 6, content: 'Item 6', image: 'https://source.unsplash.com/300x700/?nature,beach' },
];

const MasonarySlider = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Masonry Layout with Slide-Up/Down Animation</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {masonryItems.map((item) => (
          <MasonryItem key={item.id} content={item.content} image={item.image} />
        ))}
      </div>
    </div>
  );
};

const MasonryItem = ({ content, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the item enters the viewport
    threshold: 0.1, // Trigger when at least 10% of the element is in view
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <img
        src={image}
        alt={content}
        className="w-full h-auto object-cover"
        loading="lazy" // Lazy load the images
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{content}</h3>
      </div>
    </div>
  );
};

export default MasonarySlider;
