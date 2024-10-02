import useSWR from "swr";
import StarRating from "./StarRating";
import numeral from "numeral";
import { getReviewsCountByRating } from "@/sanity/query/review";

function HeaderRating() {
  const { data: reviewRatingCount } = useSWR("getReviewsCountByRating", () =>
    getReviewsCountByRating()
  );

  const total = Object.values(reviewRatingCount || {}).reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );
  const formattedNumber = numeral(total).format("0.[0]a");
  return (
    <div>
      <StarRating
        value={5}
        text={<StarRating.Text>{formattedNumber}</StarRating.Text>}
      />
      <p className="text-[9.3px] lg:text-sm mt-[3px] leading-tight font-medium text-[#0d0c22]">
        Customer Satisfaction
      </p>
    </div>
  );
}
export default HeaderRating;
