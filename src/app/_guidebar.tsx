"use client";
import RectangleButton from "@/components/RectangleButton";
import GuideBarStatusContext from "@/contexts/GuideBarStatusContext";
import Image from "next/image";
import React, { useContext } from "react";

interface GuideLinkProps extends React.PropsWithChildren {
	className?: string;
	href?: string;
}

function GuideLink(props: GuideLinkProps) {
	const { className = "", href, children } = props;

	return (
		<a className={[className, "w-full p-2.5 items-center hover:bg-(--highlight) rounded-xl cursor-pointer"].join(" ")} href={href}>
			{children}
		</a>
	);
}

const guideConfig = {
	main: [
		{ text: "Home", icon: "/home.svg", href: "/" },
		{ text: "Subscriptions", icon: "/subscriptions.svg", href: "/feed/subscriptions" },
	],
	user: [
		{ text: "History", icon: "/history.svg", href: "/feed/history" },
		{ text: "Playlists", icon: "/playlist_play.svg", href: "/feed/playlists" },
		{ text: "Your videos", icon: "/smart_display.svg", href: undefined },
		{ text: "Watch later", icon: "/schedule.svg", href: "/playlist?list=WL" },
		{ text: "Liked Video", icon: "/thumb_up.svg", href: "/playlist?list=LL" },
	],
	explore: [
		{ text: "Trending", icon: "/mode_heat.svg", href: "/explore/trending" },
		{ text: "Music", icon: "/music_note.svg", href: "/explore/music" },
		{ text: "Movies", icon: "/movie.svg", href: "/explore/movies" },
		{ text: "Live", icon: "/sensors.svg", href: "/explore/live" },
		{ text: "Gaming", icon: "/sports_esports.svg", href: "/explore/gaming" },
		{ text: "News", icon: "/newsmode.svg", href: "/explore/news" },
		{ text: "Sports", icon: "/trophy.svg", href: "/explore/sports" },
		{ text: "Courses", icon: "/school.svg", href: "/explore/courses" },
		{ text: "Podcasts", icon: "/podcasts.svg", href: "/explore/podcasts" },
	],
	tool: [
		{ text: "Settings", icon: "/settings.svg" },
		{ text: "Report history", icon: "/flag.svg" },
		{ text: "Help", icon: "/help.svg" },
		{ text: "Send feedback", icon: "/feedback.svg" },
	]
};

