import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ProductSmall from "./ProductSmall";

const PLPListingPopular: React.FunctionComponent = () => {
	const { products } = useSelector((state: RootState) => state.plp);

	return (
		<div className="mt-4">
			<p style={{ fontSize: "16px", fontWeight: "500" }}>Popular Products</p>
			{products
				.filter((i) => i.isPopular)
				.slice(0, 5)
				.map((item) => (
					<div className="mb-3">
						<ProductSmall product={item} />
					</div>
				))}
		</div>
	);
};

export default PLPListingPopular;
