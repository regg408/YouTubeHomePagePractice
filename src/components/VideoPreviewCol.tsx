import Image from "next/image";


interface VideoPreviewColProps {
	title?: string;
	channelName?: string;
	views?: number;
	time?: string;
}

export default function VideoPreviewCol(props: VideoPreviewColProps) {
	const { title = "Unknown", channelName = "Unknown", views = 0, time = "1 day ago" } = props;
	return (
		<div className="cursor-pointer">
			<div className="flex flex-col gap-2.5">
				<div className="aspect-video bg-blue-500 rounded-md">
				</div>

				<div className="flex flex-row gap-2.5 w-full">
					<div className="h-10 w-10 flex aspect-square bg-blue-500 rounded-full">
						<Image className="invert m-auto" src="/person.svg" alt="person icon" width={24} height={24} />
					</div>

					<div className="flex-1 flex flex-col ">
						<p className="box h-12 break-all multiline-ellipsis font-bold text-[16px]">
							{title}
						</p>
						<p className="text-gray-500">
							{channelName}
						</p>
						<p className="text-gray-500">
							{views} views • {time}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}