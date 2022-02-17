import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { brandsRemoveAll, brandsSetSelected, categoriesRemoveAll, categoriesSetSelected } from "../redux/features/plpFilterSlice";
import PLPListingFilterCheckbox from "./PLPListingFilterCheckbox";
import PLPListingFilterPrice from "./PLPListingFilterPrice";

const PLPListingFilter: React.FunctionComponent = () => {
	const { initialCategories, initialBrands, categories, brands } = useSelector((state: RootState) => state.filter);
	const dispatch = useDispatch();

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

	return (
		<div>
			<PLPListingFilterCheckbox name="Collection" section="categories" state={initialCategories} selected={categories} handleSelected={handleSelected} handleRemoveAll={handleRemoveAll} />
			<PLPListingFilterCheckbox name="Brand" section="brands" state={initialBrands} selected={brands} handleSelected={handleSelected} handleRemoveAll={handleRemoveAll} />
			<PLPListingFilterPrice />
		</div>
	);
};

export default PLPListingFilter;
