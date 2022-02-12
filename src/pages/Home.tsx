import HomeBlogs from "../components/HomeBlogs";
import HomeByCategories from "../components/HomeByCategories";
import HomeHeroBanner from "../components/HomeHeroBanner";
import HomePopularProducts from "../components/HomePopularProducts";
import HomePromises from "../components/HomePromises";
import homedata from "../data/homedata.json";

const Home: React.FunctionComponent = () => {
	return (
		<>
			<HomeHeroBanner hero={homedata.herobanner} />
			<HomePromises promises={homedata.promises} />
			<HomePopularProducts products={homedata.popularProducts} />
			<HomeByCategories categories={homedata.shopByCategories} />
			<HomeBlogs blogs={homedata.blogs} />
		</>
	);
};

export default Home;
