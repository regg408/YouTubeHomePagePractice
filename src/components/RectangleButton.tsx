
interface RectangleButtonProps extends React.PropsWithChildren {
	className?: string;
	onClick?: () => void;
}

export default function RectangleButton({ className = "", onClick, children }: RectangleButtonProps){
	return (
		<button className={[className, "cursor-pointer"].join(" ")} onClick={onClick}>
			{children}
		</button>
	);
}