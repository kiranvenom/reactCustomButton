import MyButton from './Components/MyButton';

const App = () => {
	const handleClick = () => {
		console.log('Button clicked!');
	};

	return (
		<div>
			<MyButton
				style={{
					color: 'white',
					backgroundColor: 'pink',
					padding: '0.6rem 1.6rem',
					borderRadius: '4px',
					border: 'none',
				}}
				disabled={false}
				onClick={handleClick}
				className='nowSimple'
				theme='primary'>
				Hello
			</MyButton>
		</div>
	);
};

export default App;
