import { useRouter } from 'next/router'

function HomePage() {
	const router = useRouter()
	let formInput = React.createRef();

	function goToSearchPage() {
		router.push({
			pathname: '/search',
			query: {
				q: formInput.current.value
			}
		})
	}

	return (
		<div className='homepage-search'>
			<div className='logo'>akeelo</div>
			<form
				onSubmit={goToSearchPage}
			>
				<input
					className='searchbox'
					ref={formInput}
					type='text'
					placeholder='search for science'
				/>
			</form>
		</div>
	)
}

export default HomePage