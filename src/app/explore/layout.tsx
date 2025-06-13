"use client"
import GuideBarStatusContext from "@/contexts/GuideBarStatusContext";
import { useContext } from "react";


export default function ExploreLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	const guideCtx = useContext(GuideBarStatusContext);
	
	return (
		<div className={
			[
				(guideCtx.isExpand ? "ml-(--guide-expand-width)" : "ml-(--guide-collapse-width)"),
				"flex-1 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
			].join(" ")
		}>
			{children}
		</div>
	)
}