const OfferBadge = ({ discountOf }) => {
  return (
    <div className="bg-secondary py-1 px-2 text-base-100 text-[10px]  font-semibold">
      {discountOf}% OFF
    </div>
  );
};

export default OfferBadge;