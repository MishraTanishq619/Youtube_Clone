"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import React, { useState } from "react";

const page = () => {
	const [SelectedCategory, setSelectedCategory] = useState("");
	const [VideoList, setVideoList] = useState([]);

	return (
		<div>
			<Navbar
				VideoList={VideoList}
				setVideoList={setVideoList}
				setSelectedCategory={setSelectedCategory}
			/>
			<hr className="mt-4" />
			<div className="flex overflow-y-scroll">
				<Sidebar
					SelectedCategory={SelectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>

				<Main
					SelectedCategory={SelectedCategory}
					VideoList={VideoList}
					setVideoList={setVideoList}
				/>
			</div>
		</div>
	);
};

export default page;
