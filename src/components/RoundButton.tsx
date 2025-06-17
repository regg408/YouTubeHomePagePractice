interface RoundButtonProps extends React.PropsWithChildren {
	className?: string;
	onClick?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

export default function RoundButton({ className = "", onClick, onMouseEnter, onMouseLeave, children }: RoundButtonProps) {
	return (
		<button
			className={[className, "rounded-full cursor-pointer aspect-square"].join(" ")}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</button>
	);
}