import { BiSolidStar, BiSolidStarHalf, BiStar } from 'react-icons/bi';

const ProductRating = ({ rating, text = "sm" }) => {
  const renderStars = () => {
    const totalStars = 5;

    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (rating >= i) {
        // Full star
        stars.push(<BiSolidStar key={i} className="text-primary" />);
      } else if (rating > i - 1) {
        // Half star
        stars.push(<BiSolidStarHalf key={i} className="text-primary" />);
      } else {
        // Empty star
        stars.push(<BiStar key={i} className="text-body" />);
      }
    }
    return stars;
  };

  return (
    <div className={`flex items-center gap-x-1 text-${text}`}>
      {renderStars()}
      <span className={`text-dark-gray`}>&#40;{rating}&#41;</span>
    </div>
  );
};

export default ProductRating;