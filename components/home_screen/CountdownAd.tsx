import CountdownAdImage from "@/public/assets/home_screen/CountdownAd.png";
import { Card } from "../ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CountdownAd() {
	const [timeLeft, setTimeLeft] = useState({
		hours: "00",
		minutes: "00",
		seconds: "00",
	});

	// For now, use a placeholder target time (e.g., 1 hour from now)
	const targetDate = new Date(Date.now() + 60 * 60 * 1000);
	// later backend integration
	// const targetDate = new Date(props.targetTime);

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate.getTime() - now;

			if (distance <= 0) {
				setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
				clearInterval(interval);
				return;
			}

			const hours = Math.floor(distance / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTimeLeft({
				hours: String(hours).padStart(2, "0"),
				minutes: String(minutes).padStart(2, "0"),
				seconds: String(seconds).padStart(2, "0"),
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="border-2 border-[#FFCACA] bg-[#FDF2F6] rounded-xl h-[58px] flex items-center px-3 justify-between">
			<Image src={CountdownAdImage} alt="Countdown Ad" />
			<div className="flex flex-row gap-1 font-semibold text-xs text-white">
				<div className="w-7 py-1 text-center rounded-sm bg-[#FA2C37]">
					{timeLeft.seconds}
				</div>
				<span className="font-bold py-0.5 text-[#FA2C37]">:</span>

				<div className="w-7 py-1 text-center rounded-sm bg-[#FA2C37]">
					{timeLeft.minutes}
				</div>
				<span className="font-bold py-0.5 text-[#FA2C37]">:</span>
				<div className="w-7 py-1 text-center rounded-sm bg-[#FA2C37]">
					{timeLeft.hours}
				</div>
			</div>
		</div>
	);
}
