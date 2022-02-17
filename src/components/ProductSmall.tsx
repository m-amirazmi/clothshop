import { IProductProps } from "../utils/interfaces";
import styles from "../scss/modules/productsmall.module.scss";
import ProductRating from "./ProductRating";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ProductSmall: React.FunctionComponent<IProductProps> = ({ product }) => {
	const { currency } = useSelector((state: RootState) => state.currency);

	const discountedPrice = currency.rate * (product.price - product.price * product.discount);

	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<img src={product.image} alt={product.name} className="w-100 rounded-3" />
			</div>
			<div className={styles.detailContainer}>
				<h5 className="mb-1">{product.name.slice(0, 25)}</h5>
				{product.rating && <ProductRating rating={product.rating} />}
				<p className="mb-0" style={{ fontSize: "14px" }}>
					{currency.symbol}
					{discountedPrice.toFixed(2)}
					{product.discount > 0 && (
						<span className="ms-2 text-danger text-decoration-line-through">
							{currency.symbol}
							{product.price.toFixed(2)}
						</span>
					)}
				</p>
			</div>
		</div>
	);
};

export default ProductSmall;
