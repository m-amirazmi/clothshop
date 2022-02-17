import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { RootState } from "../redux/store";
import { IPopularProductsProps } from "../utils/interfaces";
import HomeSectionHeader from "./HomeSectionHeader";
import Product from "./Product";

const HomePopularProducts: React.FunctionComponent = () => {
	const { products } = useSelector((state: RootState) => state.plp);

	return (
		<HomeSectionHeader title="Popular Products">
			<Row className="px-2 px-md-0">
				{products
					.filter((i) => i.isPopular)
					.slice(0, 8)
					.map((item) => {
						return (
							<Col key={item.id} xs={6} md={3}>
								<div className="mb-4">
									<Product product={item} />
								</div>
							</Col>
						);
					})}
			</Row>
		</HomeSectionHeader>
	);
};

export default HomePopularProducts;
