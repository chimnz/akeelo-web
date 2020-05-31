import { useRouter } from 'next/router'

function Search() {
	const router = useRouter()
	return (
		<div>
			This is a search page. The query: {router.query.q}.
		</div>
	)
}

export default Search