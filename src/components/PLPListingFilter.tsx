import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { brandsRemoveAll, brandsSetSelected, categoriesRemoveAll, categoriesSetSelected, setShowMobileFilter } from "../redux/features/plpFilterSlice";
import PLPListingFilterCheckbox from "./PLPListingFilterCheckbox";
import PLPListingFilterPrice from "./PLPListingFilterPrice";
import styles from "../scss/modules/plplistingfilter.module.scss";
import { FiX } from "react-icons/fi";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PLPListingFilter: React.FunctionComponent = () => {
	const { initialCategories, initialBrands, categories, brands, showMobileFilter } = useSelector((state: RootState) => state.filter);
	const dispatch = useDispatch();
	const { search } = useLocation();

	useEffect(() => {
		dispatch(categoriesRemoveAll());
		if (search) {
			let getQueryParams = search.split("?")?.[1].split("=")[1];
			if (getQueryParams.includes("_")) getQueryParams = getQueryParams.split("_").join(" ");
			if (getQueryParams === "shirts") getQueryParams = "shirt";
			dispatch(categoriesSetSelected(getQueryParams));
		}
	}, [search]);

	const handleSelected = (section: string, value: string) => {
		let reducer = categoriesSetSelected;
		if (section === "categories") reducer = categoriesSetSelected;
		else if (section === "brands") reducer = brandsSetSelected;
		dispatch(reducer(value));
	};

	const handleRemoveAll = (section: string) => {
		let reducer = categoriesRemoveAll;
		if (section === "categories") reducer = categoriesRemoveAll;
		else if (section === "brands") reducer = brandsRemoveAll;
		dispatch(reducer());
	};

	const handleCloseFilter = () => dispatch(setShowMobileFilter());

	return (
		<div className={`${styles.filterContainer} ${showMobileFilter && styles.show}`}>
			<p className="d-flex align-items-center d-md-none border-bottom border-accent-3-light pb-3 mb-3">
				<span>Filter Listing</span>
				<FiX className="ms-auto me-1" onClick={handleCloseFilter} />
			</p>
			<PLPListingFilterPrice />
			<PLPListingFilterCheckbox name="Collection" section="categories" state={initialCategories} selected={categories} handleSelected={handleSelected} handleRemoveAll={handleRemoveAll} />
			<PLPListingFilterCheckbox name="Brand" section="brands" state={initialBrands} selected={brands} handleSelected={handleSelected} handleRemoveAll={handleRemoveAll} />
			<button className="d-md-none btn btn-accent-3 my-4 w-100 text-white" onClick={handleCloseFilter}>
				SAVE &amp; CLOSE
			</button>
		</div>
	);
};

export default PLPListingFilter;
