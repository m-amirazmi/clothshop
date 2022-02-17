import { FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { titleCase } from "../utils/helpers";
import styles from "../scss/modules/breadcrumbs.module.scss";

const BreadCrumbs: React.FunctionComponent = () => {
	const { pathname } = useLocation();

	const splitPathname = pathname.split("/");

	console.log(splitPathname.slice(-1));

	return (
		<div className="mb-4">
			<div className={styles.container}>
				{splitPathname.map((item) => {
					if (item === "") return <span className="pe-0">Home</span>;
					return (
						<span>
							<FiChevronRight fontSize={14} className="mx-1" style={{ marginTop: "-2px" }} />
							<span className={splitPathname.slice(-1)[0] === item ? styles.active : ""}>{titleCase(item)}</span>
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default BreadCrumbs;
