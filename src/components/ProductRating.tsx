import { ProductIRatingProps } from "../utils/interfaces";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const ProductRating: React.FunctionComponent<ProductIRatingProps> = ({ rating }) => {
	const renderRating = () => {
		const _icon = [];
		for (let x = 0; x < 5; x++) {
			if (rating - x <= 0.5 && rating - x >= 0.1) _icon.push(<BsStarHalf className="text-accent-3" />);
			else if (x < rating) _icon.push(<BsStarFill className="text-accent-3" />);
			else _icon.push(<BsStar className="text-accent-3" />);
		}
		return (
			<div className={`mt-1 d-flex gap-1 align-self-start align-items-center fw-normal`}>
				<div style={{ marginTop: "-4px", fontSize: "14px" }}>{_icon}</div>
				<span className="" style={{ fontSize: "14px" }}>
					{rating.toFixed(1)}
				</span>
			</div>
		);
	};

	return renderRating();
};

export default ProductRating;
