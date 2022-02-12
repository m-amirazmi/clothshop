import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import styles from "../scss/modules/footer.module.scss";
import { Link } from "react-router-dom";
import footer from "../data/footerdata.json";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer: React.FunctionComponent = () => {
	return (
		<div className="pt-5">
			<div className={styles.container}>
				<Container>
					<div className={styles.imgContainer}>
						<img src="/images/logo.svg" alt="logo" />
					</div>

					<div className="d-flex align-items-center justify-content-center mt-4 mb-5">
						<div className="px-2">
							<FiFacebook className={styles.icon} fontSize={20} />
						</div>
						<div className="px-2">
							<FiInstagram className={styles.icon} fontSize={20} />
						</div>
						<div className="px-2">
							<FiTwitter className={styles.icon} fontSize={20} />
						</div>
					</div>

					<Row className="px-2 px-md-0 text-center">
						{footer.data.map((item) => (
							<Col key={item.id} xs={4} md={2}>
								<Link to={item.link} className="pb-2 pb-md-0">
									<h6 className="text-uppercase" style={{ fontWeight: "400" }}>
										{item.name}
									</h6>
								</Link>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Footer;
