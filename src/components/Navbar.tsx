import React, { useState } from "react";

//
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ApiFetcher from "@/utils/ApiFetcher";
import Link from "next/link";

const Navbar = ({ VideoList, setVideoList, setSelectedCategory }) => {
	const [SearchText, setSearchText] = useState("");
	const Search = (e) => {
		e.preventDefault();
		setSelectedCategory("");
		console.log("searchng");
		ApiFetcher(`search?part=snippet&q=${SearchText}`).then((ob) => {
			console.log("fetched");
			setVideoList(ob.items);
			console.log(VideoList);
		});
	};
	return (
		<div className="flex mt-4 ml-8 gap3">
			<MenuIcon fontSize="large" />
			<Link href={`/`} onClick={window.location.reload}>
				<div className="flex">
					<YouTubeIcon fontSize="large" />
					<h1 className="text-3xl">YouTube</h1>
				</div>
			</Link>
			<form className="bgclr  flex  h-10 w-[40vw]" onSubmit={Search}>
				<input
					type="search"
					className="bgclr pl-[40px] border-2 rounded border-gray-400  p-3 h-full w-full"
					onChange={(e) => {
						console.log(e.target.value);
						setSearchText(e.target.value);
					}}
				/>
				<button type="submit" onClick={Search} className="absolute">
					<SearchIcon fontSize="large" />
				</button>
			</form>
		</div>
	);
};

export default Navbar;
