import React, { useEffect } from "react";

const Videos = ({ VideoList }) => {
	console.log(VideoList);
	return (
		<div>
			{VideoList.map((e, k) => {
				return <li key={k}>{e.id.videoId && e.id.videoId}</li>;
			})}
		</div>
	);
};

export default Videos;
