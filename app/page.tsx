"use client";

import { useState } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

// screens
import HomeScreen from "@/components/screens/home_screen";
import OrdersScreen from "@/components/screens/orders_screen";
import ProfileScreen from "@/components/screens/profile_screen";
import ShoppingCartScreen from "@/components/screens/shopping_cart_screen";

export default function Home() {
	const [activeTab, setActiveTab] = useState("home");

	const renderScreen = () => {
		switch (activeTab) {
			case "home":
				return <HomeScreen />;
			case "orders":
				return <OrdersScreen />;
			case "profile":
				return <ProfileScreen />;
			case "basket":
				return <ShoppingCartScreen />;
			default:
				return <HomeScreen />;
		}
	};

	return (
		<div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col bg-white dark:bg-black relative">
				<Header />

				{/* Main Content */}
				<div className="flex justify-center w-full px-6 mt-4 mb-[74px]">
					{renderScreen()}
				</div>

				<Footer activeTab={activeTab} onChangeTab={setActiveTab} />
			</main>
		</div>
	);
}
