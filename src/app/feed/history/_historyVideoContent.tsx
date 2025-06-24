"use client";
import RectangleButton from "@/components/RectangleButton";
import RoundButton from "@/components/RoundButton";
import VideoPreview from "@/components/VideoPreview";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface HistoryVideoContentProps {
	title?: string;
	author?: string;
	views?: number;
	content?: string;
}

export default function HistoryVideoContent(props: HistoryVideoContentProps) {
	const { title = "Unknown", author = "Unknown", views = 0, content = "" } = props;
	return (
		<div className="w-[60%] flex flex-row gap-2.5">
			<VideoPreview />
			<div className="flex flex-col flex-1">
				<div className="inline-flex flex-row w-full justify-between">
					<h1 className="text-[30px]">{title}</h1>
					<div className="inline-flex flex-row">
						<DeleteButton />
						<ToolButton />
					</div>
				</div>


				<div className="inline-flex flex-row w-full gap-2.5">
					<span className="text-gray-500">{author}</span>
					<span className="text-gray-500">{views} views</span>
				</div>
				<div className="inline-flex flex-row w-full">
					<p className="text-gray-500">{content}</p>
				</div>
			</div>
		</div>
	);
}


const toolConfig = [
	{ text: "Add to queue", icon: "/playlist_add.svg", alt: "playlist_add icon" },
	{ text: "Save to Watch later", icon: "/schedule.svg", alt: "schedule icon" },
	{ text: "Save to playlist", icon: "/bookmark.svg", alt: "bookmark icon" },
	{ text: "Download", icon: "/download.svg", alt: "download icon" },
	{ text: "Share", icon: "/share.svg", alt: "share icon" },
];

function ToolButton() {
	const ref = useRef<HTMLDivElement | null>(null);
	const [showToolbar, setShowToolbar] = useState(false);

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setShowToolbar(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const toggleToolbar = () => {
		setShowToolbar((prev) => !prev);
	};

	return (
		<div className="relative">
			<RoundButton className="h-10 w-10 hover:bg-(--highlight)" onClick={toggleToolbar}>
				<Image className="dark:invert m-auto" src="/more_vert.svg" alt="more_vert icon" width={24} height={24} />
			</RoundButton>
			{
				showToolbar &&
				<div ref={ref} className="absolute top-12 right-0 bg-(--dropDownGround) rounded-md shadow-lg py-2.5 flex flex-col w-60 z-(--more-z-index)">
					{
						toolConfig.map((config) => {
							return (
								<RectangleButton key={`history-${config.text}`} className="flex flex-row justify-start p-2.5 items-center hover:bg-(--highlight) rounded-xl gap-5">
									<Image className="dark:invert" aria-hidden src={config.icon} alt={`${config.alt}`} width={24} height={24} />
									<span>{config.text}</span>
								</RectangleButton>
							);
						})
					}
				</div>
			}
		</div>
	);
}

function DeleteButton() {
	const [showTooltip, setShowTooltip] = useState(false);

	const handleMouseEnter = () => {
		setShowTooltip(true);
	};

	const handleMouseLeave = () => {
		setShowTooltip(false);
	};

	return (
		<div className="relative">
			<RoundButton className="h-10 w-10 hover:bg-(--highlight)" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<Image className="dark:invert m-auto" src="/close.svg" alt="close icon" width={24} height={24} />
			</RoundButton>

			{
				showTooltip &&
				<span className="absolute top-12 right-0 bg-(--dropDownGround) rounded-md shadow-lg text-[12px] p-2.5 z-(--tooltip-z-index) text-nowrap">
					Remove from watch history
				</span>
			}
		</div>
	);
}