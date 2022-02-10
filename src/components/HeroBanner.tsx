import Slider from "react-slick";
import herobanner from "../data/herobanner.json";
import { useNavigate } from "react-router-dom";
import styles from "../scss/modules/herobanner.module.scss";

const HeroBanner: React.FunctionComponent = () => {
	const navigate = useNavigate();

	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings} className="overflow-hidden">
			{herobanner.map((item) => {
				return (
					<div key={item.id} className="w-100 position-relative">
						<img src={item.image} alt={`Hero Banner ${item.id}`} className="w-100 d-none d-md-block" />
						<img src={item.imageMob} alt={`Hero Banner ${item.id}`} className="w-100 d-md-none" />
						<div className={styles.overlay}>
							<small className={styles.subtitle}>{item.subtitle}</small>
							<h2 className={styles.title}>{item.title}</h2>
							<button onClick={() => navigate(`/shop?category=${item.category}`)} className="btn btn-accent-3 text-white px-3 py-2 rounded-0">
								{item.cta}
							</button>
						</div>
					</div>
				);
			})}
		</Slider>
	);
};

export default HeroBanner;
