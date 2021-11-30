import { HiOutlineStar, HiStar } from "react-icons/hi";
import RatingComponent from "react-rating";

export type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => (
  <RatingComponent
    initialRating={rating || 0}
    emptySymbol={<HiOutlineStar size={18} color="#BABFC7" />}
    fullSymbol={<HiStar size={19} color="#F2C94C" />}
    readonly
  />
);

export { Rating };
