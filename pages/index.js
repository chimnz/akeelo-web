import { useRouter } from 'next/router'

const outerDivStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
}

const akeeloStyle = {
	fontSize: '10rem'
}

const inputStyle = {
	width: '20rem',
	height: '3rem'
}

function HomePage() {
	const router = useRouter()
	function doSearch() {
		router.push({pathname: '/search'})
	}

	return (
		<div
			style={outerDivStyle}
			className='center-fixed'
		>
			<div style={akeeloStyle}>akeelo</div>
			<form
				onSubmit={doSearch}
			>
				<input
					style={inputStyle}
					type='text'
				/>
			</form>
		</div>
	)
}

export default HomePage