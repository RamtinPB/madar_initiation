import { BannerCarousel } from "../home_screen/BannerCarousel";
import CountdownAd from "../home_screen/CountdownAd";
import SearchBar from "../home_screen/SearchBar";

export default function home_screen() {
	return (
		<div className="flex flex-col gap-5 w-full">
			<SearchBar />

			<BannerCarousel />

			<CountdownAd />
		</div>
	);
}
