import Image from "next/image";
import RectangleButton from "./RectangleButton";

export default function VideoPreviewRow() {
	return (
		<div className="w-[246px] h-[138px] cursor-pointer bg-blue-500 rounded-md relative">
			<div className="absolute flex flex-col top-1 right-1 gap-1">
				<RectangleButton className="bg-black p-1 rounded-md">
					<Image className="invert m-auto" src="/schedule.svg" alt="schedule icon" width={24} height={24} />
				</RectangleButton>
				<RectangleButton className="bg-black p-1 rounded-md">
					<Image className="invert m-auto" src="/playlist_add.svg" alt="playlist_add icon" width={24} height={24} />
				</RectangleButton>
			</div>
		</div>
	);
}