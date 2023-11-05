import React from "react";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieIcon from "@mui/icons-material/Movie";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import SchoolIcon from "@mui/icons-material/School";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FlightIcon from "@mui/icons-material/Flight";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import BuildIcon from "@mui/icons-material/Build";
import { ListItem, Stack } from "@mui/material";

const Sidebar = ({ SelectedCategory, setSelectedCategory }) => {
	const youtubeCategories: { name: string; icon: React.JSX.Element }[] = [
		{ name: "Gaming", icon: <SportsEsportsIcon /> },
		{ name: "Music", icon: <MusicNoteIcon /> },
		{ name: "Entertainment", icon: <MovieIcon /> },
		{ name: "News", icon: <AnnouncementIcon /> },
		{ name: "Education", icon: <SchoolIcon /> },
		{ name: "Science and Technology", icon: <ImportantDevicesIcon /> },
		{ name: "Cooking and Food", icon: <RestaurantIcon /> },
		{ name: "Travel and Adventure", icon: <FlightIcon /> },
		{ name: "Health and Fitness", icon: <FitnessCenterIcon /> },
		{ name: "Lifestyle", icon: <HomeIcon /> },
		{ name: "Sports", icon: <SportsSoccerIcon /> },
		{ name: "DIY and Crafts", icon: <BuildIcon /> },
	];

	return (
		<Stack
			direction="column"
			justifyContent="flex-start"
			alignItems="flex-start"
			spacing={2}
			className="w-[15rem] h-full border-r-2"
		>
			{youtubeCategories.map((e, k) => {
				return (
					<button
						className="category-btn"
						onClick={() => setSelectedCategory(e.name)}
						style={{
							backgroundColor:
								e.name === SelectedCategory && "red",
						}}
					>
						{e.icon}
						<p className="ml-1">{e.name}</p>
					</button>
				);
			})}
		</Stack>
	);
};

export default Sidebar;