export default function GuideBar() {
	const guideCtx = useContext(GuideBarStatusContext);

	return (
		<nav className={
			[
				(guideCtx.isExpand ? "w-(--guide-expand-width)" : "w-(--guide-collapse-width)"),
				"fixed left-0 top-(--toolbar-height) bottom-0 bg-(--background) overflow-y-auto"
			].join(" ")}>
			{
				guideCtx.isExpand ?
					<div className="flex flex-col w-full px-2.5 items-center divide-(--foreground) divide-y-1">
						<div className="flex flex-col w-full py-2.5">
							{
								guideConfig.main.map((config) => {
									return (
										<GuideLink key={`main-${config.text}`} className="flex flex-row justify-start gap-5" href={config.href}>
											<Image className="dark:invert" aria-hidden src={config.icon} alt={`icon-${config.text}`} width={24} height={24} />
											<span>{config.text}</span>
										</GuideLink>
									);
								})
							}
						</div>
						<div className="flex flex-col w-full py-2.5">
							<GuideLink href="/feed/you" className="flex flex-row justify-start gap-5">
								<span>You</span>
								<Image className="dark:invert" aria-hidden src="/chevron_right.svg" alt="chevron_right icon" width={24} height={24} />
							</GuideLink>
							{
								guideConfig.user.map((config) => {
									return (
										<GuideLink key={`user-${config.text}`} className="flex flex-row justify-start gap-5" href={config.href}>
											<Image className="dark:invert" aria-hidden src={config.icon} alt={`icon-${config.text}`} width={24} height={24} />
											<span>{config.text}</span>
										</GuideLink>
									);
								})
							}
						</div>
						<div className="flex flex-col w-full py-2.5">
							<h1 className="font-bold p-2.5">Subscriptions</h1>

						</div>
						<div className="flex flex-col w-full py-2.5">
							<h1 className="font-bold p-2.5">Explorer</h1>
							{
								guideConfig.explore.map((config) => {
									return (
										<GuideLink key={`explore-${config.text}`} className="flex flex-row justify-start gap-5" href={config.href}>
											<Image className="dark:invert" aria-hidden src={config.icon} alt={`icon-${config.text}`} width={24} height={24} />
											<span>{config.text}</span>
										</GuideLink>
									);
								})
							}
						</div>
						<div className="flex flex-col w-full py-2.5">
							{
								guideConfig.tool.map((config) => {
									return (
										<RectangleButton key={`explore-${config.text}`} className="w-full flex flex-row justify-start p-2.5 items-center hover:bg-(--highlight) rounded-xl gap-5">
											<Image className="dark:invert" aria-hidden src={config.icon} alt={`icon-${config.text}`} width={24} height={24} />
											<span>{config.text}</span>
										</RectangleButton>
									);
								})
							}
						</div>
						<div className="flex flex-col w-full py-2.5">
							<div className="flex flex-row flex-wrap p-2.5 text-gray-400 text-[13px]">
								<span className="[&:not(:last-child)]:mr-2.5">About</span>
								<span className="[&:not(:last-child)]:mr-2.5">Press</span>
								<span className="[&:not(:last-child)]:mr-2.5">Copyright</span>
								<span className="[&:not(:last-child)]:mr-2.5">Contact us</span>
								<span className="[&:not(:last-child)]:mr-2.5">Creators</span>
								<span className="[&:not(:last-child)]:mr-2.5">Advertise</span>
								<span className="[&:not(:last-child)]:mr-2.5">Developers</span>
							</div>
							<div className="flex flex-row flex-wrap p-2.5 text-gray-400 text-[13px]">
								<span className="[&:not(:last-child)]:mr-2.5">Terms</span>
								<span className="[&:not(:last-child)]:mr-2.5">Privacy</span>
								<span className="[&:not(:last-child)]:mr-2.5">Policy & Safety</span>
								<span className="[&:not(:last-child)]:mr-2.5">How XXX works</span>
								<span className="[&:not(:last-child)]:mr-2.5">Test new features</span>
							</div>
							<div className="p-2.5 text-[13px] text-gray-600">© Copyright Here</div>
						</div>
					</div> :
					<div className="flex flex-col w-full items-center">
						<GuideLink className="w-full aspect-square flex flex-col gap-2.5 justify-center items-center hover:bg-(--highlight) rounded-2xl" href="/">
							<Image className="dark:invert" aria-hidden src="/home.svg" alt="home icon" width={24} height={24} />
							<span className=" text-(length:--guide-icon-font-size)">Home</span>
						</GuideLink>
						<GuideLink className="w-full aspect-square flex flex-col gap-2.5 justify-center items-center hover:bg-(--highlight) rounded-2xl" href="/feed/subscriptions">
							<Image className="dark:invert" aria-hidden src="/subscriptions.svg" alt="subscriptions icon" width={24} height={24} />
							<span className=" text-(length:--guide-icon-font-size)">Subscriptions</span>
						</GuideLink>
						<GuideLink className="w-full aspect-square flex flex-col gap-2.5 justify-center items-center hover:bg-(--highlight) rounded-2xl" href="/feed/you">
							<Image className="dark:invert" aria-hidden src="/account_circle.svg" alt="account_circle icon" width={24} height={24} />
							<span className=" text-(length:--guide-icon-font-size)">You</span>
						</GuideLink>
					</div>
			}
		</nav>
	);
}