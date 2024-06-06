import StarRating from "./StarRating";

function HeaderRating() {
  return (
    <div>
      <StarRating value={5} text={<StarRating.Text>1.8K</StarRating.Text>} />
      <p className="text-[14px] mt-[6px] font-medium text-[#0d0c22]">
        Customer Satisfaction
      </p>
    </div>
  );
}
export default HeaderRating;
