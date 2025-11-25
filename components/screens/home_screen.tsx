import SearchBar from "../home_screen/SearchBar";
import { BannerCarousel } from "../home_screen/BannerCarousel";
import CountdownAd from "../home_screen/CountdownAd";
import Categories from "../home_screen/categories/Categories";
import SpecialProducts from "../home_screen/special_products/SpecialProducts";
import WatchAd from "../home_screen/WatchAd";

/* ------------------------------------------------------------
 * MAIN COMPONENT
 * ------------------------------------------------------------ */

export default function HomeScreen() {
	return (
		<section className="flex flex-col w-full gap-5 mb-10">
			{/* Search Bar */}
			<SearchBar />

			{/* Banner Carousel */}
			<BannerCarousel />

			{/* Timer-Based Ad */}
			<CountdownAd />

			{/* Categories Grid */}
			<Categories />

			{/* Horizontal Product Showcase */}
			<SpecialProducts />

			{/* Video/Watch Ad */}
			<WatchAd />
		</section>
	);
}
