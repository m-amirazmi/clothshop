import HeroBanner from "../components/HeroBanner";
import homedata from "../data/homedata.json";

const Home: React.FunctionComponent = () => {
	return (
		<>
			<HeroBanner hero={homedata.herobanner} />
		</>
	);
};

export default Home;
