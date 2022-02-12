import { FiInstagram } from "react-icons/fi";
import Slider from "react-slick";
import { IHomeIGProps } from "../utils/interfaces";
import HomeSectionHeader from "./HomeSectionHeader";
import styles from "../scss/modules/homeig.module.scss";

const HomeIG: React.FunctionComponent<IHomeIGProps> = ({ instagrams }) => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: (
			<div>
				<div className="bg-accent-1 border-radius p-2 d-md-block rounded-3 d-none d-md-block">
					<img src="/images/icons/chevron-right.svg" alt="Next" style={{ height: "24px", width: "24px" }} />
				</div>
			</div>
		),
		prevArrow: (
			<div>
				<div className="bg-accent-1 border-radius p-2 d-md-block rounded-3 d-none d-md-block">
					<img src="/images/icons/chevron-left.svg" alt="Prev" style={{ height: "24px", width: "24px" }} />
				</div>
			</div>
		),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: true,
				},
			},
		],
	};

	return (
		<>
			<HomeSectionHeader title="Our Instagram" subtitle="See how our customers styled shoe products in their foot." icon={<FiInstagram />}>
				<Slider {...settings} className="mb-5 px-2 px-md-0">
					{instagrams.map((item) => (
						<div key={item.id} className={`px-2 ${styles.imgContainer}`}>
							<div className=" position-relative">
								<img src={item.image} alt={`IG ${item.id}`} className="w-100 rounded-3" />
								<div className={styles.overlay}>
									<FiInstagram />
								</div>
							</div>
						</div>
					))}
				</Slider>
			</HomeSectionHeader>
		</>
	);
};

export default HomeIG;
