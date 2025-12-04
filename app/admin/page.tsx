"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import AdminSidebar from "@/components/Admin/Sidebar";
import CategoriesManager from "../../components/Admin/CategoriesManager";
import UsersManager from "../../components/Admin/UsersManager";

export default function AdminPage() {
	const router = useRouter();
	const [section, setSection] = useState<"categories" | "users">("categories");

	useEffect(() => {
		try {
			const raw = localStorage.getItem("user");
			if (!raw) return router.push("/login");
			const user = JSON.parse(raw);
			if (
				!user?.role ||
				(user.role !== "SUPER_ADMIN" && user.role !== "SUB_ADMIN")
			) {
				// not authorized
				router.push("/login");
			}
		} catch (e) {
			router.push("/login");
		}
	}, []);

	return (
		<div className="flex h-[80vh] gap-6">
			<div className="flex-1 bg-white rounded-lg p-6 shadow-sm overflow-auto">
				{section === "categories" && <CategoriesManager />}
				{section === "users" && <UsersManager />}
			</div>

			<div className="w-[260px]">
				<AdminSidebar section={section} onChange={setSection} />
			</div>
		</div>
	);
}
