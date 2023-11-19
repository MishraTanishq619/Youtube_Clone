import React from "react";

const page = ({ params }) => {
	console.log(params);

	return <div> videoId : {params ? params.videoId : "loadBindings..."}</div>;
};

export default page;
