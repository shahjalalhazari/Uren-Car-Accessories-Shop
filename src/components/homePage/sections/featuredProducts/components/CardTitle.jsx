const CardTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center">
      <h6 className="text-body text-sm">{subHeading}</h6>
      <h2 className="font-semibold text-xl">{heading}</h2>
    </div>
  );
};

export default CardTitle;