const wrapperStyle = {
	display: 'flex',
	fontSize: '1.75rem',
	marginTop: '2rem',
	maxWidth: '800px'
}

const textStyle = {
	margin: 'auto'
}

function SearchStats(props) {
	if (props.totalResults) {
		const statsMsg = `${props.totalResults} results`
		return (
			<div style={wrapperStyle}>
				<div style={textStyle}>{statsMsg}</div>
			</div>
		)
	} else {
		return null
	}
	
}

export default SearchStats