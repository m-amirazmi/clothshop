import { Col, Container, Row } from "reactstrap";
import { IPromisesProps } from "../utils/interfaces";

const Promises: React.FunctionComponent<IPromisesProps> = ({ promises }) => {
	return (
		<Container>
			<Row>
				{promises.map((item) => (
					<Col xs={12} md={4} key={item.id}>
						<div className="mb-5 text-center text-md-start d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
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
