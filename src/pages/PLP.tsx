import { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import PLPListing from "../components/PLPListing";
import PLPListingFilter from "../components/PLPListingFilter";
import { products } from "../utils/helpers";
import { filterInitial } from "../redux/features/plpFilterSlice";
import { plpPending, plpSetProducts } from "../redux/features/plpSlice";

const PLP: FunctionComponent = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(filterInitial(products));
		dispatch(plpPending());
		dispatch(plpSetProducts(products));
	}, []);

	return (
		<>
			{/* Listing */}
			<Container className="mt-5">
				<Row className="px-2 px-md-0">
					<Col md={9}>
						<PLPListing />
					</Col>

					{/* This is sidebar */}
					<Col md={3}>
						<PLPListingFilter />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default PLP;
