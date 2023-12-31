import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import ApiFetcher from "@/utils/ApiFetcher";

const Main = ({ SelectedCategory, VideoList, setVideoList }) => {
	useEffect(() => {
		ApiFetcher(`search?part=snippet&q=${SelectedCategory}`).then((ob) => {
			setVideoList(ob.items);
			// console.log(VideoList);
		});
	}, [SelectedCategory]);

	return (
		<div>
			<h1 className="m-4 text-3xl">
				{SelectedCategory} <span className="text-red-500">Videos</span>
			</h1>
			<Videos VideoList={VideoList} className="flex" />
		</div>
	);
};

export default Main;
