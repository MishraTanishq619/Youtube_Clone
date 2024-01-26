import Link from "next/link";
import React, { Key } from "react";

const ChannelCard = ({ e, k }) => {
	return (
		<div
			key={k}
			id="ChannelCard"
			className="flex justify-center items-center flex-col  h-80 w-72 bg-[#312f2f] my-4"
		>
			<Link href={`/channel/${e.id.channelId}`}>
				<img
					className="object-contain p-12 mt-[-20px] rounded-full"
					src={
						e.snippet.thumbnails
							? e.snippet.thumbnails.high.url
							: "#"
					}
					alt="image"
				/>

				<h3 className="text-xl font-bold text-center mt-[-20px]">
					{e.snippet.channelTitle && e.snippet.channelTitle}
				</h3>
			</Link>
		</div>
	);
};

export default ChannelCard;
