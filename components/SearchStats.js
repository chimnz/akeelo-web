const wrapperStyle = {
	display: 'flex',
	fontSize: '1.75rem',
	maxWidth: '800px',
	justifyContent: 'flex-end',
	marginTop: '1.5rem',
	marginBottom: '1.5rem',
}

function SearchStats(props) {
	if (props.totalResults) {
		const statsMsg = `${props.totalResults} results`
		return (
			<div style={wrapperStyle}>
				<div>{statsMsg}</div>
			</div>
		)
	} else {
		return null
	}
	
}

export default SearchStats