import React, { Key, useEffect } from "react";
import VideoCard from "@/components/VideoCard";
import ChannelCard from "@/components/ChannelCard";

const Videos = ({ VideoList }: Object) => {
	console.log(VideoList);
	return (
		<div className="flex flex-wrap items-center justify-evenly">
			{VideoList.map((e: any, k: Key) => {
				// return <li key={k}>{e.id.videoId && e.id.videoId}</li>;
				// return (
				// 	<li key={k}>
				// 		{e.id.videoId
				// 			? "Video : " + e.id.videoId
				// 			: "Channel : " + e.id.channelId}
				// 	</li>
				// );

				return (
					<div key={k} id="card">
						{e.id.videoId ? (
							<VideoCard e={e} k={k} />
						) : (
							<ChannelCard e={e} k={k} />
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Videos;
