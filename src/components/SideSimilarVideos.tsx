"use client";
import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import ApiFetcher from "@/utils/ApiFetcher";

const SideSimilarVideos = ({ VideoDetails }) => {
	console.log("this ", VideoDetails);
	const [VideoList, setVideoList] = useState([]);
	const [SelectedCategory, setSelectedCategory] = useState("");

	useEffect(() => {
		ApiFetcher(
			`search?part=snippet&relatedToVideoId=NbPugQzF420&type=video`
		)
			.then((ob) => setVideoList(ob.items))
			.then((x) => {
				console.log("this2 ", x);
			});
	}, [SelectedCategory]);

	return (
		<div className="">
			<p className="text-center m-4 text-2xl">Similar Videos:</p>
			<div className="h-[80vh] overflow-scroll">
				{VideoList ? (
					<Videos VideoList={VideoList} className="flex flex-col " />
				) : (
					"Not Found"
				)}
			</div>
		</div>
	);
};

export default SideSimilarVideos;
