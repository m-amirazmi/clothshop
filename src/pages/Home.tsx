import ByCategories from "../components/ByCategories";
import HeroBanner from "../components/HeroBanner";
import PopularProducts from "../components/PopularProducts";
import Promises from "../components/Promises";
import homedata from "../data/homedata.json";

const Home: React.FunctionComponent = () => {
	return (
		<>
			<HeroBanner hero={homedata.herobanner} />
			<Promises promises={homedata.promises} />
			<PopularProducts products={homedata.popularProducts} />
			<ByCategories categories={homedata.shopByCategories} />
		</>
	);
};

export default Home;
