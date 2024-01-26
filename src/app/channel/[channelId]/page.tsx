"use client";
import Navbar from "@/components/Navbar";

import React, { useEffect, useState } from "react";
import Videos from "@/components/Videos";
import ApiFetcher from "@/utils/ApiFetcher";
import ChannelCard from "@/components/ChannelCard";
import ChannelPageCard from "@/components/ChannelPageCard";

const page = ({ params }) => {
	const [SelectedCategory, setSelectedCategory] = useState("");
	const [VideoList, setVideoList] = useState([]);
	const [ChannelDetails, setChannelDetails] = useState({ snippet: null });
	useEffect(() => {
		ApiFetcher(`search?part=snippet&channelId=${params.channelId}`).then(
			(ob) => {
				setVideoList(ob.items);
				// console.log(VideoList);
			}
		);

		ApiFetcher(`channels?part=snippet&id=${params.channelId}`).then((ob) =>
			setChannelDetails(ob.items[0])
		);
	}, [SelectedCategory]);
	{
		ChannelDetails
			? console.log("found :", ChannelDetails)
			: console.log("not found");
	}
	return (
		<div>
			<Navbar
				VideoList={VideoList}
				setVideoList={setVideoList}
				setSelectedCategory={setSelectedCategory}
			/>
			{/* <div
				className="w-full my-5 h-56 "
				style={{
					background:
						"linear-gradient(90deg, rgba(190,2,165,1) 0%, rgba(63,186,244,1) 63%, rgba(0,255,194,1) 100%",
				}}
			></div> */}
			<div id="channel" className="w-full  ">
				{ChannelDetails.snippet ? (
					<ChannelPageCard ChannelDetails={ChannelDetails} />
				) : (
					""
				)}
			</div>
			<Videos VideoList={VideoList.slice(1)} className="flex" />
		</div>
	);
};

export default page;
