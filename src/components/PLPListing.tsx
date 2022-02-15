import { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { IPLPListingProps, IProduct } from "../utils/interfaces";
import Product from "./Product";

const PLPListing: React.FunctionComponent<IPLPListingProps> = ({ products }) => {
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [slice, setSlice] = useState(20);
	const [start, setStart] = useState(1);
	const [end, setEnd] = useState(20);
	const [slicedProducts, setSlicedProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		const totalProducts = products.length;
		const roughTotalPages = totalProducts / slice;
		setTotalPages(Math.ceil(roughTotalPages));
	}, []);

	useEffect(() => {
		const slicePage = slice * page;
		setStart(slicePage - slice + 1);
		setEnd(slicePage);
	}, [page]);

	useEffect(() => {
		const sliced = products.slice(start - 1, end);
		setSlicedProducts(sliced);
	}, [products, page]);

	const handleSelectPage = (key: number) => setPage(key);

	if (slicedProducts.length === 0) return null;

	return (
		<>
			{/* Listing Name */}
			<div className="d-flex align-items-center">
				<p>
					<span>All Products</span>
					<span>(213 items)</span>
				</p>
				<div className="ms-auto">Sort By:</div>
				<input onChange={({ target }) => setPage(+target.value)} />
			</div>

			{/* Listing Products */}
			<Row>
				{slicedProducts?.map((item) => {
					return (
						<Col md={3}>
							<div className="pb-3">
								<Product product={item} />
							</div>
						</Col>
					);
				})}
			</Row>

			{/* Pagination */}
			<div>
				{Array(totalPages)
					.fill("")
					.map((item, key) => (
						<Button key={key} onClick={() => handleSelectPage(key + 2)}>
							{key}
						</Button>
					))}
			</div>
		</>
	);
};

export default PLPListing;
