import { IPLPListingSortProps } from "../utils/interfaces";

const PLPListingSort: React.FunctionComponent<IPLPListingSortProps> = ({ length, name }) => {
	return (
		<div className="d-flex align-items-center">
			<p>
				<span>All Products</span>
				<span>({length} items)</span>
			</p>
			<div className="ms-auto">Sort By:</div>
		</div>
	);
};

export default PLPListingSort;

// SORT (A-Z, Prices, Featured)
