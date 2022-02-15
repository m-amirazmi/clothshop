import { Col, Row } from "reactstrap";
import { IPLPListingProps } from "../utils/interfaces";
import Product from "./Product";
import ReactPaginate from "react-paginate";
import { usePagination } from "../hooks/usePagination";
import styles from "../scss/modules/plplisting.module.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PLPListing: React.FunctionComponent<IPLPListingProps> = ({ products }) => {
	const { currentItems, handlePageClick, pageCount } = usePagination(products);

	return (
		<>
			{/* Listing Name */}
			<div className="d-flex align-items-center">
				<p>
					<span>All Products</span>
					<span>(213 items)</span>
				</p>
				<div className="ms-auto">Sort By:</div>
			</div>

			{/* Listing Products */}
			<Row>
				{currentItems?.map((item) => {
					return (
						<Col xs={6} md={3}>
							<div className="pb-3">
								<Product product={item} />
							</div>
						</Col>
					);
				})}
			</Row>

			{/* Pagination */}
			<div className="pagination">
				<ReactPaginate breakLabel="..." nextLabel={<FiChevronRight />} onPageChange={handlePageClick} pageCount={pageCount} previousLabel={<FiChevronLeft />} pageRangeDisplayed={2} />
			</div>
		</>
	);
};

export default PLPListing;
