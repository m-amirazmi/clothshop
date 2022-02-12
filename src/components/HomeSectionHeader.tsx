import { Container } from "reactstrap";
import { IHomeSectionHeader } from "../utils/interfaces";

const HomeSectionHeader: React.FunctionComponent<IHomeSectionHeader> = ({ title, children }) => {
	return (
		<Container className="mb-5 pt-4">
			<div className="text-center mb-4">
				<h2>{title}</h2>
			</div>
			{children}
		</Container>
	);
};

export default HomeSectionHeader;
