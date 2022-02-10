import HeroBanner from "../components/HeroBanner";
import Promises from "../components/Promises";
import homedata from "../data/homedata.json";

const Home: React.FunctionComponent = () => {
	return (
		<>
			<HeroBanner hero={homedata.herobanner} />
			<Promises promises={homedata.promises} />
		</>
	);
};

export default Home;
