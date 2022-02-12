import { Col, Container, Row } from "reactstrap";
import { IPopularProductsProps } from "../utils/interfaces";
import HomeSectionHeader from "./HomeSectionHeader";
import Product from "./Product";

const HomePopularProducts: React.FunctionComponent<IPopularProductsProps> = ({ products }) => {
	return (
		<HomeSectionHeader title="Popular Products">
			<Row className="px-2 px-md-0">
				{products.map((item) => {
					return (
						<Col xs={6} md={3}>
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
