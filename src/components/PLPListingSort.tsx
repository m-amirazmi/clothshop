import { IPLPListingSortProps } from "../utils/interfaces";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from "react";
import styles from "../scss/modules/plplistingsort.module.scss";
import { FiChevronsDown } from "react-icons/fi";

const sortObj = [
	{ id: "1", name: "Prices: Low to High" },
	{ id: "2", name: "Prices: High to Low" },
];

const PLPListingSort: React.FunctionComponent<IPLPListingSortProps> = ({ length, name, sort, setSort }) => {
	const [showSort, setShowSort] = useState(false);

	return (
		<div className="d-flex align-items-center mb-3">
			<p className="mb-0">
				<span className={styles.name}>All Products</span>
				<span className={styles.length}>({length} items)</span>
			</p>
			<div className={styles.sort}>
				<Dropdown isOpen={showSort} toggle={() => setShowSort(!showSort)}>
					<DropdownToggle data-toggle="dropdown" tag="span" className={styles.sortDropdownToggle}>
						Sort <FiChevronsDown />
					</DropdownToggle>
					<DropdownMenu end className="border-accent-3-light">
						{sortObj.map((item) => (
							<DropdownItem key={item.id} className={`${styles.sortItem} ${sort?.id === item.id && styles.active}`} onClick={() => setSort(item)}>
								{item.name}
							</DropdownItem>
						))}
					</DropdownMenu>
				</Dropdown>
			</div>
		</div>
	);
};

export default PLPListingSort;
