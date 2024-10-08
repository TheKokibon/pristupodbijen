import React from 'react';

const Headings = ({ title }) => {
  return (
    <div className="relative w-full text-center py-12">
      {/* Smudge Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-80" 
           style={{ backgroundImage: "url('/assets/smudge.png')" }}>
      </div>

      {/* Heading Text */}
      <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
        {title}
      </h1>
    </div>
  );
};

export default Headings;
