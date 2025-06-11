interface ToggleSwitchProps {
	isChecked: boolean;
	onChange?: (isChecked: boolean) => void;
}

/**
 * source: https://tailgrids.com/components/toggle-switch
 * @param props 
 * @returns 
 */
export default function ToggleSwitch(props: ToggleSwitchProps) {
	const { isChecked, onChange } = props;

	return (
		<label className="flex cursor-pointer select-none items-center">
			<div className="relative">
				<input type="checkbox" checked={isChecked} onChange={() => { onChange?.(!isChecked); }} className="sr-only" />
				<div className={`box block h-8 w-14 rounded-full ${isChecked ? "bg-blue-400" : "bg-gray-500"}`}></div>
				<div className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${isChecked ? "translate-x-full" : ""}`}></div>
			</div>
		</label>
	);
}