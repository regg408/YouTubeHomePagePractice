import Image from "next/image";
import RectangleButton from "@/components/RectangleButton";
import RoundButton from "@/components/RoundButton";
import HistoryVideoContent from "./_historyVideoContent";

const testData = [
	{
		title: "Video Title 1",
		author: "Author 1",
		views: 426,
		content: "This is a sample video content description for Video 1.",
		uuid: "video-1"
	},
	{
		title: "Video Title 2",
		author: "Author 2",
		views: 46,
		content: "This is a sample video content description for Video 2.",
		uuid: "video-2"
	},
	{
		title: "Video Title 3",
		author: "Author 3",
		views: 1234835,
		content: "This is a sample video content description for Video 3.",
		uuid: "video-3"
	},
	{
		title: "Video Title 4",
		author: "Author 4",
		views: 1426,
		content: "This is a sample video content description for Video 4.",
		uuid: "video-4"
	},
	{
		title: "Video Title 5",
		author: "Author 5",
		views: 11426,
		content: "This is a sample video content description for Video 5.",
		uuid: "video-5"
	},
];

export default function HistoryPage() {
	return (
		<main className="w-full h-full ">
			<div className="flex flex-col gap-2.5 sm:items-start">
				<h1 className="text-5xl">Watch History</h1>
				{testData.map((datum) => {
					return (
						<HistoryVideoContent key={datum.uuid} {...datum} />
					);
				})}

			</div>
			<SearchBar className=" fixed top-46 right-[10vw]" />
		</main>
	);
}


interface SearchBarProps {
	className?: string;
}

function SearchBar({ className = "" }: SearchBarProps) {
	return (
		<div className={[className, "flex flex-col"].join(" ")}>
			<div id="history-search" className="flex flex-col ">
				<div className="flex flex-row items-center border-b-1 border-transparent focus-within:border-(--foreground)">
					<RoundButton className="h-10 w-10 hover:bg-(--highlight)">
						<Image className="dark:invert m-auto" src="/search.svg" alt="search icon" width={24} height={24} />
					</RoundButton>
					<input className="h-full focus:outline-none" type="text" placeholder="Search watch history" />
				</div>
			</div>

			<RectangleButton className="p-2.5 w-full hover:bg-(--highlight) rounded-4xl">
				<div className="flex flex-row justify-start gap-2.5">
					<Image className="dark:invert" src="/delete.svg" alt="delete icon" width={24} height={24} />
					<h1>Clear all watch history</h1>
				</div>
			</RectangleButton>
			<RectangleButton className="p-2.5 w-full hover:bg-(--highlight) rounded-4xl">
				<div className="flex flex-row justify-start gap-2.5">
					<Image className="dark:invert" src="/pause.svg" alt="pause icon" width={24} height={24} />
					<h1>Pause watch history</h1>
				</div>
			</RectangleButton>
			<RectangleButton className="p-2.5 w-full hover:bg-(--highlight) rounded-4xl">
				<div className="flex flex-row justify-start gap-2.5">
					<Image className="dark:invert" src="/settings.svg" alt="settings icon" width={24} height={24} />
					<h1>Manage all history</h1>
				</div>
			</RectangleButton>
		</div>
	);
}