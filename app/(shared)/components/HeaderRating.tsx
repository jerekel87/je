import StarRating from "./StarRating";

function HeaderRating() {
  return (
    <div>
      <StarRating value={5} text={<StarRating.Text>1.8K</StarRating.Text>} />
      <p className="text-[9.3px] lg:text-sm mt-[3px] leading-tight font-medium text-[#0d0c22]">
        Customer Satisfaction
      </p>
    </div>
  );
}
export default HeaderRating;
