import NavItem from "./NavItem";

import HomeIcon from "@/public/assets/footer/home.svg";
import ReceiptIcon from "@/public/assets/footer/receipt.svg";
import BasketIcon from "@/public/assets/header/basket.svg";
import ProfileIcon from "@/public/assets/footer/profile.svg";

type TabKey = "home" | "orders" | "profile" | "basket";

interface FooterProps {
	activeTab: TabKey;
	onChangeTab: (tab: TabKey) => void;
}

/* ------------------------------------------------------------
 * CONFIG ARRAY → Single Source of Truth
 * ------------------------------------------------------------ */
const NAV_ITEMS: { tab: TabKey; label: string; icon: any }[] = [
	{ tab: "home", label: "خانه", icon: HomeIcon },
	{ tab: "basket", label: "سبد خرید", icon: BasketIcon },
	{ tab: "orders", label: "سفارش ها", icon: ReceiptIcon },
	{ tab: "profile", label: "پروفایل", icon: ProfileIcon },
];

/* ------------------------------------------------------------
 * FOOTER CONTAINER
 * ------------------------------------------------------------ */
export function Footer({ activeTab, onChangeTab }: FooterProps) {
	return (
		<footer className="fixed bottom-0 left-0 z-50 flex h-[74px] w-full items-center justify-evenly border-t bg-white px-4">
			{NAV_ITEMS.map((item) => (
				<NavItem
					key={item.tab}
					icon={item.icon}
					label={item.label}
					active={activeTab === item.tab}
					onClick={() => onChangeTab(item.tab)}
				/>
			))}
		</footer>
	);
}
