import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


const StarComponent = ({ filled, isHalf }) => {
    const starStyle = {
      color: filled ? (isHalf ? "gold" : "gold") : "grey",
    };
  
    return (
      <span style={starStyle}>{isHalf ? <FaStarHalfAlt /> : <FaStar />}</span>
    );
  };
  
  const RatingComponent = ({ rating }) => {
    const maxStars = 5;
    const roundedRating = Math.round(rating * 2) / 2;
  
    const stars = Array.from({ length: maxStars }, (elem, index) => {
      const isHalf = index === roundedRating - 0.5;
      const filled = index < roundedRating || isHalf;
      return { filled, isHalf };
    });
  
    return (
      <div className="rating-container">
        {stars.map((star, index) => (
          <StarComponent key={index} filled={star.filled} isHalf={star.isHalf} />
        ))}
      </div>
    );
  };


  export default RatingComponent;