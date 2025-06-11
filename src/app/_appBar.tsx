"use client";
import RectangleButton from "@/components/RectangleButton";
import RoundButton from "@/components/RoundButton";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";

export default function AppBar() {
	const [showDropDown, setShowDropDown] = useState(false);


	return (
		<nav className="sticky top-0 px-3.5 h-14 flex flex-row justify-between z-10">
			<div className="flex flex-row items-center justify-center gap-2.5">

				<RoundButton className="h-10 w-10 hover:bg-(--highlight)">
					<Image className="dark:invert m-auto" src="/menu.svg" alt="menu icon" width={24} height={24} />
				</RoundButton>

				<Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} />
			</div>
			<div className="flex flex-row justify-center">

			</div>
			<div className="flex flex-row items-center justify-center">
				<RoundButton className="h-10 w-10 bg-blue-500" onClick={() => { setShowDropDown(!showDropDown); }}>
					<Image className="dark:invert m-auto" src="/person.svg" alt="person icon" width={24} height={24} />
				</RoundButton>
			</div>

			{
				showDropDown &&
				<SettingDropDown />
			}

		</nav>
	);
}


enum PANEL {
	MENU,
	THEME
}

interface MenuPanelProps {
	theme?: string;
	language: string;
	strictMode: boolean;
	location: string;
	onSwitchPanel?: (panel: PANEL) => void;
}

function MenuPanel(props: MenuPanelProps) {
	const { theme, language, strictMode, location, onSwitchPanel } = props;

	return (
		<div className="flex flex-col divide-(--foreground) divide-y-1">
			<div className="flex flex-row p-2.5 items-center gap-2.5">
				<div className="flex h-10 w-10 bg-blue-500 rounded-full">
					<Image className="dark:invert m-auto" src="/person.svg" alt="person icon" width={24} height={24} />
				</div>
				<div className="flex flex-col">
					<h1>UserName</h1>
					<h1>@UUID</h1>
				</div>
			</div>

			<div className="flex flex-col py-2.5">
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-start gap-2.5">
						<Image className="dark:invert" src="/manage_accounts.svg" alt="manage_accounts icon" width={24} height={24} />
						<h1>Account</h1>
					</div>
				</RectangleButton>

				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-between">
						<div className="flex flex-row justify-start gap-2.5">
							<Image className="dark:invert" src="/switch_account.svg" alt="switch_account icon" width={24} height={24} />
							<h1>Switch Account</h1>
						</div>
						<Image className="dark:invert" src="/chevron_right.svg" alt="chevron_right icon" width={24} height={24} />
					</div>
				</RectangleButton>

				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-start gap-2.5">
						<Image className="dark:invert" src="/logout.svg" alt="logout icon" width={24} height={24} />
						<h1>Log Out</h1>
					</div>
				</RectangleButton>
			</div>

			<div className="flex flex-col py-2.5">
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-start gap-2.5">
						<Image className="dark:invert" src="/workspaces.svg" alt="workspaces icon" width={24} height={24} />
						<h1>Workspace</h1>
					</div>
				</RectangleButton>
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-start gap-2.5">
						<Image className="dark:invert" src="/paid.svg" alt="paid icon" width={24} height={24} />
						<h1>Buy Content and Membership</h1>
					</div>
				</RectangleButton>
			</div>

			<div className="flex flex-col py-2.5">
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-start gap-2.5">
						<Image className="dark:invert" src="/info.svg" alt="info icon" width={24} height={24} />
						<h1>Your Information</h1>
					</div>
				</RectangleButton>

				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)" onClick={() => { onSwitchPanel?.(PANEL.THEME); }}>
					<div className="flex flex-row justify-between">
						<div className="flex flex-row justify-start gap-2.5">
							<Image className="dark:invert" src="/brightness_2.svg" alt="brightness_2 icon" width={24} height={24} />
							<h1>Theme: {theme}</h1>
						</div>
						<Image className="dark:invert" src="/chevron_right.svg" alt="chevron_right icon" width={24} height={24} />
					</div>
				</RectangleButton>

				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-between">
						<div className="flex flex-row justify-start gap-2.5">
							<Image className="dark:invert" src="/translate.svg" alt="translate icon" width={24} height={24} />
							<h1>Language: {language}</h1>
						</div>
						<Image className="dark:invert" src="/chevron_right.svg" alt="chevron_right icon" width={24} height={24} />
					</div>
				</RectangleButton>

				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-between">
						<div className="flex flex-row justify-start gap-2.5">
							<Image className="dark:invert" src="/admin_panel_settings.svg" alt="admin_panel_settings icon" width={24} height={24} />
							<h1>Strict Mode: {strictMode ? "enable" : "disable"}</h1>
						</div>
						<Image className="dark:invert" src="/chevron_right.svg" alt="chevron_right icon" width={24} height={24} />
					</div>
				</RectangleButton>

				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-between">
						<div className="flex flex-row justify-start gap-2.5">
							<Image className="dark:invert" src="/globe.svg" alt="globe icon" width={24} height={24} />
							<h1>Location: {location}</h1>
						</div>
						<Image className="dark:invert" src="/chevron_right.svg" alt="chevron_right icon" width={24} height={24} />
					</div>
				</RectangleButton>
			</div>

			<div className="flex flex-col py-2.5">
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-start gap-2.5">
						<Image className="dark:invert" src="/settings.svg" alt="settings icon" width={24} height={24} />
						<h1>Settings</h1>
					</div>
				</RectangleButton>
			</div>

			<div className="flex flex-col py-2.5">
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-start gap-2.5">
						<Image className="dark:invert" src="/help.svg" alt="help icon" width={24} height={24} />
						<h1>Help</h1>
					</div>
				</RectangleButton>
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-start gap-2.5">
						<Image className="dark:invert" src="/feedback.svg" alt="feedback icon" width={24} height={24} />
						<h1>Feedback</h1>
					</div>
				</RectangleButton>
			</div>
		</div>
	);
}

