"use client";

import { ButtonGroup } from "@/components/ui/button-group";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";

import PhoneIcon from "@/public/assets/login/Phone.svg";

export function StagePhone({
	phone,
	setPhone,
}: {
	phone: string;
	setPhone: (v: string) => void;
}) {
	return (
		<ButtonGroup className=" group flex border border-[#EDEDED] rounded-xl w-full focus-within:border-[#FF6A29] ">
			<InputGroup className=" h-[46px] w-full! ring-0 focus:ring-0 focus-visible:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-transparent shadow-none ">
				<InputGroupInput
					placeholder="09xx-xxx-xxxx"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					className="focus:border-[#FF6A29] focus:ring-[#FF6A29]"
				/>
			</InputGroup>
			<InputGroupAddon className=" w-[46px] h-[46px] p-2 bg-[#F7F7F7] border border-[#EDEDED] rounded-xl group-focus-within:border-[#FF6A29] ">
				<PhoneIcon className="w-fit! h-fit!" />
			</InputGroupAddon>
		</ButtonGroup>
	);
}
