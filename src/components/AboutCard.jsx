import React from 'react';

const AboutCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col bg-sunglow lg:w-96  text-black h-96 text-center rounded-lg p-4">
      {/* Icon section */}
      <div className="flex justify-center mb-4">
        <Icon className="h-12 w-12 text-black" /> {/* Using the passed icon prop */}
      </div>

      {/* Title and Description */}
      <h2 className="font-taviraj font-bold text-2xl mb-2">{title}</h2>
      <p className="text-black font-heebo px-2">{description}</p>
    </div>
  );
};

export default AboutCard;
