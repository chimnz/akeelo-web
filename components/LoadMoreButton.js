import loadMoreIcon from '../assets/images/iconmonstr-arrow-down-thin.svg'
import nowLoadingIcon from '../assets/images/iconmonstr-menu-dot-horizontal-thin.svg'
import { useState } from 'react'

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
	const [ isLoading, setIsLoading ] = useState(false)

	function flipLoadingState() { setIsLoading(!isLoading) }

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
			onMouseEnter={() => {
				loadMoreResults()
				flipLoadingState()
			}}
			onMouseLeave={flipLoadingState}
		>
			<img
				style={imgStyle}
				src={isLoading ? nowLoadingIcon : loadMoreIcon}
			/>
		</button>
	)
}

export default LoadMoreButton