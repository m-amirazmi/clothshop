import { Col, Container, Row } from "reactstrap";
import { IPopularProductsProps } from "../utils/interfaces";
import Product from "./Product";

const PopularProducts: React.FunctionComponent<IPopularProductsProps> = ({ products }) => {
	return (
		<Container className="mb-5 pt-4">
			<div className="text-center mb-4">
				<h2>Popular Products</h2>
			</div>
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
		</Container>
	);
};

export default PopularProducts;
