import { useRouter } from 'next/router'

async function doSearch() {
	const endpoint = 'https://share.osf.io/api/v2/search/creativeworks/_search'
	const response = await fetch(endpoint, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/vnd.api+json'
		}	
	})
	const data = await response.json()
	return data;
}

doSearch()
	.then(data => console.log(data))

function SearchPage() {
	const router = useRouter()

	return (
		<div>
			This is a search page. The query: {router.query.q}.
		</div>
	)
}

export default SearchPage