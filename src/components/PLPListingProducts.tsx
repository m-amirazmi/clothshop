import { Col, Row } from "reactstrap";
import { IPLPListingProps } from "../utils/interfaces";
import Product from "./Product";

const PLPListingProducts: React.FunctionComponent<IPLPListingProps> = ({ products }) => {
	return (
		<Row>
			{products?.map((item) => {
				return (
					<Col xs={6} md={3}>
						<div className="pb-3">
							<Product product={item} />
						</div>
					</Col>
				);
			})}
		</Row>
	);
};

export default PLPListingProducts;
