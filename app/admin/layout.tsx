import React from "react";

export const metadata = {
	title: "Admin Panel - Madar",
};

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-[#0b0b0b]">
			{/* Admin-specific header */}
			<header className="w-full border-b bg-white p-4 shadow-sm">
				<div className="max-w-6xl mx-auto flex items-center justify-between">
					<h1 className="text-lg font-bold text-[#BA400B]">مدیریت سایت</h1>
					<div className="text-sm text-gray-600">Admin Console</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto p-6">{children}</main>
		</div>
	);
}
