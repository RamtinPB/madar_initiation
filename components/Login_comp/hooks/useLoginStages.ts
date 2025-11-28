"use client";

import { useState } from "react";

export function useLoginStages() {
	const [stage, setStage] = useState(0);
	const [phone, setPhone] = useState("");
	const [code, setCode] = useState(["", "", "", ""]);

	const isValidPhone = /^09\d{9}$/.test(phone);
	const isValidCode = code.every((d) => d.length === 1);

	return {
		stage,
		setStage,
		phone,
		setPhone,
		code,
		setCode,
		isValidPhone,
		isValidCode,
	};
}
