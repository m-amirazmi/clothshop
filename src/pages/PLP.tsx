import { Col, Container, Row } from "reactstrap";
import PLPListing from "../components/PLPListing";
import Product from "../components/Product";
import { products } from "../utils/helpers";

interface IPLPProps {}

const PLP: React.FunctionComponent<IPLPProps> = (props) => {
	return (
		<>
			{/* Listing */}
			<Container className="mt-5">
				<Row className="px-2">
					<Col md={9}>
						<PLPListing products={products} />
					</Col>

					{/* This is sidebar */}
					<Col md={3}>
						<p>This is sidebar</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default PLP;
