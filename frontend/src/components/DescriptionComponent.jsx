import React from 'react';

const DescriptionComponent = ({ description, subtitle }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {subtitle && (
        <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-4">
          {subtitle}
        </h2>
      )}
      <p className="text-lg text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default DescriptionComponent;