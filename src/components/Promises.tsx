import { Col, Container, Row } from "reactstrap";
import { IPromisesProps } from "../utils/interfaces";

const Promises: React.FunctionComponent<IPromisesProps> = ({ promises }) => {
	return (
		<Container className="mb-5 pt-4">
			<Row className="gap-5 gap-md-0">
				{promises.map((item) => (
					<Col xs={12} md={4} key={item.id}>
						<div className="text-center text-md-start d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
							<div>
								<img src={item.icon} alt={item.id} className="w-100" />
							</div>
							<div>
								<h5 className="mb-1" style={{ fontSize: "18px" }}>
									{item.title}
								</h5>
								<p className="mb-0" style={{ fontSize: "16px", color: "#aaa" }}>
									{item.subtitle}
								</p>
							</div>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Promises;
