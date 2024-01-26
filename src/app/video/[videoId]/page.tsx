"use client";
import Navbar from "@/components/Navbar";
import SideSimilarVideos from "@/components/SideSimilarVideos";
import ApiFetcher from "@/utils/ApiFetcher";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const page = ({ params }) => {
	console.log(params);
	const [SelectedCategory, setSelectedCategory] = useState("");
	const [VideoList, setVideoList] = useState([]);
	const [VideoDetails, setVideoDetails] = useState({});
	useEffect(() => {
		ApiFetcher(`videos?part=snippet&id=${params.videoId}`).then((ob) =>
			setVideoDetails(ob.items[0])
		);
	}, [SelectedCategory]);

	return (
		<div className="h-[100%] w-full">
			<Navbar
				VideoList={VideoList}
				setVideoList={setVideoList}
				setSelectedCategory={setSelectedCategory}
			/>
			<div className="flex h-[90%] justify-between">
				<div className=" h-full px-5 my-5 w-full">
					<ReactPlayer
						height={"80vh"}
						width={"76vw"}
						// style={{
						// 	width: "50px",
						// }}
						classname="react-player"
						url={`https://www.youtube.com/watch?v=${params.videoId}`}
						controls={true}
						// light is usefull incase of dark mode
						light={false}
						// picture in picture
						pip={true}
					/>
					<h2 className="text-4xl mx-8 mt-2">
						{VideoDetails.snippet ? VideoDetails.snippet.title : ""}
					</h2>
				</div>
				<SideSimilarVideos VideoDetails={VideoDetails} />
			</div>
		</div>
	);
};

export default page;
