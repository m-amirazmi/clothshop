import { FiCheckSquare, FiChevronDown, FiSquare } from "react-icons/fi";
import { products } from "../utils/helpers";
import styles from "../scss/modules/plplistingfilter.module.scss";
import { useEffect, useState } from "react";

const PLPListingFilter: React.FunctionComponent = () => {
	const [categories, setCategories] = useState<string[]>();
	const [brands, setBrands] = useState<string[]>();
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

	useEffect(() => {
		const allCategories: string[] = [];
		products.forEach((item) => {
			if (!allCategories.includes(item.category)) allCategories.push(item.category);
			return;
		});

		setCategories(allCategories);
	}, [products]);

	useEffect(() => {
		const allBrands: string[] = [];
		products.forEach((item) => {
			if (!allBrands.includes(item.brand)) allBrands.push(item.brand);
			return;
		});

		setBrands(allBrands);
	}, [products]);

	const handleSelected = (section: string, value: string) => {
		let setState = setSelectedCategories;
		let state: string[] = [];

		if (section === "categories") {
			setState = setSelectedCategories;
			state = selectedCategories;
		} else if (section === "brands") {
			setState = setSelectedBrands;
			state = selectedBrands;
		}

		const copy = [...state];
		if (state.includes(value)) {
			const remove = copy.filter((i) => i !== value);
			setState(remove);
		} else {
			copy.push(value);
			setState(copy);
		}
	};

	const renderFilterCheckbox = (name: string, section: string, state: string[] | undefined, selectedState: string[]) => {
		return (
			<div className="mb-4">
				<div className={styles.filterName}>
					<p className="mb-0">{name}</p>
					<FiChevronDown />
				</div>
				<div className={styles.filterCheck}>
					{state?.map((item) => (
						<div key={item} className={styles.filterCheckItem} onClick={() => handleSelected(section, item)}>
							{!selectedState.includes(item) ? <FiSquare /> : <FiCheckSquare className="text-accent-3" />}
							<span>{item}</span>
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<>
			{renderFilterCheckbox("Collection", "categories", categories, selectedCategories)}
			{renderFilterCheckbox("Brand", "brands", brands, selectedBrands)}

			{/* BRAND */}
			<div>
				<div className={styles.filterName}>
					<p className="mb-0">Price</p>
					<FiChevronDown />
				</div>
			</div>
		</>
	);
};

export default PLPListingFilter;
