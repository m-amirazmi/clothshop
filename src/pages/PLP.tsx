import { Col, Container, Row } from "reactstrap";
import PLPListing from "../components/PLPListing";
import PLPListingFilter from "../components/PLPListingFilter";
import { products } from "../utils/helpers";

interface IPLPProps {}

const PLP: React.FunctionComponent<IPLPProps> = (props) => {
	return (
		<>
			{/* Listing */}
			<Container className="mt-5">
				<Row className="px-2 px-md-0">
					<Col md={10}>
						<PLPListing products={products} />
					</Col>

					{/* This is sidebar */}
					<Col md={2}>
						<PLPListingFilter />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default PLP;
