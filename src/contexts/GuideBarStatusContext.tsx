"use client"
import { createContext, useState } from "react";

const GuideBarStatusContext = createContext({
	isExpand: false,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setIsExpand: (_: boolean) => { }
});

export function GuideBarStatusContextProvider(props: React.PropsWithChildren) {
	const [isExpand, setIsExpand] = useState(false);

	return (
		<GuideBarStatusContext.Provider
			value={{
				isExpand: isExpand,
				setIsExpand: setIsExpand
			}}
		>
			{props.children}
		</GuideBarStatusContext.Provider>
	);
}

export default GuideBarStatusContext;