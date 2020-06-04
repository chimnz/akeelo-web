import loadMoreIcon from '../assets/images/iconmonstr-arrow-down-thin.svg'

const buttonStyle = {
	width: '100%',
	backgroundColor: 'inherit',
	height: '10rem',
	border: 'none',
	fontSize: '2rem'
}

const imgStyle = {
	width: '1.25em'
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
			<img
				style={imgStyle}
				src={loadMoreIcon}
			/>
		</button>
	)
}

export default LoadMoreButton