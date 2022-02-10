import { Outlet } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import TopNav from "./TopNav";

interface IMainLayoutProps {}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {
	return (
		<div>
			<AnnouncementBar />
			<TopNav />
			<Outlet />
		</div>
	);
};

export default MainLayout;
