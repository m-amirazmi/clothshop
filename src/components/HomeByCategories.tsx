import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { IByCategoriesProps, ICategory } from "../utils/interfaces";
import styles from "../scss/modules/homebycategories.module.scss";
import HomeSectionHeader from "./HomeSectionHeader";

const HomeByCategories: React.FunctionComponent<IByCategoriesProps> = ({ categories }) => {
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
						<div className={`p-4 ${styles.webFeaturedContainer}`}>
							<div className="mb-5">
								<p className="mb-2 text-accent-3">{item.subtitle}</p>
								<h5>{item.name}</h5>
								<Link to={`/shop?category=${item.ctaLink}`}>{item.ctaText}</Link>
							</div>
							<div className={`p-1 ${styles.imgContainer}`}>
								<img src={item.image} alt={item.name} />
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
									<div className="position-relative h-100 pb-4">
										<div className={`p-4 ${styles.webNonFeaturedContainerFirst}`}>
											<div className="mb-5">
												<p className="mb-2 text-accent-3">{item.subtitle}</p>
												<h5>{item.name}</h5>
												<Link to={`/shop?category=${item.ctaLink}`}>{item.ctaText}</Link>
											</div>
											<div className={`p-3 ${styles.imgContainer}`}>
												<img src={item.image} alt={item.name} />
											</div>
										</div>
									</div>
								</Col>
							);
						else
							return (
								<Col key={key} md={5} className="h-100">
									<div className="position-relative h-100 pb-4">
										<div className={`p-4 ${styles.webNonFeaturedContainerSecond}`}>
											<div className="mb-5 text-end">
												<p className="mb-2 text-accent-3">{item.subtitle}</p>
												<h5>{item.name}</h5>
												<Link to={`/shop?category=${item.ctaLink}`}>{item.ctaText}</Link>
											</div>
											<div className={`p-3 ${styles.imgContainer}`}>
												<img src={item.image} alt={item.name} />
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
		<Row className="px-2 d-md-none">
			{categories.map((item, key) => (
				<Col xs={12} key={key}>
					<div className="pb-4">
						<div
							className={`${key % 2 === 0 ? "text-start" : "text-end"} w-100 rounded-2 p-4`}
							style={{ background: key === 0 ? "#FFF5F5" : key === 1 || key === 3 ? "#EDF0FF" : "#E9F0F3" }}
						>
							<p className={`mb-2 text-accent-3 ${styles.mobSubtitle}`}>{item.subtitle}</p>
							<h5>{item.name}</h5>
							<Link className={styles.link} to={`/shop?category=${item.ctaLink}`}>
								{item.ctaText}
							</Link>
							<div className={`${key % 2 === 0 ? "text-end" : "text-start"} p-1 position-relative`} style={{ right: "0px" }}>
								<img src={item.image} alt={item.name} className={styles.mobImgContainer} />
							</div>
						</div>
					</div>
				</Col>
			))}
		</Row>
	);

	return (
		<HomeSectionHeader title="Shop By Category">
			{renderWeb()}
			{renderMob()}
		</HomeSectionHeader>
	);
};

export default HomeByCategories;
