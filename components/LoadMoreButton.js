const buttonStyle = {
	width: '100%',
	backgroundColor: 'silver',
	color: 'white',
	height: '10rem',
	border: 'none',
	fontSize: '2rem'
}

const maxOffset = 10

function LoadMoreButton(props) {
	return (
		<button
			style={buttonStyle}
			onClick={() => {
				props.setParams({
					...props.urlQueryParams,
					offset: props.results.length + maxOffset
				})
			}}
		>
			{'load more'}
		</button>
	)
}

export default LoadMoreButton