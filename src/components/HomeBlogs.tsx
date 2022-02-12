import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Card } from "reactstrap";
import { IBlogsProps } from "../utils/interfaces";
import HomeSectionHeader from "./HomeSectionHeader";

const HomeBlogs: React.FunctionComponent<IBlogsProps> = ({ blogs }) => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		nextArrow: (
			<div>
				<div className="bg-accent-3 border-radius p-2 d-md-block rounded-3 d-none d-md-block">
					<img src="/images/icons/chevron-right.svg" alt="Next" style={{ height: "24px", width: "24px" }} />
				</div>
			</div>
		),
		prevArrow: (
			<div>
				<div className="bg-accent-3 border-radius p-2 d-md-block rounded-3 d-none d-md-block">
					<img src="/images/icons/chevron-left.svg" alt="Prev" style={{ height: "24px", width: "24px" }} />
				</div>
			</div>
		),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				},
			},
		],
	};
	return (
		<div className="px-2 px-md-0 mb-5" style={{ padding: "36px 0px", background: "#FFF3F3" }}>
			<HomeSectionHeader title="Latest News">
				<Slider {...settings} className="mb-5">
					{blogs.map((item) => (
						<div key={item.id} className="px-2">
							<Card body className="border-0 rounded-3">
								<img src={item.image} alt={item.title} className="rounded-3" />
								<div className="mt-3">
									<small style={{ color: "rgba(0,0,0,0.6)" }}>{new Date(item.date).toLocaleDateString("en-MY", { year: "numeric", month: "long", day: "numeric" })}</small>
									<p className="mt-2">{item.title.substring(0, 50)}...</p>
									<Link to={item.ctaLink} className="text-accent-3" style={{ fontSize: "14px" }}>
										Read More
									</Link>
								</div>
							</Card>
						</div>
					))}
				</Slider>
			</HomeSectionHeader>
		</div>
	);
};

export default HomeBlogs;
