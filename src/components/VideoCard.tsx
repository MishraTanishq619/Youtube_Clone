import Link from "next/link";
import React, { Key } from "react";

const VideoCard = ({ e, k }) => {
	return (
		<div key={k} id="VideoCard" className="h-80 w-72 bg-[#312f2f] my-4">
			<Link href={`/video/${e.id.videoId}`}>
				<img
					className="object-contain p-2"
					src={
						e.snippet.thumbnails
							? e.snippet.thumbnails.high.url
							: "#"
					}
					alt="image"
				/>
				<div className="">
					<h2 className="font-bold px-2">
						{e.snippet.title[40]
							? e.snippet.title.slice(0, 40) + "..."
							: e.snippet.title}
					</h2>
					<h3 className="text-gray-500 m-2 ml-4">
						{e.snippet.channelTitle && e.snippet.channelTitle}
					</h3>
				</div>
			</Link>
		</div>
	);
};

export default VideoCard;
