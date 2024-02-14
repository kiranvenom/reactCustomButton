import React from 'react';

const btnTheme = {
	default: '#2b2b2b',
	primary: '#066298',
	secondary: '#ed7636',
};

const MyButton = ({
	children = 'click me',
	style,
	disabled = false,
	onClick,
	className,
	theme = 'default',
}) => {
	const bgColor = btnTheme[theme] || btnTheme.default;
	return (
		<>
			<button
				className={className}
				onClick={onClick}
				style={{ ...style, backgroundColor: bgColor }}
				disabled={disabled}>
				{children}
			</button>
		</>
	);
};

export default MyButton;
