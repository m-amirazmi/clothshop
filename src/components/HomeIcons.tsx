import { Col, Container, Row } from "reactstrap";

const HomeIcons: React.FunctionComponent = (props) => {
	return (
		<Container>
			<Row className="align-item-center justify-content-center">
				{Array(6)
					.fill("")
					.map((item, key) => (
						<Col key={key} xs={2} md={1}>
							<img src={`/images/logos/${key + 1}.png`} alt="Logo" className="w-100" />
						</Col>
					))}
			</Row>
		</Container>
	);
};

export default HomeIcons;
