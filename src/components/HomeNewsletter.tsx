import { FiArrowRight } from "react-icons/fi";
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import styles from "../scss/modules/homenewsletter.module.scss";

const HomeNewsLetter: React.FunctionComponent = (props) => {
	const handleSubmit = (e: any) => e.preventDefault();

	return (
		<div className="mb-5 pt-4">
			<Container className="bg-accent-3-light">
				<Row>
					<Col md={6}>
						<div className="p-5 d-flex flex-column justify-content-center h-100">
							<p className={`${styles.subtitle} text-accent-3`}>Newsletter</p>
							<h3 className={styles.title}>Subscribe To Our Newsletter</h3>
							<div>
								<Form className="position-relative" onSubmit={handleSubmit}>
									<FormGroup>
										<Input name="email" placeholder="Enter your email" type="email" style={{ padding: "20px", border: "none", borderRadius: "8px" }} />
									</FormGroup>
									<button
										aria-label="Submit"
										className="btn btn-accent-3 text-white rounded-3"
										style={{ fontSize: "20px", position: "absolute", right: "10px", top: "50%", transform: "translate(0%, -50%)" }}
									>
										<FiArrowRight />
									</button>
								</Form>
							</div>
						</div>
					</Col>
					<Col md={6} className="p-0 d-none d-md-block">
						<img src="/images/newsletter/1.webp" alt="Newsletter" className="w-100" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HomeNewsLetter;
