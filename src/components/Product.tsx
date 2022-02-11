import { FiHeart, FiMoreVertical } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IProductProps } from "../utils/interfaces";
import styles from "../scss/modules/product.module.scss";

const Product: React.FunctionComponent<IProductProps> = ({ product }) => {
	const { currency } = useSelector((state: RootState) => state.currency);

	const discountedPrice = currency.rate * (product.price - product.price * product.discount);

	return (
		<div className={styles.container}>
			<div className={`mb-4 position-relative ${styles.imgContainer}`}>
				<img src={product.image} alt={product.name} className="w-100 rounded-3" />
				<div className={styles.atcContainer}>
					<div className="d-flex gap-2">
						<button className="btn btn-white w-100">ADD TO CART</button>
						<button className="d-none d-md-block btn btn-white">
							<FiHeart />
						</button>
					</div>
				</div>
			</div>
			<div className="text-center">
				<h5 style={{ fontSize: "16px" }}>{product.name}</h5>
				<p style={{ fontSize: "14px" }}>
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

			{/* TAGS */}
			{product.discount ? <span className={`bg-white text-danger px-2 py-1 rounded-2 ${styles.tagDiscount}`}>{product.discount * 100}% OFF</span> : null}
			<span className={`d-md-none text-accent-3 ${styles.wishlist}`}>
				<FiHeart />
			</span>
		</div>
	);
};

export default Product;
