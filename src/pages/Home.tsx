import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeBlogs from "../components/HomeBlogs";
import HomeByCategories from "../components/HomeByCategories";
import HomeFAQ from "../components/HomeFAQ";
import HomeHeroBanner from "../components/HomeHeroBanner";
import HomeIcons from "../components/HomeIcons";
import HomeIG from "../components/HomeIG";
import HomeNewsLetter from "../components/HomeNewsletter";
import HomePopularProducts from "../components/HomePopularProducts";
import HomePromises from "../components/HomePromises";
import homedata from "../data/homedata.json";
import { products } from "../utils/helpers";
import { plpSetProducts } from "../redux/features/plpSlice";

const Home: React.FunctionComponent = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(plpSetProducts(products));
	}, []);

	return (
		<>
			<HomeHeroBanner hero={homedata.herobanner} />
			<HomePromises promises={homedata.promises} />
			<HomePopularProducts />
			<HomeByCategories categories={homedata.shopByCategories} />
			<HomeBlogs blogs={homedata.blogs} />
			<HomeIG instagrams={homedata.instagrams} />
			<HomeFAQ faqs={homedata.faqs} />
			<HomeNewsLetter />
			<HomeIcons />
		</>
	);
};

export default Home;
