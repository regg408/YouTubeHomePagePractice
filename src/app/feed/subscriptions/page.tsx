import VideoPreviewCol from "@/components/VideoPreviewCol";


const testData = [
	{
		title: "Video Title 1",
		channelName: "Channel 1",
		views: 426,
		time: "1 day ago",
	},
	{
		title: "Video Title 2",
		channelName: "Channel 2",
		views: 46,
		time: "2 days ago",
	},
	{
		title: "Video Title 3",
		channelName: "Channel 3",
		views: 1234835,
		time: "3 days ago",
	},
	{
		title: "Video Title 4",
		channelName: "Channel 4",
		views: 1426,
		time: "4 days ago",
	},
	{
		title: "Video Title 5",
		channelName: "Channel 5",
		views: 11426,
		time: "5 days ago",
	},
	{
		title: "Video Title 6",
		channelName: "Channel 6",
		views: 11426,
		time: "6 days ago",
	},
];

export default function SubscriptionsPage() {
	return (
		<main className="w-full h-full">
			<h1 className="text-4xl">Today</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
				{
					testData.map((video, index) => {
						return (
							<VideoPreviewCol
								key={`sub-${index}`}
								title={video.title}
								channelName={video.channelName}
								views={video.views}
								time={video.time}
							/>
						);
					})
				}
			</div>
		</main>
	);
}