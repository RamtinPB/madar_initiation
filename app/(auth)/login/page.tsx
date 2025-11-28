"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import LoginLeft from "@/public/assets/login/login_left.png";
import LoginRight from "@/public/assets/login/login_right.png";
import LoginHands from "@/public/assets/login/login_hands.png";
import LoginBasket from "@/public/assets/login/HandBasket.png";
import Logo from "@/public/assets/login/logo.png";
import LogoDesc from "@/public/assets/login/logo_desc.png";

import { Button } from "@/components/ui/button";

import { useLoginStages } from "@/components/Login_comp/hooks/useLoginStages";
import { useOTPCountdown } from "@/components/Login_comp/hooks/useOTPCountdown";
import { formatTime } from "@/components/Login_comp/utils/formatTime";

import { StagePhone } from "@/components/Login_comp//StagePhone";
import { StageOTP } from "@/components/Login_comp/StageOTP";
import { LoginHeader } from "@/components/Login_comp/LoginHeader";
import { LoginFooterPhone } from "@/components/Login_comp/LoginFooterPhone";
import { LoginFooterOTP } from "@/components/Login_comp/LoginFooterOTP";

export default function LoginPage() {
	const router = useRouter();

	const {
		stage,
		setStage,
		phone,
		setPhone,
		code,
		setCode,
		isValidPhone,
		isValidCode,
	} = useLoginStages();

	const { timeLeft, resendDisabled, reset } = useOTPCountdown(stage === 1);

	/* ------------------------------------------------------------
	 * RENDER
	 * ------------------------------------------------------------ */
	return (
		<div className="relative flex w-full flex-col gap-14 bg-white dark:bg-black overflow-hidden">
			{/* HEADER */}
			<LoginHeader />

			{/* MAIN CONTENT */}
			<main className="flex flex-col justify-between items-center relative z-20 mt-[135px]">
				{/* LOGO */}
				<div className="flex flex-col items-center gap-2 mb-3">
					<Image src={Logo} alt="Logo" className="w-[46px] h-[34px]" />
					<Image src={LogoDesc} alt="Desc" className="w-[83px] h-8" />
				</div>

				{/* TITLE */}
				<div className="flex flex-col w-full px-5 gap-3 mt-10">
					<span className="px-2 font-medium text-[28px] text-[#514F4D]">
						ورود
					</span>

					<p className="px-2 text-[#787471] text-[14px] font-normal">
						{stage === 0 && "شماره موبایل خود را وارد کنید"}
						{stage === 1 && `کد ارسال شده به شماره موبایل ${phone} را وارد کن`}
					</p>

					{/* STAGE CONTENT */}
					<div className="mt-2">
						{stage === 0 && <StagePhone phone={phone} setPhone={setPhone} />}
						{stage === 1 && <StageOTP code={code} setCode={setCode} />}
					</div>

					{/* MAIN ACTION BUTTON */}
					<Button
						className={`w-full text-white rounded-lg ${
							(stage === 0 ? isValidPhone : isValidCode)
								? "bg-[#FF6A29]"
								: "bg-[#FFD1B8] opacity-60"
						}`}
						disabled={stage === 0 ? !isValidPhone : !isValidCode}
						onClick={() => {
							if (stage === 0) setStage(1);
							else router.push("/"); // submit / continue
						}}
					>
						{stage === 0 ? "ادامه" : "تایید"}
					</Button>

					{/* FOOTERS */}
					{stage === 0 && <LoginFooterPhone />}
					{stage === 1 && (
						<LoginFooterOTP
							timeLeft={formatTime(timeLeft)}
							resendDisabled={resendDisabled}
							editPhone={() => setStage(0)}
							resend={reset}
						/>
					)}
				</div>
			</main>

			{/* BOTTOM IMAGES */}
			<div className="flex items-center justify-center mt-10">
				{stage === 0 && (
					<Image src={LoginHands} alt="Hands" className="w-[225px] " />
				)}
				{stage === 1 && (
					<Image src={LoginBasket} alt="Basket" className="w-[225px] h-full" />
				)}
			</div>

			{/* DECORATIONS */}
			<Image
				src={LoginLeft}
				alt=""
				width={308}
				height={308}
				className="absolute bottom-0 left-0 pointer-events-none select-none z-10"
			/>

			<Image
				src={LoginRight}
				alt=""
				width={301}
				height={301}
				className="absolute bottom-0 right-0 pointer-events-none select-none z-10"
			/>
		</div>
	);
}
