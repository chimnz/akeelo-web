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
	function loadMoreResults() {
		props.setParams({
			...props.params,
			offset: props.results.length + maxOffset
		})
	}
	return (
		<button
			style={buttonStyle}
			onClick={loadMoreResults}
			onMouseOver={loadMoreResults}
		>
			{'load more'}
		</button>
	)
}

export default LoadMoreButton