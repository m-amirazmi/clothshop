import { Container } from "reactstrap";
import { IHomeSectionHeader } from "../utils/interfaces";
import styles from "../scss/modules/homesectionheader.module.scss";

const HomeSectionHeader: React.FunctionComponent<IHomeSectionHeader> = ({ title, subtitle, icon, children }) => {
	return (
		<Container className="mb-5 pt-4">
			{icon && <div className={styles.logo}>{icon}</div>}
			<div className="text-center mb-4">
				<h2>{title}</h2>
				{subtitle && <p className="mt-3">{subtitle}</p>}
			</div>
			{children}
		</Container>
	);
};

export default HomeSectionHeader;
