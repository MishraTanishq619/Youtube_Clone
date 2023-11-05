import React from "react";

//
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
	return (
		<div className="flex mt-4 ml-8 gap3">
			<MenuIcon fontSize="large" />
			<div className="flex">
				<YouTubeIcon fontSize="large" />
				<h1 className="text-3xl">YouTube</h1>
			</div>
			<div className="bgclr  flex  h-10 w-[40vw]">
				<input
					type="search"
					className="bgclr pl-[40px] border-2 rounded border-gray-400  p-3 h-full w-full"
				/>
				<SearchIcon fontSize="large" className="absolute" />
			</div>
		</div>
	);
};

export default Navbar;
