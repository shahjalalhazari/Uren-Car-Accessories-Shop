const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <h6 className="text-[#999] mb-1 lg:mb-2">{subHeading}</h6>
      <h2 className="font-semibold text-2xl lg:text-3xl">{heading}</h2>
    </div>
  );
};

export default SectionHeading;