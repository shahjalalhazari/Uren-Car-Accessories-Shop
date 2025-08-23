import React from 'react';

const SectionHeading = ({ heading, subHeading}) => {
  return (
    <div className="text-center mb-8 md:mb-10 lg:mb-12">
      <h6 className="text-body mb-1 lg:mb-2">{subHeading}</h6>
      <h2 className="font-semibold text-2xl lg:text-3xl">{heading}</h2>
    </div>
  );
};

export default SectionHeading;