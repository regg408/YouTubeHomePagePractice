"use client";
import RectangleButton from "@/components/RectangleButton";
import RoundButton from "@/components/RoundButton";
import ToggleSwitch from "@/components/ToggleSwitch";
import GuideBarStatusContext from "@/contexts/GuideBarStatusContext";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useContext, useState } from "react";

export default function Toolbar() {
	const ctx = useContext(GuideBarStatusContext);
	const [showDropDown, setShowDropDown] = useState(false);


	return (
		<nav className="sticky top-0 px-5 h-(--toolbar-height) flex flex-row justify-between z-10">
			<div className="flex flex-row items-center justify-center gap-2.5">

				<RoundButton className="h-10 w-10 hover:bg-(--highlight)" onClick={() => { ctx.setIsExpand(!ctx.isExpand); }}>
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
	THEME,
	LANGUAGE,
	RESTRICT,
	LOCATION
}

//#region MenuPanel
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
						<h1>XXX Account</h1>
					</div>
				</RectangleButton>

				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-between">
						<div className="flex flex-row justify-start gap-2.5">
							<Image className="dark:invert" src="/switch_account.svg" alt="switch_account icon" width={24} height={24} />
							<h1>Switch account</h1>
						</div>
						<Image className="dark:invert" src="/chevron_right.svg" alt="chevron_right icon" width={24} height={24} />
					</div>
				</RectangleButton>

				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-start gap-2.5">
						<Image className="dark:invert" src="/logout.svg" alt="logout icon" width={24} height={24} />
						<h1>Sign out</h1>
					</div>
				</RectangleButton>
			</div>

			<div className="flex flex-col py-2.5">
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-start gap-2.5">
						<Image className="dark:invert" src="/workspaces.svg" alt="workspaces icon" width={24} height={24} />
						<h1>XXX Studio</h1>
					</div>
				</RectangleButton>
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-start gap-2.5">
						<Image className="dark:invert" src="/paid.svg" alt="paid icon" width={24} height={24} />
						<h1>Purchases and memberships</h1>
					</div>
				</RectangleButton>
			</div>

			<div className="flex flex-col py-2.5">
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)">
					<div className="flex flex-row justify-start gap-2.5">
						<Image className="dark:invert" src="/info.svg" alt="info icon" width={24} height={24} />
						<h1>Your data in XXX</h1>
					</div>
				</RectangleButton>

				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)" onClick={() => { onSwitchPanel?.(PANEL.THEME); }}>
					<div className="flex flex-row justify-between">
						<div className="flex flex-row justify-start gap-2.5">
							<Image className="dark:invert" src="/brightness_2.svg" alt="brightness_2 icon" width={24} height={24} />
							<h1>Appearance: {theme}</h1>
						</div>
						<Image className="dark:invert" src="/chevron_right.svg" alt="chevron_right icon" width={24} height={24} />
					</div>
				</RectangleButton>

				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)" onClick={() => { onSwitchPanel?.(PANEL.LANGUAGE); }}>
					<div className="flex flex-row justify-between">
						<div className="flex flex-row justify-start gap-2.5">
							<Image className="dark:invert" src="/translate.svg" alt="translate icon" width={24} height={24} />
							<h1>Language: {language}</h1>
						</div>
						<Image className="dark:invert" src="/chevron_right.svg" alt="chevron_right icon" width={24} height={24} />
					</div>
				</RectangleButton>

				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)" onClick={() => { onSwitchPanel?.(PANEL.RESTRICT); }}>
					<div className="flex flex-row justify-between">
						<div className="flex flex-row justify-start gap-2.5">
							<Image className="dark:invert" src="/admin_panel_settings.svg" alt="admin_panel_settings icon" width={24} height={24} />
							<h1>Restricted Mode: {strictMode ? "On" : "Off"}</h1>
						</div>
						<Image className="dark:invert" src="/chevron_right.svg" alt="chevron_right icon" width={24} height={24} />
					</div>
				</RectangleButton>

				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)" onClick={() => { onSwitchPanel?.(PANEL.LOCATION); }}>
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
//#endregion

//#region AppearancePanel
interface AppearancePanelProps {
	theme?: string;
	onSelectTheme?: (theme: string) => void;
	onBackClick?: () => void;
}

function AppearancePanel(props: AppearancePanelProps) {
	const { theme, onSelectTheme, onBackClick } = props;

	return (
		<div className="flex flex-col divide-(--foreground) divide-y-1">
			<div className="flex flex-row p-2.5 items-center">
				<RoundButton className="h-10 w-10 hover:bg-(--highlight)" onClick={onBackClick}>
					<Image className="dark:invert m-auto" src="/arrow_back.svg" alt="arrow_back icon" width={24} height={24} />
				</RoundButton>
				<h1>Appearance</h1>
			</div>
			<div className="flex flex-col items-center py-2.5">
				<h1 className="text-gray-500 p-2.5">Setting applies to this browser only</h1>
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)" onClick={() => { onSelectTheme?.("dark"); }}>
					<div className="flex flex-row justify-start gap-2.5">
						<Image className={[(theme === "dark" ? "" : "invisible"), "dark:invert"].join(" ")} src="/check.svg" alt="check icon" width={24} height={24} />
						<h1>Dark theme</h1>
					</div>
				</RectangleButton>
				<RectangleButton className="p-2.5 w-full hover:bg-(--highlight)" onClick={() => { onSelectTheme?.("light"); }}>
					<div className="flex flex-row justify-start gap-2.5">
						<Image className={[(theme === "light" ? "" : "invisible"), "dark:invert"].join(" ")} src="/check.svg" alt="check icon" width={24} height={24} />
						<h1>Light theme</h1>
					</div>
				</RectangleButton>
			</div>
		</div>
	);
}
//#endregion

