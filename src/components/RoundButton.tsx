interface RoundButtonProps extends React.PropsWithChildren {
	className?: string;
	onClick?: () => void;
}

export default function RoundButton({ className = "", onClick, children }: RoundButtonProps) {
	return (
		<button className={[className, "rounded-full cursor-pointer aspect-square"].join(" ")} onClick={onClick}>
			{children}
		</button>
	);
}