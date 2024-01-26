import Link from "next/link";
import React, { Key } from "react";

const ChannelPageCard = ({ ChannelDetails }) => {
	return (
		<div
			id="ChannelPageCard"
			className="flex  my-10 items-center w-full h-[30rem] flex-col mx-auto "
		>
			<img
				src={ChannelDetails.brandingSettings.image.bannerExternalUrl}
				alt="Banner"
				className="w-full h-80"
			/>
			<Link href={"#"} className="absolute mt-[12rem]">
				<img
					className="object-contain mx-auto p-12 w-[18rem] rounded-full"
					src={
						ChannelDetails.snippet.thumbnails
							? ChannelDetails.snippet.thumbnails.high.url
							: "#"
					}
					alt="image"
				/>
				<h3 className="text-6xl font-bold text-center mt-[-3rem]">
					{ChannelDetails.snippet.title &&
						ChannelDetails.snippet.title}
				</h3>
			</Link>
		</div>
	);
};

export default ChannelPageCard;
