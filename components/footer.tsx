import { Button } from "./ui/button";

import HomeIcon from "@/public/assets/footer/home.svg";
import ReceiptIcon from "@/public/assets/footer/receipt.svg";
import BasketIcon from "@/public/assets/header/basket.svg";
import ProfileIcon from "@/public/assets/footer/profile.svg";
import ActiveIndicatorIcon from "@/public/assets/footer/item_active.svg";

interface NavItemProps {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	label: string;
	active?: boolean;
	onClick?: () => void;
}

function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
	const IconComponent = icon;

	return (
		<Button
			onClick={onClick}
			variant="ghost"
			className="relative flex flex-col items-center justify-center gap-1"
		>
			{/* ACTIVE INDICATOR */}
			{active && (
				<ActiveIndicatorIcon className="absolute -top-[18px] left-1/2 -translate-x-1/2 text-[#FF6A29] !w-[34px] !h-[4px]" />
			)}

			{/* ICON */}
			<IconComponent
				className={`!w-5 !h-5 ${active ? "text-[#FF6A29]" : "text-[#B3B2B2]"}`}
			/>

			{/* LABEL */}
			<span
				className={`text-[12px] font-medium ${
					active ? "text-[#FF6A29]" : "text-[#B3B2B2]"
				}`}
			>
				{label}
			</span>
		</Button>
	);
}

interface FooterProps {
	activeTab: string;
	onChangeTab: (tab: string) => void;
}

export function Footer({ activeTab, onChangeTab }: FooterProps) {
	return (
		<footer className="w-full h-[74px] fixed bottom-0 left-0 bg-white border-t flex items-center justify-evenly px-4 z-50">
			<NavItem
				icon={HomeIcon}
				label="خانه"
				active={activeTab === "home"}
				onClick={() => onChangeTab("home")}
			/>

			<NavItem
				icon={BasketIcon}
				label="سبد خرید"
				active={activeTab === "basket"}
				onClick={() => onChangeTab("basket")}
			/>

			<NavItem
				icon={ReceiptIcon}
				label="سفارش ها"
				active={activeTab === "orders"}
				onClick={() => onChangeTab("orders")}
			/>

			<NavItem
				icon={ProfileIcon}
				label="پروفایل"
				active={activeTab === "profile"}
				onClick={() => onChangeTab("profile")}
			/>
		</footer>
	);
}
