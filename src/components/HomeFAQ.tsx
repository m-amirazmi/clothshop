import { useState } from "react";
import { Col, Row } from "reactstrap";
import { IHomeFAQProps } from "../utils/interfaces";
import HomeSectionHeader from "./HomeSectionHeader";
import styles from "../scss/modules/homefaqs.module.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const HomeFAQ: React.FunctionComponent<IHomeFAQProps> = ({ faqs }) => {
	const [show, setShow] = useState<string>();

	const handleShow = (id: string) => {
		if (id === show) setShow("0");
		else setShow(id);
	};

	return (
		<HomeSectionHeader title="Frequently Asked Question" subtitle="All your questions about Clothshop answered">
			<Row className="px-2 px-md-0">
				{faqs.map((item) => (
					<Col key={item.id} xs={12} md={6}>
						<div className={`py-1 py-md-2 ${styles.accordionContainer}`}>
							<div className={styles.accordionHeader} onClick={() => handleShow(item.id)}>
								<span>{item.title}</span>
								<span className="text-accent-3">{show !== item.id ? <FiChevronDown /> : <FiChevronUp />}</span>
							</div>
							<div className={`${styles.accordionDesc} ${show === item.id ? styles.open : styles.close}`} dangerouslySetInnerHTML={{ __html: item.description }}></div>
						</div>
					</Col>
				))}
			</Row>
			<div className="text-center w-100 mt-3 mt-md-4">
				<Link to="/faq" className="btn btn-accent-3 text-white px-4 py-2" style={{ fontSize: "14px" }}>
					SEE MORE
				</Link>
			</div>
		</HomeSectionHeader>
	);
};

export default HomeFAQ;
