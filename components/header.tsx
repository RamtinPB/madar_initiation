import { Button } from "@/components/ui/button";

import Logo from "@/public/assets/header/logo.svg";
import Right_ArrowIcon from "@/public/assets/header/right_arrow.svg";
import BasketIcon from "@/public/assets/header/basket.svg";
import Image from "next/image";

export function Header() {
	return (
		<header className="flex items-center justify-between h-[72px] px-6 w-full border-b">
			{/* LEFT */}
			<div className="flex items-center  min-w-[92px] h-[32px] gap-1">
				<Button variant="ghost" className="h-[32px] w-[32px] p-0">
					<Right_ArrowIcon alt="Arrow" className="!h-[32px] !w-[32px]" />
				</Button>

				<Logo alt="Logo" className="w-full h-full" />
			</div>

			{/* RIGHT */}
			<div>
				<Button variant="outline" className="border-2 w-[40px] h-[40px] p-0">
					<BasketIcon className="!w-5 !h-5 text-[#B3B2B2]" />
				</Button>
			</div>
		</header>
	);
}