interface ThemePanelProps {
	theme?: string;
	onSetTheme?: (theme: string) => void;
	onBackClick?: () => void;
}

function ThemePanel(props: ThemePanelProps) {
	const { theme, onSetTheme, onBackClick } = props;

	return (
		<div className="flex flex-col divide-(--foreground) divide-y-1">
			<div className="flex flex-row p-2.5 items-center">
				<RoundButton className="h-10 w-10 hover:bg-(--highlight)" onClick={onBackClick}>
					<Image className="dark:invert m-auto" src="/arrow_back.svg" alt="arrow_back icon" width={24} height={24} />
				</RoundButton>
				<h1>Theme</h1>
			</div>
			<div className="flex flex-col items-center py-2.5">
				<h1 className="text-gray-500 p-2.5">Only effect on this browser.</h1>
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)" onClick={() => { onSetTheme?.("dark"); }}>
					<div className="flex flex-row justify-start gap-2.5">
						<Image className={[(theme === "dark" ? "" : "invisible"), "dark:invert"].join(" ")} src="/check.svg" alt="check icon" width={24} height={24} />
						<h1>Dark theme</h1>
					</div>
				</RectangleButton>
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)" onClick={() => { onSetTheme?.("light"); }}>
					<div className="flex flex-row justify-start gap-2.5">
						<Image className={[(theme === "light" ? "" : "invisible"), "dark:invert"].join(" ")} src="/check.svg" alt="check icon" width={24} height={24} />
						<h1>Light theme</h1>
					</div>
				</RectangleButton>
			</div>
		</div>
	);
}



function SettingDropDown() {
	const { theme, setTheme } = useTheme();
	const [panel, setPanel] = useState<PANEL>(PANEL.MENU);
	const [language, setLanguage] = useState("Chinese(Taiwan)");
	const [strictMode, setStrictMode] = useState(false);
	const [location, setLocation] = useState("Taiwan");

	console.log(theme);

	const switchPanel = (panel: PANEL) => {
		switch (panel) {
			case PANEL.MENU:
				return <MenuPanel theme={theme} language={language} strictMode={strictMode} location={location} onSwitchPanel={setPanel} />;
			case PANEL.THEME:
				return <ThemePanel theme={theme} onSetTheme={setTheme} onBackClick={() => { setPanel(PANEL.MENU); }} />;
		}
	};


	return (
		<div className="w-80 rounded-2xl fixed top-15 right-5 bg-(--dropDownGround) shadow-md">
			{switchPanel(panel)}
		</div>
	);
}