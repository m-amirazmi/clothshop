import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { IByCategoriesProps, ICategory } from "../utils/interfaces";

const ByCategories: React.FunctionComponent<IByCategoriesProps> = ({ categories }) => {
	const [featured, setFeatured] = useState<ICategory[]>();
	const [nonFeatured, setNonFeatured] = useState<ICategory[]>();

	useEffect(() => {
		const filterFeatured = categories.filter((item) => item.featured);
		const filterNonFeatured = categories.filter((item) => !item.featured);
		setFeatured(filterFeatured);
		setNonFeatured(filterNonFeatured);
	}, []);

	const renderWeb = () => (
		<Row className="d-none d-md-flex">
			{featured?.map((item) => (
				<Col key={item.id} md={4}>
					<div className="pb-4">
						<div className="rounded-2 p-4 position-relative" style={{ background: "#FFF5F5", height: "500px" }}>
							<div className="mb-5">
								<p className="mb-2 text-accent-3" style={{ fontWeight: "400" }}>
									{item.subtitle}
								</p>
								<h5>{item.name}</h5>
								<Link to={`/shop?category=${item.ctaLink}`} style={{ fontSize: "12px", color: "rgba(0,0,0,0.6)" }}>
									{item.ctaText}
								</Link>
							</div>
							<div className="p-1 text-center" style={{ position: "absolute", bottom: "40px" }}>
								<img src={item.image} alt={item.name} style={{ width: "80%" }} />
							</div>
						</div>
					</div>
				</Col>
			))}
			<Col md={8}>
				<Row className="h-50">
					{nonFeatured?.map((item, key) => {
						if (key === 0 || key === 3)
							return (
								<Col key={key} md={7} className="h-100">
									<div className={`position-relative h-100 pb-4`}>
										<div className="h-100 rounded-2 p-4" style={{ background: "#EDF0FF" }}>
											<div className="mb-5">
												<p className="mb-2 text-accent-3" style={{ fontWeight: "400" }}>
													{item.subtitle}
												</p>
												<h5>{item.name}</h5>
												<Link to={`/shop?category=${item.ctaLink}`} style={{ fontSize: "12px", color: "rgba(0,0,0,0.6)" }}>
													{item.ctaText}
												</Link>
											</div>
											<div className="p-3 text-end" style={{ position: "absolute", bottom: "24px", right: "16px" }}>
												<img src={item.image} alt={item.name} style={{ width: "200px" }} />
											</div>
										</div>
									</div>
								</Col>
							);
						else
							return (
								<Col key={key} md={5} className="h-100">
									<div className={`position-relative h-100 pb-4`}>
										<div className="h-100 rounded-2 p-4" style={{ background: "#E9F0F3" }}>
											<div className="mb-5 text-end">
												<p className="mb-2 text-accent-3" style={{ fontWeight: "400" }}>
													{item.subtitle}
												</p>
												<h5>{item.name}</h5>
												<Link to={`/shop?category=${item.ctaLink}`} style={{ fontSize: "12px", color: "rgba(0,0,0,0.6)" }}>
													{item.ctaText}
												</Link>
											</div>
											<div className="p-3 text-start" style={{ position: "absolute", bottom: "24px", left: "0px" }}>
												<img src={item.image} alt={item.name} style={{ width: "140px" }} />
											</div>
										</div>
									</div>
								</Col>
							);
					})}
				</Row>
			</Col>
		</Row>
	);

	const renderMob = () => (
		<Row className="px-2">
			{categories.map((item, key) => (
				<Col xs={12}>
					<div className="pb-4">
						<div
							className={`${key % 2 === 0 ? "text-start" : "text-end"} w-100 rounded-2 p-4`}
							style={{ background: key === 0 ? "#FFF5F5" : key === 1 || key === 3 ? "#EDF0FF" : "#E9F0F3" }}
						>
							<p className="mb-2 text-accent-3" style={{ fontWeight: "400" }}>
								{item.subtitle}
							</p>
							<h5>{item.name}</h5>
							<Link to={`/shop?category=${item.ctaLink}`} style={{ fontSize: "12px", color: "rgba(0,0,0,0.6)" }}>
								{item.ctaText}
							</Link>
							<div className={`${key % 2 === 0 ? "text-end" : "text-start"} p-1 position-relative`} style={{ right: "0px" }}>
								<img src={item.image} alt={item.name} style={{ width: "140px" }} />
							</div>
						</div>
					</div>
				</Col>
			))}
		</Row>
	);

	return (
		<Container className="mb-5 pt-4">
			<div className="text-center mb-4">
				<h2>Shop By Category</h2>
			</div>
			{renderWeb()}
			{renderMob()}
		</Container>
	);
};

export default ByCategories;
