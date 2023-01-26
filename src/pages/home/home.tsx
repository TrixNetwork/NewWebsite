import Hero from "../../components/home/hero";
import Gallery from "../../components/home/gallery";
import WhoAreWe from "../../components/home/whoAreWe";

export default function Home() {
	return (
		<div id="home">
			<Hero />
			<WhoAreWe />
			<Gallery />
		</div>
	);
}
