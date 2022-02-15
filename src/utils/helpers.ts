import allProducts from "../data/products.json";

export const numberWithCommas = (x: string) => x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const products = allProducts.map((item) => {
	const slugCategory = item.category.toLowerCase().split(" ").join("_");
	return {
		...item,
		image: `/images/products/${slugCategory}/${item.image}`,
		slugCategory,
	};
});