//#region LanguagePanel
const languageList = [
	"English",
	// "中文(繁體)"
];

interface LanguagePanelProps {
	language?: string;
	onSelectLanguage?: (language: string) => void;
	onBackClick?: () => void;
}

function LanguagePanel(props: LanguagePanelProps) {
	const { language, onSelectLanguage, onBackClick } = props;

	return (
		<div className="flex flex-col divide-(--foreground) divide-y-1">
			<div className="flex flex-row p-2.5 items-center">
				<RoundButton className="h-10 w-10 hover:bg-(--highlight)" onClick={onBackClick}>
					<Image className="dark:invert m-auto" src="/arrow_back.svg" alt="arrow_back icon" width={24} height={24} />
				</RoundButton>
				<h1>Choose your language</h1>
			</div>
			<div className="flex flex-col items-center py-2.5">
				{
					languageList.map((lan) => {
						return (
							<RectangleButton key={`language-${lan}`} className="p-2.5 w-full hover:bg-(--highlight)" onClick={() => { onSelectLanguage?.(lan); }}>
								<div className="flex flex-row justify-start gap-2.5">
									<Image className={[(lan === language ? "" : "invisible"), "dark:invert"].join(" ")} src="/check.svg" alt="check icon" width={24} height={24} />
									<h1>{lan}</h1>
								</div>
							</RectangleButton>
						);
					})
				}
			</div>
		</div>
	);
}
//#endregion

//#region StrictModePanel
interface StrictModePanelProps {
	restrictMode: boolean;
	onChangeMode?: (mode: boolean) => void;
	onBackClick?: () => void;
}

function RestrictedModePanel(props: StrictModePanelProps) {
	const { restrictMode, onChangeMode, onBackClick } = props;

	return (
		<div className="flex flex-col divide-(--foreground) divide-y-1">
			<div className="flex flex-row p-2.5 items-center">
				<RoundButton className="h-10 w-10 hover:bg-(--highlight)" onClick={onBackClick}>
					<Image className="dark:invert m-auto" src="/arrow_back.svg" alt="arrow_back icon" width={24} height={24} />
				</RoundButton>
				<h1>Restricted Mode</h1>
			</div>
			<div className="flex flex-col py-2.5">
				<h1 className="text-gray-500 p-2.5">This helps hide potentially mature videos. No filter is 100% accurate.</h1>
				<h1 className="text-gray-500 p-2.5">This setting only applies to this browser.</h1>
				<div className="flex flex-row justify-between items-center p-2.5">
					<h1 className="uppercase">Activate Restricted Mode</h1>
					<ToggleSwitch isChecked={restrictMode} onChange={onChangeMode} />
				</div>
			</div>
		</div>
	);
}
//#endregion

//#region LocationPanel
const locationList = [
	"Taiwan"
];

interface LocationPanelProps {
	location: string;
	onSelectLocation?: (location: string) => void;
	onBackClick?: () => void;
}

function LocationPanel(props: LocationPanelProps) {
	const { location, onSelectLocation, onBackClick } = props;

	return (
		<div className="flex flex-col divide-(--foreground) divide-y-1">
			<div className="flex flex-row p-2.5 items-center">
				<RoundButton className="h-10 w-10 hover:bg-(--highlight)" onClick={onBackClick}>
					<Image className="dark:invert m-auto" src="/arrow_back.svg" alt="arrow_back icon" width={24} height={24} />
				</RoundButton>
				<h1>Choose your location</h1>
			</div>
			<div className="flex flex-col items-center py-2.5">
				{
					locationList.map((locate) => {
						return (
							<RectangleButton key={`language-${locate}`} className="p-2.5 w-full hover:bg-(--highlight)" onClick={() => { onSelectLocation?.(locate); }}>
								<div className="flex flex-row justify-start gap-2.5">
									<Image className={[(locate === location ? "" : "invisible"), "dark:invert"].join(" ")} src="/check.svg" alt="check icon" width={24} height={24} />
									<h1>{locate}</h1>
								</div>
							</RectangleButton>
						);
					})
				}
			</div>
		</div>
	);
}
//#endregion

function SettingDropDown() {
	const { theme, setTheme } = useTheme();
	const [panel, setPanel] = useState<PANEL>(PANEL.MENU);
	const [language, setLanguage] = useState("English");
	const [strictMode, setStrictMode] = useState(false);
	const [location, setLocation] = useState("Taiwan");

	const switchPanel = (panel: PANEL) => {
		switch (panel) {
			case PANEL.MENU:
				return <MenuPanel theme={theme} language={language} strictMode={strictMode} location={location} onSwitchPanel={setPanel} />;
			case PANEL.THEME:
				return <AppearancePanel theme={theme} onSelectTheme={setTheme} onBackClick={() => { setPanel(PANEL.MENU); }} />;
			case PANEL.LANGUAGE:
				return <LanguagePanel language={language} onSelectLanguage={setLanguage} onBackClick={() => { setPanel(PANEL.MENU); }} />;
			case PANEL.RESTRICT:
				return <RestrictedModePanel restrictMode={strictMode} onChangeMode={setStrictMode} onBackClick={() => { setPanel(PANEL.MENU); }} />;
			case PANEL.LOCATION:
				return <LocationPanel location={location} onSelectLocation={setLocation} onBackClick={() => { setPanel(PANEL.MENU); }} />;
		}
	};


	return (
		<div className="w-100 rounded-2xl fixed top-15 right-5 bg-(--dropDownGround) shadow-md overflow-y-auto max-h-(--drop-list-max-height) scrollbar-button-hide">
			{switchPanel(panel)}
		</div>
	);
}