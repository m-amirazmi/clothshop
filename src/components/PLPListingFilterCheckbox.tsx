import { IPLPListingFilterCheckboxProps } from "../utils/interfaces";
import styles from "../scss/modules/plplistingfiltercheckbox.module.scss";
import { FiCheckSquare, FiChevronDown, FiChevronUp, FiSquare, FiX } from "react-icons/fi";
import { useState } from "react";

const PLPListingFilterCheckbox: React.FunctionComponent<IPLPListingFilterCheckboxProps> = ({ name, section, state, selected, handleSelected, handleRemoveAll }) => {
	const [show, setShow] = useState(true);

	return (
		<div className={`${styles.filter} mb-4`}>
			<div className={styles.filterName} onClick={() => setShow(!show)}>
				<p className="mb-0">{name}</p>
				{show ? <FiChevronUp /> : <FiChevronDown />}
			</div>
			{show && (
				<div className={styles.filterCheck}>
					{state?.map((item) => (
						<div key={item} className={styles.filterCheckItem} onClick={() => handleSelected(section, item)}>
							{!selected.includes(item) ? <FiSquare /> : <FiCheckSquare className="text-accent-3" />}
							<span>{item}</span>
						</div>
					))}
					{selected.length !== 0 && (
						<div className={styles.filterRemove} onClick={() => handleRemoveAll(section)}>
							<FiX />
							<span>Remove All {name}s</span>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default PLPListingFilterCheckbox;
