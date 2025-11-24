import { SearchIcon } from "lucide-react";
import {
	InputGroup,
	InputGroupInput,
	InputGroupAddon,
} from "../ui/input-group";

export default function SearchBar() {
	return (
		<InputGroup className="w-full h-[40px] rounded-xl">
			<InputGroupInput
				className="p-0 placeholder:text-[#DDDCDB] placeholder:font-medium placeholder:text-base"
				placeholder="جستجو"
			/>
			<InputGroupAddon className="!pr-2">
				<SearchIcon className=" !w-[24px] !h-[24px] text-[#DDDCDB]" />
			</InputGroupAddon>
		</InputGroup>
	);
}
