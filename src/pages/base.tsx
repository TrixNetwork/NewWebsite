import { Outlet } from "react-router-dom";
import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import "./base.css";

export default function Base() {
	return (
		<div>
			<NavBar />
			<div className="content">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
