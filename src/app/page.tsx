"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import React, { useState } from "react";

const page = () => {
	const [SelectedCategory, setSelectedCategory] = useState("");
	return (
		<div>
			<Navbar />
			<hr className="mt-4" />
			<div className="flex">
				<Sidebar
					SelectedCategory={SelectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				<Main SelectedCategory={SelectedCategory} />
			</div>
		</div>
	);
};

export default page;
