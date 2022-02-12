import { Outlet } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import Footer from "./Footer";
import TopNav from "./TopNav";

interface IMainLayoutProps {}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {
	return (
		<div>
			<AnnouncementBar />
			<TopNav />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
