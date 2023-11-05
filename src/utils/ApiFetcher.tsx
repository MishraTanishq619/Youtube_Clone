// import React, { useEffect } from "react";

// const ApiFetcher = async (url: String) => {
// 	// var result;
// 	useEffect(() => {
// 		const base_url = "https://youtube-v31.p.rapidapi.com/";
// 		// search ? q = music & part=snippet % 2Cid & regionCode=US & maxResults=50 & order=date";

// 		const key: String = process.env.RAPID_API_KEY;

// 		const options = {
// 			method: "GET",
// 			headers: {
// 				"X-RapidAPI-Key": key,
// 				"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
// 			},
// 		};

// 		fetch(base_url + url, options)
// 			.then((res) => res.text())
// 			.then((data) => {
// 				console.log(data);
// 				// result = data;
// 			});
// 	}, []);

// 	return <div>Fetchersdkfhdsfkjhds</div>;
// };

// export default ApiFetcher;

//

import React, { useEffect, useState } from "react";

import axios from "axios";

const base_url = "https://youtube-v31.p.rapidapi.com";
const options = {
	// url: "https://youtube-v31.p.rapidapi.com/search",
	params: {
		// q: "music",
		part: "snippet,id",
		regionCode: "US",
		maxResults: "20",
		// order: "date",
	},
	headers: {
		"X-RapidAPI-Key": "1f6b1f0de6mshd3a3e997f5ad864p1a447cjsn121957007bac",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

const ApiFetcher = async (url: String) => {
	const { data } = await axios.get(`${base_url}/${url}`, options);
	return data;
};

export default ApiFetcher;
