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
				className="p-0 text-[#DDDCDB] font-medium text-sm"
				placeholder="جستجو"
			/>
			<InputGroupAddon className="!pr-2">
				<SearchIcon className=" !w-[24px] !h-[24px] text-[#DDDCDB]" />
			</InputGroupAddon>
		</InputGroup>
	);
}
