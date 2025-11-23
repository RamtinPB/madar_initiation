import { BannerCarousel } from "../home_screen/BannerCarousel";
import SearchBar from "../home_screen/SearchBar";

export default function home_screen() {
	return (
		<div className=" w-full">
			<SearchBar />

			<BannerCarousel />
		</div>
	);
}
